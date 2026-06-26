// =========================
// Typing Animation
// =========================

const text = [
    "Web Developer",
    "C Programmer",
    "Computer Engineering Student",
    "Frontend Learner"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (!deleting) {

        typing.textContent = text[textIndex].substring(0, charIndex);

        charIndex++;

        if (charIndex > text[textIndex].length) {

            deleting = true;

            setTimeout(typeEffect, 1000);

            return;
        }

    } else {

        typing.textContent = text[textIndex].substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= text.length)
                textIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


// =========================
// Smooth Fade Animation
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================
// Contact Form Validation
// =========================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name=document.querySelector("input[type='text']").value.trim();

const email=document.querySelector("input[type='email']").value.trim();

const phone=document.querySelector("input[type='tel']").value.trim();

const state=document.querySelector("select").value;

const message=document.querySelector("textarea").value.trim();

if(name==""||email==""||phone==""||state==""||message==""){

alert("Please fill all fields.");

return;

}

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

alert("Enter valid Email.");

return;

}

const phonePattern=/^[0-9]{10}$/;

if(!phone.match(phonePattern)){

alert("Phone number must contain 10 digits.");

return;

}

alert("Form Submitted Successfully!");

form.reset();

});

}


// =========================
// Dynamic Button Color
// =========================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

const colors=["#2563EB","#10B981","#F59E0B","#EF4444","#8B5CF6"];

const random=colors[Math.floor(Math.random()*colors.length)];

btn.style.background=random;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background="#2563EB";

});

});


// =========================
// Live Date & Time
// =========================

const time=document.createElement("div");

time.id="clock";

time.style.position="fixed";

time.style.bottom = "25px";
time.style.right = "25px";
time.style.padding = "12px 18px";
time.style.borderRadius = "12px";
time.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
time.style.zIndex = "999";

time.style.right="20px";

time.style.background="#2563EB";

time.style.color="white";

time.style.padding="10px";

time.style.borderRadius="8px";

time.style.fontWeight="600";

document.body.appendChild(time);

function updateTime(){

const now=new Date();

time.innerHTML=now.toLocaleString();

}

setInterval(updateTime,1000);

updateTime();


// =========================
// Basic Calculator
// =========================

function calculator(){

let a=parseFloat(prompt("Enter First Number"));

let op=prompt("Enter Operator (+,-,*,/)");

let b=parseFloat(prompt("Enter Second Number"));

let ans=0;

switch(op){

case "+":

ans=a+b;

break;

case "-":

ans=a-b;

break;

case "*":

ans=a*b;

break;

case "/":

ans=a/b;

break;

default:

alert("Invalid Operator");

return;

}

alert("Result = "+ans);

}


// =========================
// Create Calculator Button
// =========================

const calc=document.createElement("button");

calc.innerHTML="Calculator";

calc.className="btn";

calc.style.position = "fixed";
calc.style.left = "20px";
calc.style.bottom = "80px";
calc.style.padding = "12px 25px";
calc.style.border = "none";
calc.style.borderRadius = "30px";
calc.style.background = "#2563EB";
calc.style.color = "#fff";
calc.style.cursor = "pointer";
calc.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
calc.style.zIndex = "999";

calc.onclick=calculator;

document.body.appendChild(calc);