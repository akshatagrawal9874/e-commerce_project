import React from "react"
import "./register.styles.scss"
import FormInput from "../form-input/form-input"
import Button from "../CustomButton/custom-button"

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            password:""
        }
    }
    handleSubmit=(e)=>{
       e.preventDefault();
       this.setState({
           name:"",
           email:"",
           password:"",
       })
    }
    handleChange(e){
        const {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        return (
            <div className="register">
                <form onSubmit={this.handleSubmit}>
                  <FormInput name="name"
                  label="Display Name"
                  handleChange={this.handleChange}
                  value={this.state.name}
                  type="text"/>
                  <FormInput name="email"
                  label="Email"
                  handleChange={this.handleChange}
                  value={this.state.email}
                  type="email"/>
                  <FormInput name="password"
                  label="Password"
                  handleChange={this.handleChange}
                  value={this.state.password}
                  type="password"/>
                  <Button type="submit">Register Now</Button>
                </form>
            </div>
        )
    }
}
export default Register