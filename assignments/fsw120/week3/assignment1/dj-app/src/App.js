// alright im done with this
import React from "react"
import "./App.css"
import Square from "./square"

class App extends React.Component {
  constructor(){
    super()
    this.state={
    colors :  ["white", "white", "white", "white"]
    }
    this.smallTime = this.smallTime.bind(this)
   }
  smallTime(){ this.setState({colors: ["black","white","black","white"]}) } 

  render(){
   
return(
    <div class="grid1">
      <Square color ={this.state.colors[0]}/>
      <Square color ={this.state.colors[1]}/>
      <Square color ={this.state.colors[2]}/>
      <Square color= {this.state.colors[3]}/>
      {/* <div id="one"></div>
      <div id="two"></div>
      <div id="three"></div>
      <div id="four"></div> */}
       <button onClick = {this.smallTime} >Small Time</button>
       <button onClick = {this.party} >Party</button>
       <button onClick = {this.pro}>Professional</button>
       <br/>
       <button onClick = {this.state} >Big Time 1</button>
       <button >Big Time 2</button>
       <button >Big Time 3</button>
       <button >Big Time 4</button>
    </div>
    )
  }
}

export default App 