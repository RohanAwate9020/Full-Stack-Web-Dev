let b=document.querySelector("button");
let h3=document.querySelector("h3");
let h1=document.querySelector("h1");

function Changecolor(){
    this.style.backgroundColor='red';
}

b.addEventListener("click",Changecolor);
h1.addEventListener("click",Changecolor);
h3.addEventListener("click",Changecolor);