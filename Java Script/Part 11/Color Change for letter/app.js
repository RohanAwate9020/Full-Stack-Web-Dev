h2=document.querySelector("h2");

function changeColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            h2.style.color=color;
            resolve("Color Changed.");
        },delay);
    });
}


changeColor("red",1000)
.then(()=>{
    console.log("color change");
    return changeColor('orange',1000);
})
.then(()=>{
    console.log("Orange Color");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("Pink Color");
    return changeColor("pink",1000);
})
.then(()=>{
    console.log("Orange Color");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("Orange Color");
    return changeColor("grey",1000);
})

.catch(()=>{
    console.log("Color not changed");
}
)