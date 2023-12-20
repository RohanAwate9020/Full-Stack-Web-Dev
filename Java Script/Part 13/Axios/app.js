let url="https://catfact.ninja/fact";

let btn=document.querySelector("#btn");
let p=document.querySelector("#fact");

btn.addEventListener("click", async ()=>{
    let fact= await getFact();
    p.innerHTML=fact;
});

async function getFact(){
    try{
        let res=await axios.get(url);
        return res.data.fact; 
    }catch(e){
        console.log("ERRROR: ",e);
        p.innerHTML="Something Went Wrong."
    }
}
