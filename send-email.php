<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $naslov = $_POST['subject'];
  $to = 'info@teodorarankov.com';
  $subject = 'Nova poruka sa sajta';
  $headers = "From: no-reply@teodorarankov.com\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

  // Send email to the website owner
  $fullMessage = "Subject: $naslov\nIme i prezime: $name\nEmail: $email\nPoruka: $message";
  mail($to, $subject, $fullMessage, $headers);

  http_response_code(200);
} else {
  http_response_code(400);
}
