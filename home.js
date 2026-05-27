const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

/* COURSES */

const courses = [

{
image:"images/hardware.png",
title:"Computer Hardware",
description:"Learn hardware practically"
},

{
image:"images/network.png",
title:"Networking",
description:"Learn networking & servers"
},

{
image:"images/hacking.png",
title:"Ethical Hacking",
description:"Cybersecurity & ethical hacking"
},

{
image:"images/dca.png",
title:"DCA",
description:"Diploma in Computer Application"
},

{
image:"images/computer.png",
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



/* AUTO STUDENT SLIDER */

/* AUTO STUDENT SLIDER */

const studentContainer =
document.getElementById("studentContainer");

console.log(studentContainer);

if(studentContainer){

let scrollAmount = 0;

setInterval(()=>{

scrollAmount += 300;

studentContainer.scrollLeft =
scrollAmount;

console.log("sliding");

},2000);

}

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