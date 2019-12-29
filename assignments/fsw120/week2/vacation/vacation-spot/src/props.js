import React from "react"
const Spots = (Props) => {
    //from conditional rendering page 
//    spr =()=> {
//     return <div>style= {{ backgroundColor: "green"}} </div>
//       }
//       sum =()=> {
//       return <div>style= {{ backgroundColor: "red"}} </div>
//       } 

// if (Props.timeToGo=== "Summer"){
//     return <div style= {{ backgroundColor: "red"}} > </div>
// }
    return(
    <div>
        <h1> {Props.place} </h1>
        <h3> {Props.timeToGo} </h3>
        <h5> {Props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} </h5>
        <hr/>
    </div>
    )
}

export default Spots