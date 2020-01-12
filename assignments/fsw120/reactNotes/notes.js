//CLASS-BASED COMPONENTS
import React from "react"
class App extends React.Component {
    // create your own method here(){}
    render() {
        // display logic
        // in-line styling
        // conditional rendering
        //your method()
        return (
            <div>
                <h1>Code goes here </h1>
{/* or when using props <h1>{this.props.whatever} </h1> */}
            </div>
        )
    }
}

// REACT-STATE
class App extends React.Component {
    //to make a statful component you must add a constructor function here it is also advised to add super() to that constructor
    constructor() {
        super()
        this.state = {
           answer: "Yes"
        }
    }
    
    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer} </h1>
            </div>
        )
    }
}
// If else checking state (do not need === true because its already seen as a boolean)
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        let wordDisplay
        if (this.state.isLoggedIn === true) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}



