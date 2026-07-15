const AudioContext =
window.AudioContext ||
window.webkitAudioContext;


const audio =
new AudioContext();



function playNote(freq){


let osc =
audio.createOscillator();


let gain =
audio.createGain();



osc.type="triangle";


osc.frequency.value=freq;



gain.gain.value=.25;



osc.connect(gain);

gain.connect(audio.destination);



osc.start();


osc.stop(
audio.currentTime + 0.6
);


}





let clicks=0;


let started=false;



document
.querySelectorAll(".key")
.forEach(key=>{


key.onclick=()=>{


audio.resume();



playNote(
Number(key.dataset.note)
);



key.classList.add("active");



setTimeout(()=>{

key.classList.remove("active");

},150);



clicks++;



if(clicks>=7){

playBirthday();

}



};


});






function playBirthday(){


if(started)
return;


started=true;



let melody=[


392,392,440,392,523,493,


392,392,440,392,587,523,


392,392,784,659,523,493,440,


698,698,659,523,587,523


];




melody.forEach(
(note,index)=>{


setTimeout(()=>{


playNote(note);


},

index*450);


});






setTimeout(()=>{


document
.getElementById("message")
.classList
.add("show");



document
.getElementById("hint")
.style
.display="none";



},

melody.length*450+1500);



}





// ساخت ذرات


for(let i=0;i<80;i++){


let p=document.createElement("div");


p.className="particle";


p.style.left=
Math.random()*100+"vw";


p.style.animationDelay=
Math.random()*5+"s";


p.style.animationDuration=
3+
Math.random()*5
+"s";



document
.querySelector(".particles")
.appendChild(p);



}
