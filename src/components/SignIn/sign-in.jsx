import React from "react"
import FormInput from "../form-input/form-input"
import "./sign-in.styles.scss"
import Button from "../CustomButton/custom-button"
import { auth,UserProfile,signInWithGoogle } from "../firebase/firebase.utilis"
class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
           email:"",
           password:""
        }
    }
    handleSubmit=async e=>{
        e.preventDefault();
        const {email,password}=this.state;
        try{
            const {user}=await auth.signInWithEmailAndPassword(email,password);
          await UserProfile(user);
        this.setState({
            email:"",
            password:""
        })
    }
    catch(e)
    {
        console.log(e)
    }
    
    }
    handleChange=(e)=>{
       const {name,value}=e.target;
       this.setState({
           [name]:value
       })
    }
    render(){
        return(
            <div className="sign-in">
                <form onSubmit={this.handleSubmit}>
                <FormInput type="text" 
                name="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="Email"
                required/>
                <FormInput type="password" 
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="Password"
                required/>
                <div className="btn">
                <Button type="submit">Sign In</Button>
                <Button onClick={signInWithGoogle} type="button" IsSignGoogle>Sign In With Google</Button>
                </div>
                </form>
            </div>
        )
    }
}
export default SignIn
