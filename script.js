const myEvent = document.querySelector(".myEvent")
const gear = document.getElementById("control-gear");
const controls = document.getElementById("control-container");
const setDateEvent = document.getElementById("setDateEvent");


gear.addEventListener('click', () => {
    controls.classList.toggle('.show');
})


let eventDate = "01 Jan 2023";

const myTimer = () => {
    
    const newDate = new Date(eventDate).getTime();
    const currentDate = new Date().getTime();

    //get the remaining seconds between the current date and the event

    const reversedCount = Math.floor((newDate - currentDate) / 1000);
   

    //Get seconds, minutes, hours, & days
   
    const days = Math.floor(reversedCount / 3600 / 24);
    const hours = Math.floor(reversedCount / 3600) % 24;
    const minutes = (Math.floor(reversedCount / 60) % 24) % 60;
    const seconds = Math.floor(reversedCount) % 60;

    document.getElementById("days").innerText = days; 
    document.getElementById("hours").innerText = hours; 
    document.getElementById("minutes").innerText = timeFormat(minutes); 
    document.getElementById("seconds").innerText = timeFormat(seconds); 
}


const timeFormat = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(myTimer, 1000);
