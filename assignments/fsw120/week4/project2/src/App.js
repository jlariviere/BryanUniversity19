import React from 'react';
import './App.css';
import Badge from './badge';
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
      this.handleSubmit= this.handleSubmit.bind(this)
  }
//   handleChange(event) {
//     this.setState({
//         [event.target.name]: event.target.value
//     })
// }
      handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
      }

   
      handleSubmit(event){
        event.preventDefault()
        // render={() => div class= "container">
        //   <header class="header">Badge</header>
        //   <div class="form">
        //     <h3> Name: {this.state.firstName} {this.state.lastName} </h3>
        //     <h3> Email: {this.state.email} </h3>
        //     <h3> Place of Birth: {this.state.placeOfBirth}</h3>
        //     <h3> Phone: {this.state.phone} </h3>
        //     <h3> Favorite Food: {this.state.favoriteFood} </h3>
        //   </div>
        //     <div class="box">
        //       <p>{this.state.textBox} </p>
        //     </div>
        // </div>}
      //    Bad=()=>{
      //     return(
      //           <div class= "container">
      //   <header class="header">Badge</header>
      //   <div class="form">
      //     <h3> Name: {this.state.firstName} {this.state.lastName} </h3>
      //     <h3> Email: {this.state.email} </h3>
      //     <h3> Place of Birth: {this.state.placeOfBirth}</h3>
      //     <h3> Phone: {this.state.phone} </h3>
      //     <h3> Favorite Food: {this.state.favoriteFood} </h3>
      //   </div>
      //     <div class="box">
      //       <p>{this.state.textBox} </p>
      //     </div>
      // </div>
      //     )
      //   }
        //?? need to be class component to render on to page???
        
        }
     
      

  render() {
      return (
        <main>
          <div class= "container">
            <form class= "form" onSubmit={this.handleSubmit} >
            <input class="input" type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
            <input class="input" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
            <br/>
            <input class="input" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
            <input class="input" type="text" name="placeOfBirth" placeholder="Place of birth" value={this.state.placeOfBirth} onChange={this.handleChange} />
            <br/>
            <input class="input" type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange} />
            <input class="input" type="text" name="favoriteFood" placeholder="Favorite food" value={this.state.favoriteFood} onChange={this.handleChange} />
            <br/>
            <textarea class="area" name="textBox" value={this.state.textBox} placeholder="Tell us about yourself" onChange={this.handleChange} />
            <br/>
            <button id= "submit" >Submit</button> 
            </form>
          </div>
          
        </main>  
      )
  }
}
export default App
//handleSubmit for submit and render badge???