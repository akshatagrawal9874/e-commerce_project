import React from "react"
import "./sign_in&sign_out.styles.scss"
import SignIn from "../../components/SignIn/sign-in"
import Register from "../../components/Register/register"
function SignInSignOut()
{
  return(
      <div className="SignInSignOut"> 
      <div>
      <h1>I already have an Account</h1>
          <span>Sign in with email and password</span>
          <SignIn /></div>
      <div>
      <h1>Register Now</h1>
          <span>Register Now with email and password</span>
          <Register />
          </div>
      </div>
  )
}
export default SignInSignOut