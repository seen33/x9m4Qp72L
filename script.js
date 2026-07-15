const AudioContext =
window.AudioContext ||
window.webkitAudioContext;


const ctx = new AudioContext();



function playNote(freq,time=0){

let osc=ctx.createOscillator();

let gain=ctx.createGain();


osc.type="triangle";

osc.frequency.value=freq;


gain.gain.setValueAtTime(
0.001,
ctx.currentTime+time
);


gain.gain.exponentialRampToValueAtTime(
0.4,
ctx.currentTime+time+0.05
);


gain.gain.exponentialRampToValueAtTime(
0.001,
ctx.currentTime+time+0.8
);



osc.connect(gain);

gain.connect(ctx.destination);


osc.start(ctx.currentTime+time);

osc.stop(ctx.currentTime+time+1);

}





document.querySelectorAll(".key")
.forEach(key=>{


key.onclick=()=>{

ctx.resume();

playNote(
Number(key.dataset.note)
);

};


});





// Happy Birthday melody

const song=[


392,392,440,392,523,493,

392,392,440,392,587,523,

392,392,784,659,523,493,440,

698,698,659,523,587,523


];



document
.getElementById("play")
.onclick=()=>{


ctx.resume();


song.forEach((n,i)=>{

playNote(
n,
i*0.55
);

});



setTimeout(()=>{

document
.getElementById("final")
.classList.add("show");


},song.length*550+1000);


};





// particles

const particles=
document.querySelector(".particles");


for(let i=0;i<80;i++){

let p=document.createElement("div");

p.className="particle";


p.style.left=
Math.random()*100+"vw";


p.style.animationDelay=
Math.random()*5+"s";


p.style.animationDuration=
3+Math.random()*5+"s";


particles.appendChild(p);

}






// شروع سینمایی

setTimeout(()=>{

document
.getElementById("title")
.innerHTML=
"Tonight is special ✨";


},3000);
