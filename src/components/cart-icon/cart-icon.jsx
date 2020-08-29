import React from "react"
import {ReactComponent as ShoppingIcon} from "./shopping-bag.svg"
import "./cart-icon.styles.scss"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../Reducer/cart-reducer/cart.action"

const CartIcon=()=>(
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)
const mapDispatchToProps=dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);