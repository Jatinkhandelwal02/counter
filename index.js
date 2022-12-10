let count=0;

dec.addEventListener("click",decrease);
res.addEventListener("click",reset);
inc.addEventListener("click",increase);







function increase(){
    document.querySelector(".value").innerHTML=++count;
    document.getElementById("color").style.color= "greenyellow";
}
function decrease(){
    document.querySelector(".value").innerHTML=--count;
    document.getElementById("color").style.color= "red";
}
function reset(){
    document.querySelector(".value").innerHTML=count=0;
    document.getElementById("color").style.color= "black";
}