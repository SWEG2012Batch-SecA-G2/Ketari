<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Replace these values with your database connection details
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'ketari';

    // Create a connection to the database
    $conn = new mysqli($host, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get raw JSON data
    $json_data = file_get_contents("php://input");

    // Decode JSON data
    $data = json_decode($json_data);

    // Get user data from the decoded JSON
    $username = $data->name;
    $email = $data->email;
    $idToken = $data->idToken;
    $hashedPassword = password_hash($idToken, PASSWORD_DEFAULT); // Hash the password

    // Use prepared statement to avoid SQL injection
    $stmt = $conn->prepare("SELECT * FROM user WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // User already exists, update the existing record
        $stmt = $conn->prepare("UPDATE user SET username = ?, password = ? WHERE email = ?");
        $stmt->bind_param("sss", $username, $hashedPassword, $email);
    } else {
        // User doesn't exist, insert a new record
        $stmt = $conn->prepare("INSERT INTO user (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $hashedPassword);
    }

    // Execute the prepared statement
    if ($stmt->execute()) {
        // Return user data after sign-in or sign-up
        $response = ['status' => 'success', 'message' => 'User data stored successfully', 'user' => ['name' => $username, 'email' => $email]];
        echo json_encode($response);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error storing user data']);
    }

    // Close the prepared statement and the database connection
    $stmt->close();
    $conn->close();
}
?>
