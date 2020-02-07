import React from "react"
import { Link } from "react-router-dom";


function Nav() {    
    return (
        <div class="navbar">
            <Link to="/" class ="link">Home</Link>
            <Link to="/about" class ="link" >About</Link>
            <Link to="/services" class ="link" >Services</Link>
        </div>
    )
}
export default Nav