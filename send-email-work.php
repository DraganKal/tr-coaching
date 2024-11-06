<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name-u'];
  $phone = $_POST['phone-u'];
  $email = $_POST['email-u'];
  $location = $_POST['location-u'];
  $size = $_POST['size-u'];
  $tipProstora = $_POST['tip-prostora'];
  $adaptacijaOr = $_POST['a-ili-n'];
  $virtualTour = $_POST['virtuelna-tura'];
  $izvodjenje = $_POST['izvodjenje'];
  $stil = $_POST['stil'];
  $budget = $_POST['budget'];
  $to = 'info@teodorarankov.com';
  $subject = 'Novi upitnik sa sajta';
  $headers = "From: no-reply@teodorarankov.com\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

  // Send email to the website owner
  $fullMessage = "Ime i prezime: $name\nTelefon: $phone\nEmail: $email\nLokacija: $location\nKvadratura: $size\nTip prostora: $tipProstora
  \nAdaptacija ili novogradnja: $adaptacijaOr\n360 VT: $virtualTour\nIzvodjenje: $izvodjenje\nOpis stila: $stil\nBudzet: $budget";
  mail($to, $subject, $fullMessage, $headers);

  http_response_code(200);
} else {
  http_response_code(400);
}
