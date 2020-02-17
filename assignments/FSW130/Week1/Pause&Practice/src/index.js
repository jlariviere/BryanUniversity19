import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from "./ThemeProvider"
import App from './App';

ReactDOM.render( 
<ThemeProvider.Provider value={"dark"}>
        <App />
    </ThemeProvider.Provider>, 
 document.getElementById("root"))


