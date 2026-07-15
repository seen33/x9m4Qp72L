const AudioContext =
window.AudioContext ||
window.webkitAudioContext;


const ctx = new AudioContext();



function playNote(freq){


let osc = ctx.createOscillator();

let gain = ctx.createGain();



osc.type="triangle";

osc.frequency.value=freq;



gain.gain.setValueAtTime(
0.3,
ctx.currentTime
);



gain.gain.exponentialRampToValueAtTime(
0.001,
ctx.currentTime+0.7
);



osc.connect(gain);

gain.connect(ctx.destination);



osc.start();

osc.stop(
ctx.currentTime+0.7
);


}





let clicks=0;

let songStarted=false;



document
.querySelectorAll(".key")
.forEach(key=>{


key.onclick=function(){


ctx.resume();



playNote(
Number(key.dataset.note)
);



key.classList.add("active");



setTimeout(()=>{

key.classList.remove("active");

},150);



clicks++;



// بعد از 5 کلیک شروع سورپرایز

if(clicks>=5){

startBirthday();

}


};



});





function startBirthday(){


if(songStarted)
return;


songStarted=true;



document
.getElementById("hint")
.innerHTML=
"✨ A surprise is coming...";



let melody=[


392,392,440,392,523,493,

392,392,440,392,587,523,

392,392,784,659,523,493,440,

698,698,659,523,587,523

];



melody.forEach((note,i)=>{


setTimeout(()=>{

playNote(note);


},i*500);



});





// بعد از تمام شدن آهنگ پیام ساخته شود

setTimeout(()=>{


showMessage();


},
melody.length*500+1000);



}





function showMessage(){


let div=document.createElement("div");


div.className="final";



div.innerHTML=`

<h2>
🎉 Happy Birthday Arshia 🎉
</h2>

<p>
May your dreams come true ✨
</p>

`;



document
.querySelector(".content")
.appendChild(div);



setTimeout(()=>{

div.classList.add("show");

},100);



}






// ذرات نور

for(let i=0;i<80;i++){


let p=document.createElement("div");


p.className="particle";


p.style.left=
Math.random()*100+"vw";


p.style.animationDelay=
Math.random()*5+"s";


document
.querySelector(".particles")
.appendChild(p);


}
