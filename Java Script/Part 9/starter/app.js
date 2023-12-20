document.all[8].innerHTML="Perter Parker";
document.all[8].innerText="Perter Parker";


let img=document.querySelector('img');
img.setAttributet('id','spiderimg');

let links=document.querySelectorAll(".box a");
for (let i=0;i<links.length;i++){
    links[i].style.color ='red';
}

let bdy=document.querySelector('body');
let newP=document.createElement('p');
newP.innerText="Rohancseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
bdy.prepend(newP);


let box=document.querySelector('.box');
let btn=document.createElement('button');
btn.innerText='Hello';
box.prepend(btn);