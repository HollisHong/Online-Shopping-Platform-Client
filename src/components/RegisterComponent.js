import React from "react";
import {Link} from "react-router-dom";

export default class RegisterComponent extends React.Component {
    state = {
        username: '',
        password: '',
        type: 'seller',
        error: null
    }
    register = () => {
        fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/register", {
            body: JSON.stringify({username: this.state.username,
                password: this.state.password,
                type: this.state.type}),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
            .catch(e => {
                this.setState({
                                  error: 'Unable to register'
                              })})
            .then(currentUser => {
                if(currentUser) {
                    this.props.history.push(`/profile/${currentUser.id}`)
                }
            })
    }

    render() {
        return(
            <div className='container'>
                <h1>Register</h1>
                {
                    this.state.error &&
                    <div className="alert alert-danger">
                        {this.state.error}
                    </div>
                }

                <br/>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-1 col-form-label">
                        Username: </label>
                    <div className="col-sm-11">
                        <input
                            onChange={(e) => this.setState({username: e.target.value})}
                            className="form-control"
                            id="username"
                            placeholder="Alice"/>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-1 col-form-label" htmlFor="password">
                        Password: </label>
                    <div className="col-sm-11">
                        <input
                            onChange={(e) => this.setState({password: e.target.value})}
                            type={"password"}
                            className="form-control"
                            id="password"
                            placeholder="qwer1234"/>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-1 col-form-label" htmlFor="role">
                        Role: </label>
                    <div className="col-sm-11">
                        <select className="form-control"
                                id="role"
                                onChange={(e) => this.setState({type: e.target.value})}>
                            <option value="seller">
                                seller
                            </option>
                            <option value="buyer">
                                buyer
                            </option>
                        </select>
                    </div>
                </div>

                <br/>

                <div className="form-group row">
                    <div className="col-lg-6">
                        <button
                            onClick={this.register}
                            className="form-control btn btn-primary">
                            Register
                        </button>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/login">
                            <button className="form-control btn btn-secondary">
                                Already have an account? => Sign in
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}
