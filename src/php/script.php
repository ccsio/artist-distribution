<?php

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

// Process the data (for example, save it to a database or perform some operation)
$url = $data->data->url;

// Generate a response
$response = "Hello, this is your url: $url";

// Send the response back
echo json_encode($response);

?>
