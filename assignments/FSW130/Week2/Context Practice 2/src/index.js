import React from "react"
import ReactDOM from 'react-dom';
import App from './app';
import {listProvider} from "./ListProvider"

ReactDOM.render(
    <listProvider>
        <App />
    </listProvider>,


document.getElementById('root'));