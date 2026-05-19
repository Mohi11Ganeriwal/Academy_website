/* ================= MOBILE MENU ================= */

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

/* ================= COURSES DATA ================= */

const courses = [

{
image:"images/basic-computer.png",
title:"Basic Computer",
description:"Learn computer fundamentals, MS Office and internet skills.",
duration:"3 Months",
category:"computer"
},

{
image:"images/hardware.png",
title:"Computer Hardware",
description:"Learn assembling and troubleshooting systems.",
duration:"6 Months",
category:"computer"
},

{
image:"images/network.png",
title:"Network Engineering",
description:"Learn routers, switches and server configuration.",
duration:"6 Months",
category:"network"
},

{
image:"images/hacking.png",
title:"Ethical Hacking",
description:"Learn cybersecurity and penetration testing.",
duration:"4 Months",
category:"network"
},

{
image:"images/dca.png",
title:"DCA",
description:"Diploma in Computer Application with practical training.",
duration:"12 Months",
category:"computer"
},

{
image:"images/personality.png",
title:"Personality Development",
description:"Improve communication and confidence skills.",
duration:"2 Months",
category:"career"
},

{
image:"images/english.png",
title:"Spoken English",
description:"Improve spoken English and presentation skills.",
duration:"3 Months",
category:"english"
}

];

/* ================= RENDER COURSES ================= */

const coursesContainer =
document.getElementById("coursesContainer");

function displayCourses(filteredCourses){

coursesContainer.innerHTML = "";

filteredCourses.forEach(course=>{

coursesContainer.innerHTML += `

<div class="course-card fade-up">

<img src="${course.image}" alt="">

<h3>${course.title}</h3>

<p>${course.description}</p>

<div class="course-bottom">

<span>
Duration :
<b>${course.duration}</b>
</span>

</div>

<button>
Try Demo
</button>

</div>

`;

});

observeAnimations();

}

/* ================= INITIAL LOAD ================= */

displayCourses(courses);

/* ================= FILTER BUTTONS ================= */

const filterButtons =
document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

/* REMOVE ACTIVE */

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

/* ADD ACTIVE */

button.classList.add("active");

/* FILTER */

const filter =
button.getAttribute("data-filter");

/* SHOW ALL */

if(filter === "all"){

displayCourses(courses);

}

/* FILTERED */

else{

const filteredCourses =
courses.filter(course => {

return course.category === filter;

});

displayCourses(filteredCourses);

}

});

});

/* ================= COUNTER FIX ================= */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

/* RESET */

counter.innerText = "0";

const updateCounter = () => {

const target =
Number(counter.getAttribute("data-target"));

const isPercent =
counter.classList.contains("percent");

let current =
parseInt(counter.innerText);

const increment =
Math.ceil(target / 100);

/* UPDATE */

if(current < target){

current += increment;

if(current > target){

current = target;

}

/* PERCENT */

if(isPercent){

counter.innerText =
current + "%";

}

/* NORMAL */

else{

counter.innerText =
current;

}

setTimeout(updateCounter,25);

}

/* FINAL */

else{

if(isPercent){

counter.innerText =
target + "%";

}else{

counter.innerText =
target;

}

}

};

updateCounter();

});

/* ================= ANIMATION ================= */

function observeAnimations(){

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

/* OBSERVE */

document.querySelectorAll(".fade-up")
.forEach((el)=>{

observer.observe(el);

});

}

/* INITIAL ANIMATION */

observeAnimations();