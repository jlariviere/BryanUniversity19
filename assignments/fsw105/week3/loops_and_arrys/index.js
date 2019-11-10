//counting
var officeItems=["stapler","monitor","computer","desk","lamp","computer","lamp","stapler","computer","computer"]
var count=0;
for (var i=0; i < officeItems.length; i++){
      if (officeItems[i]=="computer")
        count++  
    }
    console.log (count)
//oldenough 
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name:"Mike",
        age:12,
        gender:"male"
    },{
        name:"Madeline",
        age:80,
        gender:"female"
    },{
        name:"Cheryl",
        age:22,
        gender:"female"
    },{
        name:"Sam",
        age:30,
        gender:"male"
    },{
        name:"Suzy",
        age:4,
        gender:"female"
    },
]
//old enough?
for (var i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i] .age >=18)
        console.log ("Old Enough")
    else console.log ("Not Old Enough")
}   
// personalized
for (var i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i] .age >=18)
        console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is old enough to see Mad Max")
    else console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is not old enough to see Mad Max")
  }   
// more personalized

for (var i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i] .age >=18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")
    console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name +"  is old enough. He's good to see Mad Max Fury Road")
          else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")
     console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is not old enough to see Mad Max Fury Road, don't let him in.")
 
     if (peopleWhoWantToSeeMadMaxFuryRoad[i] .age >=18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")
        console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name +"  is old enough. She's good to see Mad Max Fury Road")
     else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")
     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is not old enough to see Mad Max Fury Road, don't let her in.") 
}
//loop0-100
   for (var i=0; i<101; i++){
       if (i %2==0)
       console.log ("even")
       else console.log ("odd")
   }
//extra credit attempt?
var sum=0
var arrays =[[2,5,435,4,3], //on
            [1,1,1,1,3], //on
            [9,3,4,2] //off
]
for (var i=0; i<arrays.length;i++){
  //for(var j = 0; j < arrays[i].length; j++)

   if (sum= (sum+arrays[i])%2==0)
   
   console.log ("The light is off")
  else console.log ("The light is on")

 }


 