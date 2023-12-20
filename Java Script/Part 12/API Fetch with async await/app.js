let url="https://catfact.ninja/fact2";

async function getfact(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.fact);
    }
    catch (e){
        console.log("error- ",err);
    }
}