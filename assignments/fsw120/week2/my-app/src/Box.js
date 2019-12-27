import React from "react"


const Boxes = (Props) =>{
    return(
    <div className = "box-set" style = {{backgroundColor : Props.boxSettings.backgroundColor}}>
        <h1> {Props.boxSettings.title} </h1>
        <h3> {Props.boxSettings.subTitle} </h3>
        <p> {Props.boxSettings.information} </p>
    </div>
    )
}
export default Boxes