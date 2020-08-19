import React from "react"
import "./register.styles.scss"
import FormInput from "../form-input/form-input"
import Button from "../CustomButton/custom-button"
import {auth,UserProfile} from "../firebase/firebase.utilis"

class Register extends React.Component{
    constructor(){
        super();
        this.state =
        {
            displayName:"",
            email:"",
            password:"",
            confirmpassword:""
        }
    }
    handleSubmit=async e=>{
       e.preventDefault();
       
       const {displayName,email,password,confirmpassword}=this.state;
       if(password!==confirmpassword)
       {
           alert("Passwords are not matching");
           return;
       }
       try{
       const {user} =await auth.createUserWithEmailAndPassword(email,password);
       await UserProfile(user,{displayName});
       this.setState({
        displayName:"",
           email:"",
           password:"",
           confirmpassword:""
       })
    }
    catch(error)
    {
        console.log(error);
    }
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        return (
            <div className="register">
                <form onSubmit={this.handleSubmit}>
                  <FormInput name="displayName"
                  label="Display Name"
                  handleChange={this.handleChange}
                  value={this.state.displayName}
                  type="text"
                  required/>
                  <FormInput name="email"
                  label="Email"
                  handleChange={this.handleChange}
                  value={this.state.email}
                  type="email"
                  required/>
                  <FormInput name="password"
                  label="Password"
                  handleChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                  required/>
                  <FormInput name="confirmpassword"
                  label="Confirm Password"
                  handleChange={this.handleChange}
                  value={this.state.confirmpassword}
                  type="password"
                  required/>
                  <Button type="submit">Register Now</Button>
                </form>
            </div>
        )
    }
}
export default Register