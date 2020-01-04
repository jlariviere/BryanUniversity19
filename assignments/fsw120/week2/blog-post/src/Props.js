import React from "react"
const Posts = (Props)=>{
    return(
        <div>
            <h1> {Props.title} </h1>
            <h3> {Props.subtitle} </h3>
            <p> {Props.author} </p>
            <p> {Props.date} </p>
            <hr/>
        </div>
    )
}

 export default Posts