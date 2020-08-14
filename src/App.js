import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route,Switch,BrowserRouter as Router} from "react-router-dom"
import Header from "./pages/header/header"
import SignInSignOut from "./pages/Sign_in&Sign_out/sign_in&sign_out"
import ShopPage from "./pages/Shop-page/shop-page"
import {auth} from "./components/firebase/firebase.utilis"
const Hats=(props)=>{
   console.log(props);
   return(
   <h1>HATS</h1>)
}
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
   unsubscribeFromAuth=null;
  componentDidMount(){
   this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
     this.setState({
       currentUser:user
     })
     console.log(user);
   })
  }
  componentWillUnmount(){//used for sign out in firebase app
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Router>
      <Header currentUser={this.state.currentUser}/>
    <Switch>
      <Route exact path="/e-commerce_project" component={HomePage} />
      <Route path="/e-commerce_project/shop/hats" component={Hats} />
      <Route path="/sign-in" component={SignInSignOut} />
      <Route path="/shop" component={ShopPage} />
      </Switch>
      </Router>
    </div>
  )
}
}
export default App;
