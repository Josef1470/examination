fetch("https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key=6910d12798ae4f9b89648ca8d508e93a&siteid=7000&timewindow=60")
.then(res => res.json())
.then(data => {

let bus = data.ResponseData.Buses;
myString = "";

if (bus[0].DisplayTime == "Nu") { 
  myString += `Buss mot ${bus[0].Destination} avgår ${bus[0].DisplayTime} <br> <br>`;
}

else { 
  myString += `Buss mot ${bus[0].Destination} avgår om ${bus[0].DisplayTime} <br> <br>`;
}


if (bus[1].DisplayTime == "Nu") { 
  myString += `Buss mot ${bus[1].Destination} avgår ${bus[1].DisplayTime} <br> <br>`;
}

else {
  myString += `\nBuss mot ${bus[1].Destination} avgår om ${bus[1].DisplayTime} <br> <br>`;
}

for (let i = 2; i < 8; i++) {
  myString += `Buss mot ${bus[i].Destination} avgår om ${bus[i].DisplayTime} <br> <br>`;
}
  
document.getElementById("right").innerHTML = myString;
})




// button script
function myFunction(){
  let x = Math.floor((Math.random() * 100) + 1);

  document.getElementById("random_number").innerHTML = x;
}



// page refresh script
function refresh(){
  location.reload();
}

setInterval(refresh, 60000);