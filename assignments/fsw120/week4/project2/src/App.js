import React from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
      super()
      this.state = {
        firstName:"",
        lastName:"",
        email:"",
        placeOfBirth:"",
        phone:"",
        favoriteFood:"",
        textBox:""
      }
      this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}
  render() {
      return (
          <div class= "container">
            <form class= "form">
            <input class="input" type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
            <input class="input" type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
            <br/>
            <input class="input" type="text" name="email" placeholder="Email" onChange={this.handleChange} />
            <input class="input" type="text" name="placeOfBirth" placeholder="Place of birth" onChange={this.handleChange} />
            <br/>
            <input class="input" type="text" name="phone" placeholder="phone" onChange={this.handleChange} />
            <input class="input" type="text" name="favoriteFood" placeholder="Favorite food" onChange={this.handleChange} />
            <br/>
            <textarea class="area" name="textBox" value={"Tell us about yourself"}/>
            <br/>
            <button id = "sub">Submit</button>
            </form>
          </div>
      )
  }
}

export default App;
