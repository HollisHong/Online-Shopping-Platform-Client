import React from "react";
import {logout} from "../../services/UserService";
import MyProductTableComponent from "../MyProductTableComponent";
import ProductService from "../../services/ProductService";
import SellerProfileComponent from "./SellerProfileComponent";

export default class UserProfileComponent extends React.Component {
    state = {
        user: this.props.user,
        username: this.props.user.username,
        password: this.props.user.password,
        email: this.props.user.email,
        birthday: this.props.user.birthday,

        productName: '',
        productPrice: '',
        productDetail: '',
        productList: [],
        error:''
    }

    componentDidMount() {
        ProductService.findAllProductByUserId(this.props.user.id)
            .then(response =>
                this.setState({productList: response}))
    }



    update = () => {
        fetch(`http://localhost:8080/api/profile/${this.state.user.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                birthday: this.state.birthday,
                products: this.state.productList
            }),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).catch(e => {
            console.log(e)
            // this.setState({
            //     error: 'Unable to register'
            // })
        })
            // .then(response => this.setState({
            //     user: response.json()
            // }))
    }





    render() {
        return (

            <div className='container form-control' style={{backgroundColor: 'rgb(255, 204, 179)'}}>
                {
                    this.state.error &&
                    <div className="alert alert-danger">
                        {this.state.error}
                    </div>
                }

                <div className='row'>
                    <block
                        style={{backgroundColor: 'rgb(255, 204, 179)'}}
                        className="block text-center col-5">
                        <h5 className="mb-1">
                            Welcome to your profile page, {this.props.user.type} {this.state.username}</h5>
                    </block>
                    <block
                        style={{backgroundColor: 'rgb(255, 204, 179)'}}
                        className="block text-center col-2">
                        <h5 className="mb-1">
                            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp;:
                            {this.state.user.likes}</h5>
                    </block>
                    <block
                        style={{backgroundColor: 'rgb(255, 204, 179)'}}
                        className="block text-center col-5">
                        <h5 className="mb-1">Recent liked by User: {this.state.user.lover}</h5>
                    </block>
                </div>
                <br/>



                <label htmlFor="username">
                    <h2>Username</h2>
                </label>

                <input
                    value={this.state.username}
                    onChange={(e) => this.setState({username: e.target.value})}
                    id="username"
                    className="form-control"/>
                <br/>
                <label htmlFor="password">
                    <h2>Password</h2>
                </label>
                <input
                    value={this.state.password}
                    type={"password"}
                    id="password"
                    onChange={(e) => this.setState({password: e.target.value})}
                    className="form-control"/>

                <br/>

                <label htmlFor="email"><h2>Email</h2></label>
                <input type="email"
                       id="email"
                       className="form-control"
                       value={this.state.email}
                       placeholder="li.tianq@husky.neu.edu"
                       title="The email address you use"
                       onChange={(e) => this.setState({email: e.target.value})}/>
                <br/>

                <label htmlFor="birthday">
                    <h2>Birthday</h2>
                </label>
                <input type="date"
                       id="birthday"
                       className="form-control"
                       value={this.state.birthday}
                       title="The Date of birth for you"
                       onChange={(e) => this.setState({birthday: e.target.value})}/>
                <br/>

                <div className="form-group row">
                    <div className="col-lg-6">
                        <button onClick={() => this.update()}
                            className="form-control btn btn-success">Update</button>
                    </div>
                    <div className="col-lg-6">
                        <button onClick={() => this.props.logout()}
                            className="form-control btn btn-secondary">Logout</button>
                    </div>
                </div>

                <br/>
                <br/>

                {
                    this.state.user.type == 'seller' &&
                    <div>
                        <SellerProfileComponent
                            key={this.state.user.id}
                            user={this.state.user}/>
                    </div>
                }

            </div>


        )
    }
}
