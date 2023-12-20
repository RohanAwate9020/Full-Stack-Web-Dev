  let h1=document.querySelector('h1');

  function changeColor(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve('Change Color');
        },delay);
    });
  }

  async function greet(){
    await changeColor('red',1000);
    await changeColor('crimson',1000);
    await changeColor('Aquamarine',1000);
    await changeColor('blue',1000);
  } 

  greet()