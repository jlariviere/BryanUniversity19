// Button example for context and props
import React from "react"
import PropTypes from "prop-types"
import ThemeContext from "./themeContext"

function Button(props) {
    return (
        <button className={`${props.theme}-theme`}>Switch Theme</button>
    )    
}
Button.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}
Button.defaultProps = {
    theme: "light"
}
export default Button

// App example for context and props 
import React from "react"
import Header from "./Header"
import Button from "./Button"
import ThemeContext from "./themeContext"

function App() {
    return (
        <div>
            <Header />
            <ThemeContext.Consumer>
                {theme => (
                    <Button theme={theme} />
                )}
            </ThemeContext.Consumer>
            
            <Button/>
        </div>
    )
}
export default App
// also add the index and context comp