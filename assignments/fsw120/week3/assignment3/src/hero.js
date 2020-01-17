import React from "react"

const Heros=(props)=>{

    return(
        <div>
             <img src= {props.image} 
             onClick={()=>alert(props.catchPhrase)} />
            <p onClick={()=>alert(props.catchPhrase)}>
                {props.name}</p>
        </div>
    )
}


export default Heros