*{
box-sizing:border-box;
}


body{

margin:0;

overflow:hidden;

background:#000;

font-family:
"Segoe UI",
sans-serif;

color:white;

}



.room{

height:100vh;

width:100vw;

background:

radial-gradient(
circle at center,
#242424,
#050505 70%
);

position:relative;

overflow:hidden;

}





/* باران */


.rain{

position:absolute;

inset:0;


background:

repeating-linear-gradient(

115deg,

transparent 0px,

transparent 20px,

rgba(255,255,255,.18) 22px,

transparent 24px

);


animation:

rain .35s linear infinite;

}



@keyframes rain{


from{

background-position:0 0;

}


to{

background-position:0 100px;

}

}





.glow{


position:absolute;

width:500px;

height:500px;

background:

radial-gradient(
circle,
rgba(0,200,255,.25),
transparent 70%
);


left:50%;

top:50%;

transform:

translate(-50%,-50%);


filter:blur(50px);


}





.scene{

height:100%;

display:flex;

justify-content:center;

align-items:center;

flex-direction:column;

position:relative;

z-index:5;

}





#intro{

text-align:center;

animation:

fade 3s infinite alternate;

}


#intro h1{

font-size:40px;

font-weight:300;

}



#intro p{

opacity:.6;

}



@keyframes fade{

from{
opacity:.3;
}

to{
opacity:1;
}

}





/* piano */


.piano{

display:flex;

margin-top:70px;

position:relative;

}



.key{


width:55px;

height:220px;


background:

linear-gradient(
white,
#ddd
);


border:

2px solid #111;


border-radius:

0 0 10px 10px;


cursor:pointer;

transition:.15s;


box-shadow:

0 10px 20px #000;

}



.key:hover{

box-shadow:

0 0 30px cyan;

}



.key.active{


transform:

translateY(15px);


background:#7df;


}




.black{


position:absolute;

width:35px;

height:130px;

background:#050505;


top:0;

z-index:10;


border-radius:

0 0 8px 8px;

}





/* پایان */


#final{


position:absolute;

z-index:20;

left:50%;

top:50%;

transform:

translate(-50%,-50%)
scale(.2);


text-align:center;


opacity:0;


transition:

3s;

}



#final.show{


opacity:1;


transform:

translate(-50%,-50%)
scale(1);


}





#final h2{


font-size:70px;


text-shadow:

0 0 20px cyan,

0 0 60px white;


}





.particle{


position:absolute;


width:6px;

height:6px;


background:white;


border-radius:50%;


animation:

float 6s linear infinite;

}



@keyframes float{


from{

transform:
translateY(100vh);

}


to{

transform:
translateY(-20vh);

opacity:0;

}

}





@media(max-width:600px){


.key{

width:35px;

height:150px;

}


#final h2{

font-size:35px;

}


#intro h1{

font-size:25px;

}


}
