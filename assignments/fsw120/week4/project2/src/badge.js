import React from "react"
class Badge extends React.Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div class= "container">
        <header class="header">Badge</header>
        <div class="form">
          <h3> Name: {this.state.firstName} {this.state.lastName} </h3>
          <h3> Email: {this.state.email} </h3>
          <h3> Place of Birth: {this.state.placeOfBirth}</h3>
          <h3> Phone: {this.state.phone} </h3>
          <h3> Favorite Food: {this.state.favoriteFood} </h3>
        </div>
          <div class="box">
            <p>{this.state.textBox} </p>
          </div>
      </div>
        )
    }
}

export default Badge