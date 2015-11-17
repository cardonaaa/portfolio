<?php
	function postRating() {
		if (isset($_POST["stars"])) {
			$rating = $_POST["stars"];
			echo $rating;
			echo "hello i have sent something back cool";
		}
	}

	postRating();
?>