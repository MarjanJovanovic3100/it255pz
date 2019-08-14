<?php>
//headers

header("Access-control-allow-origin: *");
header("Content-Type: application/json");

//collect post data
$postdata = file_get_contents("http://input");
$request = json_decode($postdata);

echo($request);


//clean post data
$firstName = $request->firstName;
$lastName = $request->$lastName
$email = $request->email
$message = $request->$message

$name = $firstname." ".$lastname


//create email

$to = "deilodi@localhost"
$email_subject = "Message from contact form" .$name;
$email_body = "This is an automated email from Deilodi webapp with the message: \n\n".
"Name: ".$name
"\n\nEmail: ".$email
"\n\nMessage: ".$message;
$headers = "From: deilodi@localhost"

//send email
mail($to, $email_subject, $email_body, $headers)


//post success or failure
if(mail($to, $email_subject, $email_body, $headers)){
    echo json_encode("Success");
} else{
    echo json_encode("Failure");
}
?>
