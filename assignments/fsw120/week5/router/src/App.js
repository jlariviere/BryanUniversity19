import React from 'react';
import './App.css';
import Nav from "./nav"
import Footer from "./Footer"
import Home from "./Home";
import About from "./About";
import Services from "./services"
import {Link, Switch, Route} from "react-router-dom"

function App() {
    return (
        <div>
            <Nav/> 
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/" component={Home}/>
            
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
