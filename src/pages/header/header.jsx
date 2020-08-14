import React from "react"
import "./header.styles.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "./crown.svg"
import {auth} from "../../components/firebase/firebase.utilis"

function Header({currentUser}){
    return(
        <div className="header">
            <Link to="/e-commerce_project" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
               
                <Link to="/shop" className="option">
                       SHOP
                </Link>
                <Link to="/shop/hats" className="option">
                       CONTACT
                </Link>
                {
                    (currentUser) ? (<div className="option" onClick={()=>auth.signOut()}>SIGN-OUT</div>)
                :(<Link to="/sign-in">
                    <div className="option">
                       SIGN-IN
                       </div>
                </Link>)
                }
            </div>
        </div>
    )
}
export default Header