// async function greet(){
//     console.log("Hello");
//     throw("404 Page not found");
// }


async function greet(){
    throw("404 Page not found");
    console.log("Hello");
}


greet()
.then((result)=>{
    console.log("Promise Was Resolved");
    console.log("result was: ",result);
})  
.catch((result)=>{
    console.log('Promise Rejected');
    console.log("result was: ",result);
})