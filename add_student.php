<!DOCTYPE html>
<html>
<head>
    <title>Add Student</title>

    <style>

        body{
            font-family: Arial;
            background: #f5f5f5;
        }

        .form-box{
            width: 400px;
            background: white;
            margin: 50px auto;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px lightgray;
        }

        h2{
            text-align: center;
        }

        input{
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            box-sizing: border-box;
        }

        button{
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            border: none;
            background: blue;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

    </style>
</head>

<body>

<div class="form-box">

<h2>Add Student</h2>

<form action="save_student.php"
method="POST"
enctype="multipart/form-data">

<input type="text"
name="student_name"
placeholder="Student Name"
required>

<input type="text"
name="course"
placeholder="Course"
required>

<input type="text"
name="company"
placeholder="Company Name"
required>

<input type="text"
name="package"
placeholder="Package (Example: 3.5 LPA)"
required>

<label>Student Image</label>
<input type="file"
name="student_image"
required>

<label>Company Logo</label>
<input type="file"
name="company_logo"
required>

<button type="submit">
Save Student
</button>

</form>

</div>

</body>
</html>