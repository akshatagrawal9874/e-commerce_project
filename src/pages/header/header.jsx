import React from "react"
import "./header.styles.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "./crown.svg"
import {auth} from "../../components/firebase/firebase.utilis"
import CartIcon from "../../components/cart-icon/cart-icon"
import {connect} from "react-redux"
import CartDropdown from "../../components/cart-dropdown/CartDropdown"

function Header({currentUser,hidden}){
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
                <Link className="option"><CartIcon /></Link>
            </div>
            {hidden?null:<CartDropdown/>}
        </div>
    )
}
const mapStateToProps =({user:{currentUser},cart:{hidden}})=>({
  currentUser,
  hidden
})
export default connect(mapStateToProps)(Header);