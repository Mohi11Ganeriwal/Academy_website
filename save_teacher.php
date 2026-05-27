<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "troubleshooters_db"
);

$teacher_name = $_POST['teacher_name'];
$subject = $_POST['subject'];

$imageName = $_FILES['image']['name'];
$tempName = $_FILES['image']['tmp_name'];

move_uploaded_file($tempName, "uploads/".$imageName);

$sql = "INSERT INTO teachers
(teacher_name, subject, image)

VALUES

('$teacher_name', '$subject', '$imageName')";

if(mysqli_query($conn, $sql))
{
    echo "Teacher Added Successfully!";
}
else
{
    echo "Error: " . mysqli_error($conn);
}

?>