import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route,Switch,BrowserRouter as Router} from "react-router-dom"
const Hats=(props)=>{
   console.log(props);
   return(
   <h1>HATS</h1>)
}
function App() {
  return (
    <div>
      <Router>
    <Switch>
      <Route exact path="/e-commerce_project" component={HomePage} />
      <Route path="/e-commerce_projectshop/hats" component={Hats} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
