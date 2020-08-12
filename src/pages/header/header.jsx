import React from "react"
import "./header.styles.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "./crown.svg"

function Header(){
    return(
        <div className="header">
            <Link to="/e-commerce_project" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/sign-in" className="option">
                       SIGN-IN
                </Link>
                <Link to="/shop" className="option">
                       SHOP
                </Link>
                <Link to="/shop/hats" className="option">
                       CONTACT
                </Link>
            </div>
        </div>
    )
}
export default Header