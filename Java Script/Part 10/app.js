let buttons =document.querySelectorAll('button');

for (btn of buttons){
    btn.onclick=SayHello;
    btn.onmouseenter=function(){
        console.log("You enterd a button");
    }
}

function SayHello(){
    console.log("hii");
}


let b=document.getElementsByTagName("btn");
let h3=document.getElementsByTagName("h3");
let h1=document.getElementsByTagName("h1");

function Changecolor(){
    this.style
}

b.addEventListener("click",Changecolor);
h1.addEventListener("click",Changecolor);
h3.addEventListener("click",Changecolor);