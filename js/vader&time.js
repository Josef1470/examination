// Fetchar vader info från openweather, Huddinge.
fetch("https://api.openweathermap.org/data/2.5/weather?q=Huddinge&units=metric&appid=0cc4f58d720260238351a2d3f4b4c2f4")
.then(res => res.json())
.then(data => {
    let temp = data.main.temp;
    document.getElementById("weather").innerHTML = `Huddinge: ${temp} &#8451`
})


let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

document.getElementById("date").innerHTML = `Datum: ${year}/${month}-${day}`;



// page refresh script
function refresh(){
    location.reload();
}
  
  setInterval(refresh, 60000);