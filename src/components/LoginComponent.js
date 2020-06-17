import React from "react";

const LoginComponent = () =>
    <div className="container">
        <h1>Login</h1>

        <label htmlFor="username">Username</label>
        <input id="username"
               className="form-control wbdv-field wbdv-username"
               type="text"
               placeholder="joe123"
               title="Use this username to login"/>
        <br/>
        Password
        <input type="password"
               className="form-control wbdv-field wbdv-password"/>
        <br/>
        <a href="../profile/profile.template.client.html"
           className="btn btn-primary wbdv-button wbdv-login">
            Login
        </a>

        <a className="pull-right btn btn-primary wbdv-link wbdv-register"
           href="../register/register.template.client.html">
            Register
        </a>
        <br/>
        <br/>
        <a className="btn btn-primary wbdv-link wbdv-forgot-password">
            Forgot Password
        </a>


    </div>

export default LoginComponent
