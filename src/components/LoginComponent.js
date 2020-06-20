import React from "react";
import {Link} from "react-router-dom";

export default class LoginComponent extends React.Component {
    state = {
        username: '',
        password: '',
        type: '',
        error: null
    }
    login = () => {
        fetch("http://cs4550-20su1-group17-server.herokuapp.com/api/login", {
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                type: this.state.type
            }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
            .catch(e => {
                this.setState({
                    error: 'Oops, that\'s not a match.'
                })
            })
            .then(currentUser => {
                if(currentUser)
                    this.props.history.push(`/profile/${currentUser.id}`)
            })

    }
    render() {
        return(
            <div>
                <h1>Login</h1>
                {
                    this.state.error &&
                    <div className="alert alert-danger">
                        {this.state.error}
                    </div>
                }
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
                            className="form-control"
                            id="password"
                            placeholder="123qwe#$%"/>
                    </div>
                </div>

                    <button
                        onClick={this.login}
                        className="btn btn-primary">
                        Login
                    </button>




                    <Link to="/register">
                        <button className="btn btn-primary">
                            Sign up
                        </button>
                    </Link>




            </div>
        )
    }
}
