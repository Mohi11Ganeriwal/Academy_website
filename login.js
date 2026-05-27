/* ================= PAGE LOADED ================= */

console.log("TroubleShooters Register Page Loaded");

/* ================= INPUT ANIMATION ================= */

const inputs =
document.querySelectorAll(".input-box input");

inputs.forEach((input)=>{

input.addEventListener("focus",()=>{

input.parentElement.style.borderColor =
"#5A00E0";

input.parentElement.style.boxShadow =
"0 0 0 5px rgba(90,0,224,0.08)";

});

input.addEventListener("blur",()=>{

input.parentElement.style.borderColor =
"#ececec";

input.parentElement.style.boxShadow =
"none";

});

});

/* ================= MOBILE NUMBER VALIDATION ================= */

const mobileInput =
document.querySelector('input[name="mobile"]');

if(mobileInput){

mobileInput.addEventListener("input",()=>{

mobileInput.value =
mobileInput.value.replace(/[^0-9]/g,'');

if(mobileInput.value.length > 10){

mobileInput.value =
mobileInput.value.slice(0,10);

}

});

}

/* ================= PASSWORD VALIDATION ================= */

const passwordInput =
document.querySelector('input[name="password"]');

if(passwordInput){

passwordInput.addEventListener("input",()=>{

const password =
passwordInput.value;

if(password.length < 6){

passwordInput.style.color = "red";

}else{

passwordInput.style.color = "#14003B";

}

});

}

/* ================= FORM VALIDATION ================= */

const registerForm =
document.querySelector("form");

registerForm.addEventListener("submit",(e)=>{

const fullname =
document.querySelector('input[name="fullname"]').value;

const email =
document.querySelector('input[name="email"]').value;

const mobile =
document.querySelector('input[name="mobile"]').value;

const qualification =
document.querySelector('input[name="qualification"]').value;

const city =
document.querySelector('input[name="city"]').value;

const state =
document.querySelector('input[name="state"]').value;

const password =
document.querySelector('input[name="password"]').value;

/* EMPTY CHECK */

if(
fullname === "" ||
email === "" ||
mobile === "" ||
qualification === "" ||
city === "" ||
state === "" ||
password === ""
){

e.preventDefault();

alert("Please Fill All Fields");

return;

}

/* MOBILE CHECK */

if(mobile.length !== 10){

e.preventDefault();

alert("Mobile Number Must Be 10 Digits");

return;

}

/* PASSWORD CHECK */

if(password.length < 6){

e.preventDefault();

alert("Password Must Be Minimum 6 Characters");

return;

}

/* EMAIL CHECK */

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

e.preventDefault();

alert("Enter Valid Email Address");

return;

}

});

/* ================= BUTTON EFFECT ================= */

const button =
document.querySelector(".main-btn");

button.addEventListener("mouseenter",()=>{

button.style.transform =
"translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform =
"translateY(0px)";

});

/* ================= SUCCESS ANIMATION ================= */

const successBox =
document.querySelector(".success-box");

if(successBox){

successBox.style.animation =
"fadeIn 0.6s ease";

}

/* ================= AUTO CLOSE ALERT ================= */

const message =
document.querySelector(".message");

if(message && message.innerText.trim() !== ""){

setTimeout(()=>{

message.style.display = "none";

},4000);

}