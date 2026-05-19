<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "troubleshooters_db"
);

if (!$conn)
{
    die("Database Connection Failed");
}

$name = $_POST['student_name'];
$course = $_POST['course'];
$company = $_POST['company'];
$package = $_POST['package'];

$student_image =
$_FILES['student_image']['name'];

$company_logo =
$_FILES['company_logo']['name'];

$tmp_student =
$_FILES['student_image']['tmp_name'];

$tmp_logo =
$_FILES['company_logo']['tmp_name'];

move_uploaded_file(
    $tmp_student,
    "images/".$student_image
);

move_uploaded_file(
    $tmp_logo,
    "images/".$company_logo
);

$sql = "INSERT INTO students
(student_name, course,
company, package_lpa,
image, company_logo)

VALUES

('$name',
'$course',
'$company',
'$package',
'$student_image',
'$company_logo')";

if(mysqli_query($conn, $sql))
{
    echo "Student Added Successfully";
}
else
{
    echo mysqli_error($conn);
}

?>