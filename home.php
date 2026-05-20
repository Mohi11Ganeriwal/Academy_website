<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>TroubleShooters Academy</title>

<link rel="stylesheet" href="home.css">

<link rel="preconnect" href="https://fonts.googleapis.com">

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>

</head>

<body>

<!-- TOP BAR -->

<div class="top-bar">

<div class="top-left">

<span>
<i class="fa-solid fa-phone"></i>
+91 1234567890
</span>

<span>
<i class="fa-solid fa-envelope"></i>
info@troubleshooteracademy.com
</span>

</div>

<div class="top-right">

<span>Online Classes</span>

<span>Offline Classes</span>

<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-linkedin-in"></i>
<i class="fa-brands fa-youtube"></i>

</div>

</div>

<!-- NAVBAR -->

<header class="navbar">

<div class="logo-section">

<img src="images/logo.png" alt="">

<div>

<h2>
TroubleShooters <br>
Computer Academy
</h2>

<p>Dream.Believe.Achieve</p>

</div>

</div>

<nav id="navLinks">

<a href="home.php" class="active">Home</a>

<a href="about.html">About Us</a>

<a href="courses.html">Courses</a>

<a href="facilities.html">Facilities</a>

<a href="teachers.html">Teachers</a>

<a href="contact.html">Contact</a>

</nav>

<button class="enroll-btn">
Enroll Now
</button>

<div class="menu-btn" id="menuBtn">
<i class="fa-solid fa-bars"></i>
</div>

</header>

<!-- HERO -->

<section class="hero">

<div class="hero-left">

<h3>Shape Your Future with</h3>

<h1>
TroubleShooters <br>
Computer Academy
</h1>

<p>
Empowering young minds with quality computer education.
Join us and build your bright future with industry-ready skills.
</p>

<div class="hero-buttons">

<button class="explore-btn">
Explore Courses
</button>

<button class="watch-btn">

<i class="fa-solid fa-play"></i>

Watch Video

</button>

</div>

</div>

<div class="hero-center">

<img src="images/hero.png" alt="">

</div>

<div class="hero-right">

<div class="feature-box fade-up">

<div class="feature-left">

<i class="fa-solid fa-laptop"></i>

<h4>
Free Permanent <br>
Laptop
</h4>

</div>

<span>
Pay Full Fees <br>
at Beginning
</span>

</div>

<div class="feature-box fade-up">

<div class="feature-left">

<i class="fa-solid fa-shirt"></i>

<h4>
Free T-Shirt,<br>
Bag & Books
</h4>

</div>

<span>
All Included <br>
For Students
</span>

</div>

<div class="feature-box fade-up">

<div class="feature-left">

<i class="fa-solid fa-calendar-days"></i>

<h4>
3 Day <br>
Demo Classes
</h4>

</div>

<span>
Try Before <br>
You Decide
</span>

</div>

<div class="feature-box fade-up">

<div class="feature-left">

<i class="fa-solid fa-chart-line"></i>

<h4>
Average Package <br>
2-3LPA
</h4>

</div>

<span>
Placement <br>
Support
</span>

</div>

</div>

</section>

<!-- INFO STRIP -->

<section class="info-strip">

<div class="info-card fade-up">

<h4>Online & Offline</h4>

<p>Learn from anywhere</p>

</div>

<div class="info-card fade-up">

<h4>Practical Learning</h4>

<p>Hands-on projects</p>

</div>

<div class="info-card fade-up">

<h4>Certification</h4>

<p>Industry recognized</p>

</div>

<div class="info-card fade-up">

<h4>Placement Support</h4>

<p>100% support provided</p>

</div>

</section>

<!-- COURSES -->

<section class="courses-section">

<div class="section-title">

<div class="line"></div>

<h2>Our Popular Courses</h2>

</div>

<div class="course-container" id="courseContainer">

</div>
<div class="view-btn">

<button>
View All Courses
</button>

</div>

</section>

<!-- STUDENTS -->

<section class="students-section">

<div class="section-title center">

<div class="line"></div>

<h2>Our Students, Our Pride</h2>

</div>

<div class="students-container" id="studentContainer">

<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "troubleshooters_db"
);

$sql = "SELECT * FROM students";
$result = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($result))
{
?>

<div class="student-card">

    <img
    src="images/<?php echo $row['image']; ?>"
    class="student-img">

    <h3>
        <?php echo $row['student_name']; ?>
    </h3>

    <p>
        <?php echo $row['course']; ?>
    </p>

    <p>
        Placed at
        <strong>
            <?php echo $row['company']; ?>
        </strong>
    </p>

    <img
    src="images/<?php echo $row['company_logo']; ?>"
    class="company-logo">

    <h4>
        Package:
        <?php echo $row['package_lpa']; ?>
    </h4>

</div>

<?php
}
?>

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

<p>Laptop Available</p>

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
Join TroubleShooters Computer Academy
and make your future bright.
</p>

</div>

<button>Contact Us</button>

</div>

</section>

<script src="home.js"></script>

</body>

</html>