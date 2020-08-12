import React from "react"
import "./collection-item.styles.scss"
function Collection ({name,imageUrl,price}){
       return(
       <div className="collection-item">
           <div className="image"
           style={{backgroundImage:`url(${imageUrl})`}}></div>
           <div className="collection-footer">
       <span className="name">{name}</span>
       <span className="price">Rs.{price}</span>
           </div>

       </div>)
} 
export default Collection;