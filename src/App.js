import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route,Switch,Redirect} from "react-router-dom"
import Header from "./pages/header/header"
import SignInSignOut from "./pages/Sign_in&Sign_out/sign_in&sign_out"
import ShopPage from "./pages/Shop-page/shop-page"
import {auth , UserProfile} from "./components/firebase/firebase.utilis"
import {connect} from "react-redux"
import { setCurrentUser } from './Reducer/user/user.actions';
const Hats=(props)=>
{
   console.log(props);
   return(
   <h1>HATS</h1>)
}
class App extends React.Component {
  /*constructor(){
    super();
    this.state={
      currentUser:""
    }
  }*/
   unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
   this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{
     if(user)
     {
       const userRef = await UserProfile(user);
       userRef.onSnapshot(snapShot=>{
         setCurrentUser({
             id:snapShot.id,
             ...snapShot.data()
         });
       })
     }
     setCurrentUser(user)
   })
  }
  componentWillUnmount(){//used for sign out in firebase app
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <h1>Hello</h1>
     <div>
      <Header/>
    <Switch>
      <Route exact path="/e-commerce_project" component={HomePage} />
      <Route path="/e-commerce_project/shop/hats" component={Hats} />
      <Route path="/shop" component={ShopPage} />
      <Route exact path="/sign-in" 
      render={()=>this.props.currentUser?(<Redirect to="/e-commerce_project" />):(<SignInSignOut/>)}/>
      </Switch>
    </div>
  )
}
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
const mapDispatchToProps =dispatch =>({
  setCurrentUser:user =>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
