import React from "react";
import Spots from "./props"
import vacationSpots from "./outside"

 const App = () =>{
 
 const locations = vacationSpots.map(spot =>
 <Spots place= {spot.place} price={spot.price} timeToGo ={spot.timeToGo} />)
  // extra credit try again 
  // if (Spots.timeToGo === "summer"){
  // return <div style= {{ backgroundColor: "red"}} > </div>}
  return (
    <div>
      {locations}
    </div>
  )
}


export default App;
