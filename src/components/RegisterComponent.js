import React from "react";

const RegisterComponent = () =>
    <div className="container">
        <h1>Register</h1>

        <label htmlFor="username">Username</label>
        <input id="username"
               className="form-control wbdv-field wbdv-username"
               type="text"
               placeholder="joe123"
               title="Use this username to login"/>
        Password

        <input
            className="form-control wbdv-field wbdv-password"
            type="password"/>
        Verify Password

        <input
            className="form-control wbdv-field wbdv-password-verify"
            type="password"/>

        <a href="../profile/profile.template.client.html"
           className="btn btn-primary wbdv-button wbdv-register">
            Register
        </a>

        <a className="pull-right btn btn-primary wbdv-link wbdv-login"
           href="../login/login.template.client.html">
            Login
        </a>

        <a className="pull-right btn btn-primary"
           href="/index.html">
            Cancel
        </a>

    </div>

export default RegisterComponent
