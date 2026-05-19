/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

/* FACILITIES DATA */

const facilities = [

{
image:"images/lab.png",
title:"Smart Computer Lab",
desc:"Well-equipped lab with latest systems"
},

{
image:"images/ac.png",
title:"Air Conditioned Classrooms",
desc:"Comfortable classes for better learning"
},

{
image:"images/internet.png",
title:"High Speed Internet",
desc:"24/7 high-speed internet access for learning and research"
},

{
image:"images/book.png",
title:"Study Material",
desc:"Access to books, notes and learning resources"
},

{
image:"images/practical.png",
title:"Practical Learning",
desc:"Hands-on projects and practical real-world experience"
},

{
image:"images/placement.png",
title:"Placement Support",
desc:"100% placement support and career guidance"
}

];

/* RENDER FACILITIES */

const facilityContainer =
document.getElementById("facilityContainer");

facilities.forEach((facility)=>{

facilityContainer.innerHTML += `

<div class="facility-card fade-up">

<img src="${facility.image}" alt="">

<h3>${facility.title}</h3>

<p>${facility.desc}</p>

</div>

`;

});

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