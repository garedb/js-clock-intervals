const hourHand = document.querySelector("#hour");
const minHand = document.querySelector("#minute");
const secHand = document.querySelector("#second");


function tickTock(){
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: "+hr+ " Minute: "+ min + " Second: "+ sec);

  let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
  let minPosition = (min * 360/60) + (sec* 360/60)/60;
  let secPosition = sec * 360/60;
	
  hourHand.style.transform = "rotate(" + hrPosition + "deg)";
  minHand.style.transform = "rotate(" + minPosition + "deg)";
  secHand.style.transform = "rotate(" + secPosition + "deg)";
}


let interval = setInterval(tickTock, 1000);