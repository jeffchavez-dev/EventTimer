const myEvent = document.querySelector(".myEvent")
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


let eventDate = "01 Jan 2023";

const myTimer = () => {
    
    const newDate = new Date(eventDate).getTime();
    const currentDate = new Date().getTime();

    //get the remaining seconds between the current date and the event

    const reversedCount = Math.floor((newDate - currentDate) / 1000);
   

    //Get seconds, minutes, hours, & days
    const timeSeconds = Math.floor(reversedCount) % 60;

    seconds.innerText = timeSeconds; 
    console.log(timeSeconds);

}


setInterval(myTimer, 1000);
