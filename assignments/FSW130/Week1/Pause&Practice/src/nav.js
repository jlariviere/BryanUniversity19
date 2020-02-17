import React from "react"
import ThemeProvider from "./ThemeProvider"

function Nav() {    
    return (
        <div class="navbar">
            <a to="/" class ="link"> Home</a>
            <a to="/about" class ="link" >About</a>
            <a to="/services" class ="link" >Services</a>
        </div>
    )
}
export default Nav