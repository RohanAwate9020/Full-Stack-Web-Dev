let btn=document.querySelector('button');

let ip=document.querySelector('input')
let ul=document.querySelector('ul')

btn.addEventListener('click', function(){
    let item=document.createElement('li');
    item.innerText=ip.value;
    
    let btndel=document.createElement("button");
    btndel.innerText="Delete";
    btndel.classList.add('delete');
    item.appendChild(btndel);
    ul.appendChild(item);
    ip.value='';
})

ul.addEventListener('click',function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
})
