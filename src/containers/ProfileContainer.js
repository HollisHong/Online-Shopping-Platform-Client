import {fetchProfile, findUserByID} from "../services/UserService";
import UserProfileComponent from "../components/UserProfile/UserProfileComponent"
import VisitorProfileComponent from "../components/UserProfile/VisitorProfileComponent"
import React from "react";

export default class ProfileContainer
    extends React.Component
{
    state = {
        userOfCurrentPage:[],
        pageToGo: '',
        visitorName: ''
    }


    componentDidMount() {
        findUserByID(this.props.match.params.uid).then(
            response => {
                this.setState({
                    userOfCurrentPage: response
                })
            })
        fetchProfile()
            // .catch(e => {this.props.history.push(`/profile/${this.props.match.params.uid}`)})
            .then(user => {
                if (user) {
                    if (user.id == this.props.match.params.uid) {
                        {
                            if (user.type === 'seller') {
                                this.setState({
                                    pageToGo: 'seller'
                                })
                            }
                            if (user.type === 'buyer') {
                                this.setState({
                                    pageToGo: 'buyer'
                                })
                            }
                        }
                    } else {
                        this.setState({
                            pageToGo: 'visitor',
                            visitorName: user.username
                        })
                    }
                } else {
                    this.setState({
                        pageToGo: 'visitor',
                        visitorName: 'Anonymous User'
                    })
                }
            })
    }


    logout = () => {
        fetch("http://localhost:8080/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))
    }




    render() {
        return(
            <div>
                {/*<h2>Profile Page of {this.state.userOfCurrentPage.username}</h2>*/}
                {this.state.pageToGo == 'seller' &&
                    <div>
                            <UserProfileComponent
                                key={this.state.userOfCurrentPage.id}
                                user={this.state.userOfCurrentPage}
                                logout={this.logout}
                            />
                            <br/>
                    </div>
                }

                {this.state.pageToGo == 'buyer' &&
                    <UserProfileComponent
                        key={this.state.userOfCurrentPage.id}
                        user={this.state.userOfCurrentPage}
                        logout={this.logout}
                    />
                }
                {this.state.pageToGo == 'visitor' &&
                    <VisitorProfileComponent
                        visitorName={this.state.visitorName}
                        key={this.state.userOfCurrentPage.id}
                        user={this.state.userOfCurrentPage}/>
                }
            </div>
        )

    }



}