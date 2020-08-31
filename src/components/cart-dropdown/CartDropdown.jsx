import React from "react"
import Button from "../CustomButton/custom-button"
import "./cart-dropdown.styles.scss"

const CartDropdown=()=>{
    return(<div className="cart-dropdown">
    <div className="cart-items"></div>
    <Button>GO TO CHECKOUT</Button>
    </div>)
}

export default CartDropdown