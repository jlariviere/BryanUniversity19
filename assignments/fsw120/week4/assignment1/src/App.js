import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          firstName: ""
      }
      this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
      this.setState({
          firstName: event.target.value
      })
  }
  
  handleClick = e => {
    e.preventDefault();
    var li = document.createElement("li");
    li.textContent = this.state.firstName;
    document.getElementById("list").append(li)
    document.getElementById("myInput").value = ""}
  render() {
    
      return (
          <form id="f">
              <input id="myInput" type="text" placeholder="First Name" onChange={this.handleChange} />
              <h1>{this.state.firstName}</h1>
              <button onClick={this.handleClick} >Add Name</button>
              <ul id = "list"> </ul>
          </form>
      )
  }
}

export default App;
