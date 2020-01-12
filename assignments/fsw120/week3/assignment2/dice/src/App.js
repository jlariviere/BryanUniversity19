import React from 'react';
import './App.css';
import DiceBox from "./dicebox"
import Die from './die';

class App extends Component {
  constructor(){
      super()
      this.state = {
          num1: 0,
          num2: 0,
          num3: 0,
          num4: 0,
          num5: 0
      }
    }
     render(){

       return(
         <Die/> 
       )

     }
  }

export default App
