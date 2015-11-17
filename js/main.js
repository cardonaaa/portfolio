function loadpllx() {
	$window = $(window);

	$('section[data-type="background"]').each(function(){
	 	var scroll = $(this);
	  	$(window).scroll(function() {                           
		    var yPos = -($window.scrollTop() / scroll.data('speed'));
		    var coords = '50% '+ yPos + 'px';
	    	scroll.css({ backgroundPosition: coords });    
	  	});

	}); 
}

function toggleNav() {
	$(".inav").on("click", function () { 
		$(".nav-btns").toggle();
		var icon = $(this);
		if (icon.hasClass("fa-bars")) {
			$(document).scrollTop();
			icon.removeClass("fa-bars");
			icon.addClass("fa-remove");
		} else {
			icon.removeClass("fa-remove");
			icon.addClass("fa-bars");
		}
	});
}

function submitFormShowErrors() {
	$(".submit-btn").on("click", function (event) {
		event.preventDefault();
		$.post("contact.php", $("#contact-form").serialize(), function(data) {
			alert("data");
			if (data.hasOwnProperty("errors")) {
				$(".error-list").html(data["errors"]);
			} else if (data.hasOwnProperty("result")) {
				$(".error-list").empty();
				$(".msg-success").html(data["result"]);
			}
		}, "json");
	});
}

function starlight() {
	var starattach = function () {
		var unlight = "#C5C2B9";
		var light = "#F7CB13";
		var star = $(this);
		star.prevAll().css("color", light);
		star.css("color", light);
		star.nextAll().css("color", unlight);
	};

	$(".star").each(function () { $(this).hover(starattach); });
}

function sendStarlight() {
	var starattach = function () {
		var rating = $(this).prevAll().length + 1;
		$.post("/ratings.php", {"stars" : rating}, function(data) {
			alert(data);
			alert("got here");
		});
	};

	$(".star").each(function () { $(this).on("click", starattach); });
}

$(document).ready(function(){
	loadpllx();
	toggleNav();
	starlight();
	sendStarlight();
	submitFormShowErrors();
}); 

