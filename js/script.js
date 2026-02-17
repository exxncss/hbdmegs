document.addEventListener("DOMContentLoaded", () => {

const progressBar = document.querySelector(".progress-bar");

if(progressBar){
window.addEventListener("scroll", () => {
const scrollTop = document.documentElement.scrollTop;
const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;
progressBar.style.width = progress + "%";

document.body.style.setProperty(
"--scrollY",
window.scrollY * 0.15 + "px"
);
});
}

/* Emoji Loop */

const emoji = document.getElementById("love-emoji");

if(emoji){

const text = "💖";

function loop(){

let i = 0;

function type(){
if(i < text.length){
emoji.innerHTML += text.charAt(i);
i++;
setTimeout(type,200);
}else{
setTimeout(erase,1200);
}
}

function erase(){
if(emoji.innerHTML.length > 0){
emoji.innerHTML = "";
setTimeout(loop,600);
}
}

type();
}

setTimeout(loop,800);
}

});
