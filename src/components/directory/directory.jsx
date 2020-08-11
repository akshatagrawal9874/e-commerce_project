import React from "react"
import MenuItem from "../menu-item/menu-item"
import './directory.styles.scss'
class Directory extends React.Component{
    constructor(){
        super()
        this.state={
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://media.tenor.com/images/b268608343797c9610bccd4585feaf55/tenor.gif',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://media.tenor.com/images/9b0419a884db01926da4bbccbcc2b816/tenor.gif',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://thumbs.gfycat.com/AccomplishedDefinitiveArcticwolf-size_restricted.gif',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }
    render(){
    return(
        <div className="directory-menu">
            {this.state.sections.map(item =><MenuItem id={item.id} title={item.title} imageUrl={item.imageUrl} size={item.size} linkUrl={item.linkUrl}/>)}
        </div>
    )
}}
export default Directory