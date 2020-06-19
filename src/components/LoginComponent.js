import React from "react";
import {Link} from "react-router-dom";
import {login} from "../services/UserService";

export default class LoginComponent extends React.Component {
    state = {
        username: '',
        password: '',
        type: ''
    }
    login = () => {
        login()
            .catch(e => {
                this.props.history.push("/login")
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
                <input
                    onChange={(e) => this.setState({username: e.target.value})}
                    className="form-control"/>
                <input
                    onChange={(e) => this.setState({password: e.target.value})}
                    className="form-control"/>
                    <button
                        onClick={this.login}
                        className="btn btn-primary">
                        Login
                    </button>
                <Link to="/register">Sign up</Link>
            </div>
        )
    }
}
