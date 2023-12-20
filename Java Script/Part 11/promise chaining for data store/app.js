function saveDB(data){
    let speed=Math.floor(Math.random()*10+1);
    return new Promise ((resolve,reject) =>{
        let speed=Math.floor(Math.random()*10+1);
        if (speed>4){
            resolve("Success: Data Saved.");
        }
        else{
            reject("Failure: Bad Internet Connection.");
        }
    }); 

}


saveDB("Rohan")
.then((result)=>{
    console.log("Result of Promise=",result);
    console.log("data1 Saved");
    return saveDB("hello");
})
.then((result)=>{
    console.log("Result of Promise=",result);
    console.log("data2 Saved");
    return saveDB("HIII");
})
.then((result)=>{
    console.log("Result of Promise=",result);
    console.log("data3 Saved");
   
})

.catch((error)=>{
    console.log("Result of Promise=",error);
    console.log("Bad Internet Speed, Promise rejected.")
})
