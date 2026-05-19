/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

/* TEACHERS DATA */

const teachers = [

{
image:"images/teacher1.png",
name:"Sohel Khan",
role:"Computer Hardware Expert"
},

{
image:"images/teacher2.png",
name:"Aman Verma",
role:"Software & Programming Expert"
},

{
image:"images/teacher3.png",
name:"Rahul Sharma",
role:"Network & Security Expert"
}

];

/* RENDER TEACHERS */

const teachersContainer = document.getElementById("teachersContainer");

teachers.forEach((teacher)=>{

teachersContainer.innerHTML += `

<div class="teacher-card fade-up">

<div class="teacher-image">

<img src="${teacher.image}" alt="">

</div>

<div class="teacher-content">

<h3>${teacher.name}</h3>

<p>${teacher.role}</p>

</div>

</div>

`;

});

/* SCROLL ANIMATION */

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade-up").forEach((el)=>{

observer.observe(el);

});

/* COUNTER */

const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute('data-target');
const c=+counter.innerText.replace('%','');

const increment=target/100;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;

if(counter.dataset.target === "100"){
counter.innerText += "%";
}

setTimeout(updateCounter,20);

}else{

if(counter.dataset.target === "100"){
counter.innerText = target + "%";
}else{
counter.innerText=target;
}

}

};

updateCounter();

});