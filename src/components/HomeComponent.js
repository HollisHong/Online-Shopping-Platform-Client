import React from "react";
import {Link} from "react-router-dom";
import {fetchProfile} from "../services/UserService";


export default class HomeComponent extends React.Component {
    state = {
        currentUser: {
            username: ''
        }
    }
    componentDidMount() {
        fetchProfile()
            .catch(e => {})
            .then(currentUser => {
                if(currentUser) {
                    this.setState({currentUser: currentUser})
                }
            })
    }

    render() {
        return(
          <div>
            <h5>Designed by Group 17</h5>
              {this.state.currentUser.username &&
                  <h3>Welcome {this.state.currentUser.username}</h3>
              }
              <div className="list-group">
                  <Link className="list-group-item" to='/search/ipad'>
                      Search products on Amazon/Google
                  </Link>
                  <Link className="list-group-item" to='/products'>
                      Product List
                  </Link>
                  {
                      !this.state.currentUser.username &&
                      <Link className="list-group-item" to='/login'>
                          Login
                      </Link>
                  }
                  {
                      !this.state.currentUser.username &&
                      <Link className="list-group-item" to='/register'>
                          Registration
                      </Link>
                  }
                  {
                      this.state.currentUser.username &&
                      <Link className="list-group-item" to={`/profile/${this.state.currentUser.id}`}>
                          Profile
                      </Link>
                  }
              </div>
          </div>
        )
    }
}

