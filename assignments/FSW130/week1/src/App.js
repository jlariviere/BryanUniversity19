import React from 'react';
import ThemeProvider from "../ThemeProvider"
import Nav from "./nav"
import Footer from "./Footer"
import Select from "./select"
function App(props) {
    return (
        <ThemeProvider.Consumer>
            {theme =>(
        <div >
            <Nav/> 
            <main className={`${theme}-theme`}>
                <Select/>
                <h1>You have selected {theme === "light" ? "Light" : "Dark"} Theme</h1>
            </main>
            <Footer/>
        </div>    
            )}
        </ThemeProvider.Consumer>
       
    )
}

export default App;
