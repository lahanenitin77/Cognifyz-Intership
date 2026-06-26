/* ==========================
   Typing Animation
========================== */

const text = [
    "Web Developer",
    "C Programmer",
    "JavaScript Learner",
    "Frontend Learner",
    "Computer Engineering Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1200);

    } else {

        setTimeout(type, 120);

    }

})();

/* ==========================
   Live Date & Time
========================== */

function updateClock() {

    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleDateString() +
        "<br>" +
        now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();

/* ==========================
   Dynamic Button Color
========================== */

const colors = [
    "#2563EB",
    "#16A34A",
    "#DC2626",
    "#F59E0B",
    "#7C3AED",
    "#EC4899"
];

const btn = document.getElementById("colorBtn");

btn.addEventListener("click", function () {

    let random = Math.floor(Math.random() * colors.length);

    btn.style.background = colors[random];

});

/* ==========================
   Calculator
========================== */

function calculate(operator) {

    let num1 = parseFloat(document.getElementById("num1").value);

    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {

        alert("Please enter both numbers.");

        return;
    }

    let result;

    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":

            if (num2 === 0) {

                alert("Cannot divide by zero.");

                return;
            }

            result = num1 / num2;
            break;

    }

    document.getElementById("result").innerHTML =
        "Result : " + result;

}

/* ==========================
   Contact Form Validation
========================== */

document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    if (name === "") {

        alert("Please enter your name.");

        return;
    }

    if (email === "") {

        alert("Please enter your email.");

        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        alert("Invalid Email.");

        return;
    }

    if (message.length < 10) {

        alert("Message should contain at least 10 characters.");

        return;
    }

    alert("Form Submitted Successfully!");

    this.reset();

});

/* ==========================
   Fade In Animation
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

}); 