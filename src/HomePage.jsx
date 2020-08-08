import React from "react"
import "./homepage.styles.scss"
function HomePage()
{
  return (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                       T-shirts
                    </h1>
                    <span class="subtitle"></span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                      Jackets  
                    </h1>
                    <span class="subtitle"></span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Hats
                    </h1>
                    <span class="subtitle"></span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                      Sweater  
                    </h1>
                    <span class="subtitle"></span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Jeans
                    </h1>
                    <span class="subtitle"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default HomePage