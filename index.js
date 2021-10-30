const greeting = document.getElementById("greeting");
const changeBack = document.getElementById("changeBack");
const nameVar = document.getElementById("name");

const namePrompt = prompt("Enter Your Name");
nameVar.innerHTML = namePrompt;

const hours = new Date().getHours();

if (hours >= 1 && hours < 12) {
    greeting.innerHTML = "Good Morning";
    changeBack.style.backgroundColor = "green";
} else if (hours >= 12 && hours < 16) {
    greeting.innerHTML = "Good Afternoon";
    changeBack.style.backgroundColor = "gold"
} else if (hours >= 16 && hours < 20) {
    greeting.innerHTML = "Good evening";
    changeBack.style.backgroundColor = "orange";
} else {
    greeting.innerHTML = "Good Night";
    changeBack.style.backgroundColor = "pink";
}