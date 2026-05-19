// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// ================= STUDENT DATA =================

const students = [

    {
        name: "Rahul Sharma",
        image: "images/student1.png"
    },

    {
        name: "Priya Mehta",
        image: "images/student2.png"
    },

    {
        name: "Aman Verma",
        image: "images/student3.png"
    },

    {
        name: "Sneha Jain",
        image: "images/student4.png"
    },

    {
        name: "Rohit Gupta",
        image: "images/student5.png"
    }

];


// ================= LOAD STUDENTS =================

const studentContainer = document.getElementById("studentContainer");

students.forEach(student => {

    const card = document.createElement("div");

    card.classList.add("student-card");

    card.innerHTML = `
    
        <img src="${student.image}" alt="${student.name}">
        
        <h3>${student.name}</h3>

    `;

    studentContainer.appendChild(card);

});


// ================= NAVBAR SCROLL EFFECT =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.padding = "12px 6%";
        navbar.style.background = "rgba(255,255,255,0.98)";
        navbar.style.backdropFilter = "blur(10px)";

    }
    else{

        navbar.style.padding = "18px 6%";
        navbar.style.background = "#fff";

    }

});


// ================= COURSE CARD HOVER EFFECT =================

const cards = document.querySelectorAll(".course-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 10px 30px rgba(29,27,80,0.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 5px 20px rgba(0,0,0,0.12)";

    });

});