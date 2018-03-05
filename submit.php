<?php

function check_type($form_type){

	if(isset($_POST[$form_type])){
		return true;
	} else {
		return false;
	}

}

//purify email
//it is unlikely that email will be injected with these errors,
//but let's do this for security.
function clean_email($bad_email) {

	$bad_remove = array("href", "bcc:", "to:", "cc:", "content-type");
	return str_replace($bad_remove, "", $bad_email);

}

if (check_type("mssgForm")){

	//set this to your email address.
	$email_to = "somewhere@nowhere.com";
	$name = addslashes($_POST["fullName"]);
	$email_from = clean_email($_POST["email"]);
	$site_url = $_POST["website"];
	$message = addslashes($_POST["message"]);
	$email_subject = "Musk Template: Message";
	
	if (empty($site_url)){
		$site_url = "none";
	}
	
	//this error is generated when these values are empty,
	//but this is unlikely to happen, as validation is already
	//done through jQuery.
	if (empty($name) OR empty($email_from) OR empty($message)){
		die("Some or all values are empty.");
		exit();
	}
	
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	
	$musk_message = "Name: " . stripslashes($name) . "<br>";
	$musk_message .= "Email: " . $email_from . "<br>";
	$musk_message .= "Website: " . $site_url . "<br>";
	$musk_message .= "Message: <p>" . stripslashes($message) . "</p><br>";
	
	//send email through PHP server
	if (@mail($email_to, $email_subject, $musk_message, $headers)){
		
?>

<!-- your success message here -->
<b>Email Sent.</b><br>

<?php } else { die(); ?>

<!-- error message here -->
<b>Error sending mail.</b>

<?php
			 }
}

if (check_type("subsForm")){
	echo "subscription sent. <br>";
	echo $_POST["sub-email"];
}

?>