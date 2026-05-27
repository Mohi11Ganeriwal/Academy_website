<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Teachers | Troubleshooters Academy</title>

<link rel="stylesheet" href="teachers.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>

</head>

<body>

<!-- TOP BAR -->

<div class="top-bar">

<div class="top-left">

<span><i class="fa-solid fa-phone"></i> +91 9284838458</span>

<span><i class="fa-solid fa-envelope"></i>troubleshootercomputers126@gmail.com</span>

</div>

<div class="top-right">

<span>Online Classes</span>
<span>Offline Classes</span>

<a href="https://www.facebook.com/share/18e5PvgyS9/" target="_blank">
<i class="fa-brands fa-facebook-f"></i>
</a>

<a href="https://www.instagram.com/troubleshooters_academy126?igsh=MzRlODBiNWFlZA==" target="_blank">
<i class="fa-brands fa-instagram"></i>
</a>

<a href="https://linkedin.com/in/yourpage" target="_blank">
<i class="fa-brands fa-linkedin-in"></i>
</a>

<a href="https://youtube.com/@troubleshooteracademy?si=qf1XL-TsxzlA9Kwn" target="_blank">
<i class="fa-brands fa-youtube"></i>
</a>

</div>

</div>

<!-- NAVBAR -->

<header class="navbar">

<div class="logo-section">

<img src="images/logo.png" alt="">

<div>

<h2>
Troubleshooters <br>
Computer Academy
</h2>

<p>Dream.Believe.Achieve</p>

</div>

</div>

<nav id="navLinks">

<a href="home.php">Home</a>
<a href="about.html">About Us</a>
<a href="courses.html">Courses</a>
<a href="facilities.html">Facilities</a>
<a href="teachers.php" class="active">Teachers</a>
<a href="contact.html">Contact</a>

<div class="language-box">
    <div id="google_translate_element"></div>
</div>

</nav>

<a href="login.php">
<button class="enroll-btn">
Register Now
</button>
</a>

<div class="menu-btn" id="menuBtn">
<i class="fa-solid fa-bars"></i>
</div>

</header>

<!-- HERO -->

<section class="teacher-hero">

<div class="hero-left">

<h3>Our Expert Teachers</h3>

<h1>
Learn from Industry Professionals
</h1>

<p>
Our experienced faculty is dedicated to helping you build skills,
gain knowledge and achieve your career goals.
</p>

</div>

<div class="hero-right">

<img src="images/teacher-hero.png" alt="">

</div>

</section>

<!-- TEACHERS -->

<section class="teachers-section">

<div class="section-title">

<h2>Meet Our Teachers</h2>

<div class="line"></div>

</div>

<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "troubleshooters_db"
);

$sql = "SELECT * FROM teachers";
$result = mysqli_query($conn, $sql);

?>

<div class="teachers-container">

<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "troubleshooters_db"
);

$sql = "SELECT * FROM teachers";
$result = mysqli_query($conn, $sql);

?>

<div class="teachers-container">

<?php
while($row = mysqli_fetch_assoc($result))
{
?>

    <div class="teacher-card">

        <div class="teacher-image">

            <img
            src="uploads/<?php echo !empty($row['image']) ? $row['image'] : 'default-teacher.png'; ?>"
            alt=""
            onerror="this.src='images/default-teacher.png'">

        </div>

        <div class="teacher-content">

            <h3>
                <?php echo $row['teacher_name']; ?>
            </h3>

            <p>
                <?php echo $row['subject']; ?>
            </p>

        </div>

    </div>

<?php
}
?>

</div>

</div>

</section>

<!-- CTA -->

<section class="cta">

<div class="stats">

<div>

<h3 class="counter" data-target="1000">
0
</h3>

<p>Students Trained</p>

</div>

<div>

<h3>Free</h3>

<p>Laptop <br> Available</p>

</div>

<div>

<h3 class="counter percent" data-target="100">
0%
</h3>

<p>Placement Support</p>

</div>

<div>

<h3>2-3LPA</h3>

<p>Average Package</p>

</div>

<div>

<h3 class="counter percent" data-target="100">
0%
</h3>

<p>Practical Learning</p>

</div>

</div>

<div class="cta-right">

<img src="images/rocket.png" alt="">

<div>

<h2>Start Your Journey Today!</h2>

<p>
Join The Trouble Shooter Computer Academy
and make your future bright.
</p>

</div>

<a href="contact.html">

<button>Contact Us</button>

</a>

</div>

</section>

<script src="about.js"></script>

<script type="text/javascript">
function googleTranslateElementInit() {
new google.translate.TranslateElement(
{
pageLanguage: 'en',
includedLanguages: 'en,hi,mr,te,ta,gu,bn,pa,kn,ml',
layout: google.translate.TranslateElement.InlineLayout.SIMPLE
},
'google_translate_element'
);
}
</script>

<script type="text/javascript"
src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
</script>

</body>
</html>