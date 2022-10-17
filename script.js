const myEvent = document.querySelector(".myEvent")
const gear = document.getElementById("control-gear");
const controls = document.getElementById("controls");
const setEvent = document.getElementById("setEvent");
const setEventBtn = document.getElementById("setEventBtn");
const setDateBtn = document.getElementById("setDateBtn");
const setDateEvent = document.getElementById("setDateEvent");
const file = document.getElementById("fileUpload");
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");


gear.addEventListener('click', () => {
    controls.classList.toggle('show');
})

setEventBtn.addEventListener('click', () => {
    myEvent.innerText = setEvent.value;
})


setEvent.addEventListener('keyup', (e)=> {
    if(e.keycode === 13) {
        myEvent.innerHTML = setEvent.value;
        setEvent.setAttribute("value", "New");
        console.log(setEvent);
    }
  
})


let eventDate = "";
setDateBtn.addEventListener('click', () => {
    eventDate = setDateEvent.value;
   
})



const myTimer = () => {
if(eventDate == "") {
    return 0;
} else {
    const newDate = new Date(eventDate).getTime();
    const currentDate = new Date().getTime();

    //get the remaining seconds between the current date and the event

    const reversedCount = Math.floor((newDate - currentDate) / 1000);
   

    // Get seconds, minutes, hours, & days
   
    const days = Math.floor(reversedCount / 3600 / 24);
    const hours = Math.floor(reversedCount / 3600) % 24;
    const minutes = (Math.floor(reversedCount / 60) % 24) % 60;
    const seconds = Math.floor(reversedCount) % 60;

    // set seconds, minutes, hours, & days
    document.getElementById("days").innerText = days; 
    document.getElementById("hours").innerText = hours; 
    document.getElementById("minutes").innerText = timeFormat(minutes); 
    document.getElementById("seconds").innerText = timeFormat(seconds); 

}
   
}


const timeFormat = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(myTimer, 1000);

const newBackground = document.getElementById('new-background')
let uploadImage = "";
file.addEventListener('change', () => {

    const reader = new FileReader();
    const file = document.querySelector('input[type=file]').files[0];
    reader.addEventListener('load', (files) => {
        uploadImage = reader.result;
        newBackground.style.backgroundImage = `url(${uploadImage})`;
    });
    reader.readAsDataURL(file);


})