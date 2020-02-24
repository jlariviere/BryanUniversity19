import React, {Component} from "react"
import movies from "./movies"
const {Provider, Consumer} = React.createContext()

class listProvider extends Component {
    state={
        list:[
            "Robin Hood",
            "Beetlejuice",
            "Die Hard",
            "Rambo",
            "Alien"
          ]
    }
     handleChange=(list)=>{
        this.setState({list})
     }
     
    render() {
        const {list}= this.state
        return (
            <Provider value={{list, handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {listProvider, Consumer as listConsumer}
