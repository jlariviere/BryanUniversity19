import React from "react"
import movies from "./movies"
import { listConsumer } from "./ListProvider"

 const App=()=>{
// let films= movies.map()

return(
     
    <div>
    <form>
        <input placeholder="new movie"></input>
        <button onClick>Add</button>
    </form>
       <listConsumer>
            {({list})=>(
            <div>
              <h1>Films{list}</h1> 
            </div> 
            )}
        </listConsumer>
    </div>
   
)
}


export default App