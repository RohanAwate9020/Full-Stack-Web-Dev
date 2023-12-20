let fav="KGF";

let guess=prompt("Guess my Fav Movie or If you want to Quite type quite:");

while(("quite"!=guess)&&(fav!=guess)){
        guess=prompt("Guess my Fav Movie or If you want to Quite type quite:");
} 
if(fav==guess){
    console.log("You find it right.")
}
