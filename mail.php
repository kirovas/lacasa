<?php 

$errors = '';
$myemail = 'web_art@i.ua';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email = $_POST['email']; 
$phone = $_POST['phone']; 
$message = $_POST['message']; 
if( empty($errors))
 
{
 
$to = $myemail;
 
$email_subject = "Заказ от: $name";
 
$email_body = "Новый заказ!. ".
 
" <br /><b>Детали заказа: \n ФИО</b>: $name \n ".
 
"<br /><b>Телефон:</b> $phone\n  <br /> <b>e-mail:</b>  $email\n <br /> <b>Сообщение: </b>  \n $message";
 
$headers = "From: $myemail\n";
 $headers .="Content-type: text/html; charset=\"utf-8\"";
//$headers .= "Reply-To: $email_address";
 
mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page
 
}




?>