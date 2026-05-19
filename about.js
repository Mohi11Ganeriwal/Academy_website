/* MOBILE MENU */

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

/* ABOUT CONTENT */

const aboutContent = `
TroubleShooters Academy was started in April 2022
with a mission to provide quality computer education
and practical training to students.

We believe in practical learning skills,
skill development, and building confidence
in every student.

Our industry-oriented courses are designed
to help students achieve their career goals.

We are committed to providing the best learning environment,
expert guidance and placement support.
`;

document.getElementById("aboutText")
.innerText = aboutContent;

/* MISSION */

document.getElementById("missionText")
.innerText =
"To provide affordable and practical computer education that helps students develop real-world technical and professional skills.";

/* VISION */

document.getElementById("visionText")
.innerText =
"To become a trusted computer academy that empowers students through quality education, innovation and career opportunities.";

/* WHY CHOOSE */

const whyData = [

{
image:"images/expert.png",
title:"Expert Trainers",
desc:"Learn from industry experienced trainers."
},

{
image:"images/practical.png",
title:"Practical Learning",
desc:"Hands-on training with real-world projects."
},

{
image:"images/certificate.png",
title:"Certification",
desc:"Industry recognized certification."
},

{
image:"images/placement.png",
title:"Placement Support",
desc:"100% placement support for deserving students."
}

];

const whyContainer =
document.getElementById("whyContainer");

whyData.forEach(item=>{

whyContainer.innerHTML += `

<div class="why-card fade-up">

<img src="${item.image}" alt="">

<h3>${item.title}</h3>

<p>${item.desc}</p>

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

/* ANIMATION */

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