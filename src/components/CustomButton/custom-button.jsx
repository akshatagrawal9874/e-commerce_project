import React from "react"
import "./custom-button.styles.scss"
const Button = ({children,IsSignGoogle,...other})=>(
        <button className={IsSignGoogle ? "google-sign":"custom-button"} {...other}>
            {children}
        </button>
)
export default Button;