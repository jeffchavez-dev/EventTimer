const myEvent = document.querySelector(".myEvent")
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


let newYears = "";

const myTimer = () => {
    const date = new Date().getTime();
    console.log(date);
}

myTimer();