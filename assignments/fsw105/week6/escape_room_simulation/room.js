const readline= require ("readline-sync");
const escapeRoom = readline.question("Hello you are locked in with three choices and only one chance to Esacpe. try you luck with the door,try the hole in the wall,or look for the key. \n please choose:  door, hole, key ")
const randomNum = Math.floor((Math.random() * 10))

answer=()=>{
    if (escapeRoom === "hole")
    console.log ("Game Over You died!")

     if (escapeRoom === "door" && haveKey === true)
    console.log("You win!!!")
     if (escapeRoom === "door" && haveKey === false)
    console.log("Locked, requires key.")
    
     if (escapeRoom === "key")
   
         if (randomNum ===  4||5||6)
        return haveKey=true,
         console.log("You found a key")
        
       else
       return haveKey=false,
       console.log("Try again")
    
}
 let haveKey=false
console.log (answer())
