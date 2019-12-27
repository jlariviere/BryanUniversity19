import React from "react";
import Boxes from "./Box"

const App = () =>{
    return(
   <div className = "container"> 
       <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"blue",
                title:"Hello",
                subTitle: "There",
                information: "This box will be blue with white letters."
            }}/>
        </div>
        <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"firebrick",
                title:"Title",
                subTitle: "Sub",
                information: "I think the rest of these I'm going to do books or tv shows."
            }}/>
        </div>
        <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"goldenrod",
                title:"Desperation",
                subTitle: "Stephen King",
                information: "This is a wild book I personally think it could be adapted into a movie directed by Rob Zombie."
            }}/>
        </div>
        <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"red",
                title:"Adventure Time",
                subTitle: "Stakes",
                information: "The back story of Marceline the vampire queen."
            }}/>
        </div>
        <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"grey",
                title:"The Witcher",
                subTitle: "Season 1",
                information: "Critics say the best game adaptation, but I beleive there are also books."
            }}/>
        </div>
        <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"limegreen",
                title:"Rick and Morty",
                subTitle: "Anatomy Park",
                information: "A theme park built inside a human body, make sure you check out Pirates of The Pancreas."
            }}/>
        </div>
        <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"cyan",
                title:"Warloard of Mars",
                subTitle: "Edgar Rice Burroughs",
                information: "A man finds himself struggling to survive in the  unknown. There are several books in this series."
            }}/>
        </div>
        <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"forestgreen",
                title:"Elf",
                subTitle: "Movie",
                information: "Buddy the elf, whats your favorite color?"
            }}/>
        </div>
        <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"orange",
                title:"God Hates Us All",
                subTitle: "Moody",
                information: "Prelude to the show Californication."
            }}/>
        </div>
        <div className ="box">
        <Boxes
            boxSettings={{
                backgroundColor:"firebrick",
                title:"Title",
                subTitle: "Subtitle",
                information: "Thats it im out."
            }}/>
        </div>
   </div>
   )
}
export default App
