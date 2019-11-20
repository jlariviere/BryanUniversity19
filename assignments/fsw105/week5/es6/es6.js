// 1x
let name="John"
let age=101

function runForLoop(pets) {
    let petObjects=[]
    for(let i =0; i< pets.length;i++){
        const pet = {type: pets[i]}
        name;
        if (pets[i]==="cat"){
            name = "fluffy"
        }else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name=name
        petObjects.push(pet)
    }
    return petObjects
}        console.log("man name: ", name)
runForLoop(["cat","dog"])

//2x
const carrots= ["bright orange","ripe","rotten"]
const mapveg = carrots.map(carrots=>carrots.type)
console.log(mapveg)

//3
const people = [
    {
        name: "princess peach",
        friendly: false
    },
    {
        name: "luigi",
        friendly: true
    },
    {
        name: "mario",
        friendly: true
    },
    {
        name: "bowser",
        friendly: false
    },
   
]
friend= people.filter(friend=>friend.friendly)
console.log(friend)

//4
sum=(a,b) => {
    return  a+b
 }
 product=(a,b) => {
    return  a*b
 }

 //5

 hello=(fname,lname,newage)=>{
   console.log( "hi "+fname+lname+"how does it feel to be "+newage+ "?")
}
hello("Jane ","Doe ",100)
//6
let fname="Jane"
let lname="Doe"
let newage=100
const deflt= `Hi ${fname}${lname} how does it feel to be ${newage}`
console.log(deflt)
//7
const animals =[
    {
        type:"dog",
        name:"theodore"
    },
    {
        type:"cat",
        name:"wiskers"
    },
    {
        type:"pig",
        name:"piglette"
    },
    {
        type:"dog",
        name:"sparky"
    }
]

filterForDogs= animals.filter(animals => animals.type === "dog")
console.log(filterForDogs)
//8
 welcome = (name1,location1)=>{
     console.log(`Hi ${name1}!
     \nWelcome to ${location1}.
     \nI hope you enjoy your stay. Please ask the president of ${location1} if you need anything. `
     )
    }
welcome ("Johnny","Irland")