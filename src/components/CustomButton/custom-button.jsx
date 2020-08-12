import React from "react"
import "./custom-button.styles.scss"
const Button = ({children,...other})=>(
        <button className="custom-button" {...other}>
            {children}
        </button>
)
export default Button;