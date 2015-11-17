<?php

function formValidation($name, $email, $message) {
	$error_list = "";
	if (!$name) {
   	 	$error_list = "<li>please enter a name</li>";
	}
	if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
	    $error_list = "<li>please enter a valid email address</li>";
	}
	if (!$message) {
   	 	$error_list = "<li>please enter a message</li>";
	}
	return $error_list;
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$errors = formValidation($name, $email, $message);

if (empty($errors)) {
	$from = 'contact form test'; 
	$to = 'kathleenlu.26@gmail.com'; 
	$subject = 'message from contact form test';
	$body = "From: $name\n E-Mail: $email\n Message:\n $message";

	if (mail($to, $subject, $body, $from)) {
		$result = '<div class="message-success">your message has been sent sucessfully!</div>';
		echo json_encode(array("result" => $result));
	} else {
		$errors = '<li>oops, there was an error in sending your message. please try again later.</li>';
		echo json_encode(array("errors" => $errors));
	}

} else {
	echo json_encode(array("errors" => $errors));
}


?>