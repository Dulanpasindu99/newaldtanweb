<?php
// Allow cross-origin requests from your domain
$allowed_origins = ['https://aldtan.com', 'https://www.aldtan.com', 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins, true)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header('Access-Control-Allow-Origin: https://aldtan.com');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Sanitise inputs
$name    = trim(strip_tags($_POST['name'] ?? ''));
$email   = trim($_POST['emailAddress'] ?? '');
$phone   = trim(strip_tags($_POST['telephone'] ?? ''));
$source  = trim(strip_tags($_POST['howDidYouHearAboutUs'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));
$newsletter = isset($_POST['g8n6R9MO8']) && $_POST['g8n6R9MO8'] === 'yes';

// Validate required fields
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$to      = 'contact@aldtan.com';
$subject = "New enquiry from $name";

$body  = "Name:    $name\n";
$body .= "Email:   $email\n";
if ($phone !== '')  $body .= "Phone:   $phone\n";
if ($source !== '') $body .= "Source:  $source\n";
$body .= "Newsletter: " . ($newsletter ? 'Yes' : 'No') . "\n";
$body .= "\nMessage:\n$message\n";

$headers  = "From: noreply@aldtan.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (@mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message sent.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Sorry, there was an error sending your message. Please try again or email us directly.']);
}
