/* MOBILE MENU */

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

/* CONTACT DATA */

const contactData = [

{
icon:"fa-solid fa-phone",
title:"Call Us",
info:"+91 1234567890"
},

{
icon:"fa-solid fa-envelope",
title:"Email Us",
info:"troubleshooter@gmail.com"
},

{
icon:"fa-solid fa-location-dot",
title:"Visit Us",
info:"123 Academy Road, City, State-000000"
},

{
icon:"fa-solid fa-clock",
title:"Working Hours",
info:"Mon-Sat : 9AM - 7PM"
}

];

/* SOCIAL DATA */

const socialData = [

{
icon:"fa-brands fa-facebook-f",
title:"Facebook"
},

{
icon:"fa-brands fa-instagram",
title:"Instagram"
},

{
icon:"fa-brands fa-youtube",
title:"YouTube"
},

{
icon:"fa-brands fa-linkedin-in",
title:"LinkedIn"
}

];

/* RENDER CONTACT */

const contactInfo =
document.getElementById("contactInfo");

contactData.forEach(item=>{

contactInfo.innerHTML += `

<div class="contact-item fade-up">

<div class="contact-icon">

<i class="${item.icon}"></i>

</div>

<div>

<h3>${item.title}</h3>

<span>${item.info}</span>

</div>

</div>

`;

});

/* RENDER SOCIAL */

const socialContainer =
document.getElementById("socialContainer");

socialData.forEach(item=>{

socialContainer.innerHTML += `

<div class="social-item fade-up">

<i class="${item.icon}"></i>

<h3>${item.title}</h3>

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