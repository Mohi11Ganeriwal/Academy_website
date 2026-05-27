<?php
session_start();

/* DATABASE CONNECTION */

$conn = new mysqli(
"localhost",
"root",
"",
"troubleshooters_db"
);

/* CHECK CONNECTION */

if($conn->connect_error){

die("Connection Failed : " . $conn->connect_error);

}

$success = false;
$message = "";

/* ================= REGISTER ================= */

if(isset($_POST['register'])){

$fullname = $_POST['fullname'];

$email = $_POST['email'];

$mobile = $_POST['mobile'];

$qualification = $_POST['qualification'];

$city = $_POST['city'];

$state = $_POST['state'];

$password =
password_hash($_POST['password'], PASSWORD_DEFAULT);

/* CHECK EMAIL */

$check =
$conn->query("SELECT * FROM user WHERE email='$email'");

if($check->num_rows > 0){

$message = "Email already exists!";

}else{

$sql = "INSERT INTO user
(fullname,email,mobile,qualification,city,state,password)

VALUES

('$fullname','$email','$mobile','$qualification','$city','$state','$password')";

if($conn->query($sql)){

$success = true;

}else{

$message = "Database Error : " . $conn->error;

}

}

}
?>

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Register | TroubleShooters Academy</title>

<link rel="stylesheet" href="login.css">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>

</head>

<body>

<div class="container">

<!-- LEFT PANEL -->

<div class="left-panel">

<img src="images/logo.png" class="logo">

<h1>
Start Your <br>
<span>Learning Journey</span><br>
With Us
</h1>

<p>
Join thousands of students learning
with TroubleShooters Academy.
</p>

<div class="features">

<div>
<i class="fa-solid fa-graduation-cap"></i>
<span>Expert Faculty</span>
</div>

<div>
<i class="fa-solid fa-laptop-code"></i>
<span>Practical Learning</span>
</div>

<div>
<i class="fa-solid fa-certificate"></i>
<span>Certification</span>
</div>

<div>
<i class="fa-solid fa-chart-line"></i>
<span>Placement Support</span>
</div>

</div>

</div>

<!-- RIGHT PANEL -->

<div class="right-panel">

<div class="form-box">

<?php if(!$success){ ?>

<h2>
Create Your Account
</h2>

<p class="subtext">
Fill the form below to continue
</p>

<p class="message">
<?php echo $message; ?>
</p>

<form method="POST">

<div class="grid">

<div class="input-box">

<i class="fa-regular fa-user"></i>

<input type="text"
name="fullname"
placeholder="Full Name"
required>

</div>

<div class="input-box">

<i class="fa-regular fa-envelope"></i>

<input type="email"
name="email"
placeholder="Email Address"
required>

</div>

</div>

<div class="grid">

<div class="input-box">

<i class="fa-solid fa-phone"></i>

<input type="text"
name="mobile"
placeholder="Mobile Number"
required>

</div>

<div class="input-box">

<i class="fa-solid fa-lock"></i>

<input type="password"
name="password"
placeholder="Create Password"
required>

</div>

</div>

<div class="grid">

<div class="input-box">

<i class="fa-solid fa-graduation-cap"></i>

<input type="text"
name="qualification"
placeholder="Highest Qualification"
required>

</div>

<div class="input-box">

<i class="fa-solid fa-location-dot"></i>

<input type="text"
name="city"
placeholder="City"
required>

</div>

</div>

<div class="input-box">

<i class="fa-solid fa-map"></i>

<input type="text"
name="state"
placeholder="State"
required>

</div>

<button type="submit"
name="register"
class="main-btn">

Create Account

</button>

</form>

<?php } else { ?>

<div class="success-box">

<i class="fa-solid fa-circle-check"></i>

<h2>
Registration Successful
</h2>

<p>
We Will Connect You Shortly.
Your details have been received successfully.
</p>

<a href="home.php"
class="home-btn">

Back To Home

</a>

</div>

<?php } ?>

</div>

</div>

</div>

<script src="login.js"></script>

</body>
</html>