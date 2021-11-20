var sec1=document.getElementById("sec1");
var sec2=document.getElementById("sec2");
var sec3=document.getElementById("sec3");
var sec4=document.getElementById("sec4");

var next1=document.getElementById("next1");
var next2=document.getElementById("next2");
var next3=document.getElementById("next3");

var back1=document.getElementById("back1");
var back2=document.getElementById("back2");
var back3=document.getElementById("back3");


next1.onclick = function(){
    sec1.style.left="-450px";
    sec2.style.left="40px";
}

back1.onclick = function(){
    sec1.style.left="40px";
    sec2.style.left="450px";
}

next2.onclick = function(){
    sec2.style.left="-450px";
    sec3.style.left="40px";
}

back2.onclick = function(){
    sec2.style.left="40px";
    sec3.style.left="450px";
}

next3.onclick = function(){
    sec3.style.left="-450px";
    sec4.style.left="40px";
}

back3.onclick = function(){
    sec3.style.left="40px";
    sec4.style.left="450px";
}