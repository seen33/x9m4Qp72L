const notes=[

"C4",
"D4",
"E4",
"F4",
"G4",
"A4",
"B4",
"C5",
"D5",
"E5",
"F5"

];



const piano=
document.getElementById("piano");



let clicks=0;

let started=false;





// ساخت کلیدها


notes.forEach(note=>{


let key=document.createElement("div");


key.className="key";


key.dataset.note=note;



key.onclick=()=>{


play(note);


key.classList.add("active");


setTimeout(()=>{

key.classList.remove("active");

},150);



clicks++;



if(clicks>=6){

birthday();

}



};



piano.appendChild(key);



});






// صدای پیانو


const synth =
new Tone.PolySynth(
Tone.Synth,
{

oscillator:{
type:"fmtriangle"
},

envelope:{

attack:.01,

decay:.2,

sustain:.3,

release:1

}

}

).toDestination();





function play(note){


Tone.start();


synth.triggerAttackRelease(

note,

"8n"

);


}







// آهنگ تولد


const song=[

"G4","G4","A4","G4","C5","B4",

"G4","G4","A4","G4","D5","C5",

"G4","G4","G5","E5","C5","B4","A4",

"F5","F5","E5","C5","D5","C5"

];





function birthday(){


if(started)return;


started=true;



document
.getElementById("intro")
.style.opacity=0;



song.forEach((n,i)=>{


setTimeout(()=>{


play(n);


},

i*450);



});




setTimeout(()=>{


document
.getElementById("final")
.classList
.add("show");



},

song.length*450+1000);



}






// ذرات


for(let i=0;i<100;i++){


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
