let btn=document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("Change Color.");
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;


    let div=document.querySelector('div');
    div.style.backgroundColor=randomColor;
    
})



function getRandomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    
    let color=(`rgb(${r},${g},${b})`)
    return color;
}