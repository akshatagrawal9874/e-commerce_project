import React from "react"
import SHOPDATA from "./shop.data"
import PreviewCollection from "../../components/collection-preview/collection-preview"
class ShopPage extends React.Component{
  constructor(){
      super();
      this.state={
          collection:SHOPDATA
      }
  }
  render()
  {
      const collections=this.state.collection;
      return(
      <div>
          <h1>SHOP PAGE</h1>
          <div>
              {collections.map(({id,...otherProps})=>(
                  <PreviewCollection id={id} {...otherProps} />
              ))}
          </div>
     </div>
      )
  }
}
export default ShopPage