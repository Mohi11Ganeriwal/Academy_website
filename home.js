const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

/* COURSES */

const courses = [

{
image:"images/course1.png",
title:"Computer Hardware",
description:"Learn hardware practically"
},

{
image:"images/course2.png",
title:"Networking",
description:"Learn networking & servers"
},

{
image:"images/course3.png",
title:"Ethical Hacking",
description:"Cybersecurity & ethical hacking"
},

{
image:"images/course4.png",
title:"DCA",
description:"Diploma in Computer Application"
},

{
image:"images/course5.png",
title:"Programming",
description:"Learn coding & software"
}

];

const courseContainer =
document.getElementById("courseContainer");

courses.forEach(course=>{

courseContainer.innerHTML += `

<div class="course-card fade-up">

<img src="${course.image}" alt="">

<h3>${course.title}</h3>

<p>${course.description}</p>

</div>

`;

});

/* STUDENTS */

const students = [

{
image:"images/student1.png",
name:"Rahul Sharma",
company:"TCS",
package:"3 LPA"
},

{
image:"images/student2.png",
name:"Priya Verma",
company:"Infosys",
package:"2.8 LPA"
},

{
image:"images/student3.png",
name:"Aman Singh",
company:"Wipro",
package:"3.2 LPA"
},

{
image:"images/student4.png",
name:"Neha Patel",
company:"HCL",
package:"2.5 LPA"
},

{
image:"images/student5.png",
name:"Rohit Jain",
company:"Capgemini",
package:"3.5 LPA"
}

];

const studentContainer =
document.getElementById("studentContainer");

students.forEach(student=>{

studentContainer.innerHTML += `

<div class="student-card fade-up">

<img src="${student.image}" alt="">

<h3>${student.name}</h3>

<p>${student.company}</p>

<p>${student.package}</p>

</div>

`;

});

/* AUTO STUDENT SLIDER */

let scrollAmount = 0;

setInterval(()=>{

scrollAmount += 320;

if(scrollAmount >= studentContainer.scrollWidth){

scrollAmount = 0;

}

studentContainer.scrollTo({

left:scrollAmount,
behavior:"smooth"

});

},3000);

/* COUNTER */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const isPercent =
counter.classList.contains("percent");

let current =
parseInt(counter.innerText);

const increment = target / 100;

if(current < target){

current = Math.ceil(current + increment);

if(isPercent){

counter.innerText = current + "%";

}else{

counter.innerText = current;

}

setTimeout(updateCounter,20);

}else{

if(isPercent){

counter.innerText = target + "%";

}else{

counter.innerText = target;

}

}

};

updateCounter();

});

/* SCROLL ANIMATION */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade-up")
.forEach((el)=>{

observer.observe(el);

});