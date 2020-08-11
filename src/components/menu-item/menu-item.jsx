import React from "react"
import "./menu-item.styles.scss"
import {withRouter} from "react-router-dom"
function menuItem({title,imageUrl,size,linkUrl,history,match})
{
  return(
    <div className={`${size} menu-item`}>
      <div style={{backgroundImage:`url(${imageUrl})` }} className="bg-img">

      </div>
    <div className="content" onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <h1 className="title">
           {title.toUpperCase()}
        </h1>
        <span class="subtitle">Shop Now</span>
    </div>
</div>
  )
}
export default withRouter(menuItem);