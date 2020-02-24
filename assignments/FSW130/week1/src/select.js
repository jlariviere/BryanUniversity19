// import React from "react"
// import ThemeProvider from "./ThemeProvider"
// const Select =(props)=> {
//     return (
//     <ThemeProvider.consumer>
//         {theme=>(
//             <button className={`${theme}-theme`}>Switch Theme</button>
//         )}
//     </ThemeProvider.consumer>      
//         )    
//     }
// export default Select

import React, {Component} from "react"
import ThemeProvider from "./ThemeProvider"

class Select  extends Component {
    render() {
        const theme = this.context
        return (
            <button onClick={theme} className={`${theme}-theme`}>Switch Theme</button>
        )    
    }
}

Select.contextType = ThemeProvider

export default Select