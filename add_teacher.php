<!DOCTYPE html>
<html>
<head>
    <title>Add Teacher</title>

    <style>
        body{
            font-family: Arial, sans-serif;
            background:#f5f5f5;
            padding:40px;
        }

        .container{
            width:400px;
            background:white;
            margin:auto;
            padding:30px;
            border-radius:12px;
            box-shadow:0 5px 20px rgba(0,0,0,0.1);
        }

        h2{
            text-align:center;
            margin-bottom:20px;
        }

        input{
            width:100%;
            padding:12px;
            margin:10px 0;
            border:1px solid #ccc;
            border-radius:8px;
        }

        button{
            width:100%;
            padding:12px;
            border:none;
            background:#007bff;
            color:white;
            border-radius:8px;
            cursor:pointer;
            font-size:16px;
        }
    </style>
</head>

<body>

<div class="container">

    <h2>Add Teacher</h2>

    <form action="save_teacher.php"
method="POST"
enctype="multipart/form-data">

        <input
            type="text"
            name="teacher_name"
            placeholder="Teacher Name"
            required>

        <input
            type="text"
            name="subject"
            placeholder="Subject"
            required>

        <input
            type="file"
            name="image"
            placeholder="Image Name (optional)"
        >

        <button type="submit">
            Add Teacher
        </button>

    </form>

</div>

</body>
</html>