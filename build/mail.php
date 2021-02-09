<?php
$recipient = "halle.atx@gmail.com";
$subject = "Portfolio Response Message";
$location = "index.html";
$sender = $recipient;
$arr = $_REQUEST['useCurrentMessage '];

$body .= "Name: ".$_REQUEST['name']."\n";
$body .= "Email: ".$_REQUEST['email']."\n";
$body .= "Message ".$_REQUEST['message']."\n";

mail($recipient, $subject, $body, "From: $sender") or die('Mail could not be sent.');

header("Location: $location");
?>