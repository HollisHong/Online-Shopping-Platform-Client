import React from "react";
import ProductService from "../services/ProductService";
import {fetchProfile, findUserByID} from "../services/UserService";
import ProductTableComponent from "./ProductTableComponent";
import MyProductTableComponent from "./MyProductTableComponent";
import AmazonService from "../services/AmazonService";
import ReviewService from "../services/ReviewService";

export default class ProfileComponent extends React.Component {
    state = {
        productList: [],
        currentUser: {
            username: ''
        },
        username: '',
        password: '',
        type: '',
        productName: '',
        productPrice: '',
        productDetail: '',
        birthday: '',
        email: 'default@gmail.com',
        likes: '',
        lover: '',
        editing: '',
        loggedUserName: 'sb',
        loggedUserId:''
    }

    findAllProductByUserId = () =>
        ProductService.findAllProductByUserId(this.props.match.params.uid)
            .then(response =>
                this.setState({productList: response}))

    componentDidMount() {
        fetchProfile()
            .catch(e => {
                this.props.history.push(`/profile/${this.props.match.params.uid}`)
            })
            .then(user => {
                if (user) {
                    if (user.id != this.props.match.params.uid) {
                        this.setState({
                            loggedUserName: user.username
                        })
                        findUserByID(this.props.match.params.uid).then(
                            response => {
                                this.setState(
                                    {
                                        currentUser: {username: ''},
                                        likes: response.likes,
                                    }
                                )
                            }
                        )

                    } else {
                        this.setState({
                            currentUser: user,
                            username: user.username,
                            password: user.password,
                            type: user.type,
                            email: user.email,
                            birthday: user.birthday,
                            likes: user.likes,
                            lover: user.lover,
                            loggedUserId: user.id
                        })
                    }
                }
            })
        this.findAllProductByUserId()
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevState.productList !== this.state.productList) {
    //
    //     }
    // }


    logout = () => {
        fetch("http://localhost:8080/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))

    }

    update = () => {
        fetch(`http://localhost:8080/api/profile/${this.props.match.params.uid}`, {
            method: 'PUT',
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                birthday: this.state.birthday,
                password: this.state.password,
                likes: this.state.likes,
                lover: this.state.lover
            }),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        })
            .then(response => response.json())
    }

    updateLikes = () => {
        fetch(`http://localhost:8080/api/profile/${this.props.match.params.uid}`, {
            method: 'PUT',
            body: JSON.stringify({
                likes: this.state.likes,
                lover: this.state.lover
            }),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        })
            .then(response => response.json())
    }



    addProduct = () =>
        ProductService.createProduct(this.props.match.params.uid,
            {
                productName: this.state.productName,
                price: this.state.productPrice,
                details: this.state.productDetail,
            }).then(response =>
            this.setState((prevState) => {
                return {
                    productList: [
                        ...prevState.productList,
                        response
                    ]
                }
            })
        )


    deleteProduct = (ProductToDelete) =>
        ProductService.deleteProduct(ProductToDelete.id)
            .then(status => this.setState((prevState) => {
                return {
                    productList: prevState
                        .productList.filter(product => product !== ProductToDelete)
                }
            }))


    render() {
        return (
            <div>
                {
                    !this.state.currentUser.username &&
                    <div>
                        <h3>This User's Selling List</h3>
                        <ProductTableComponent
                            products={this.state.productList}/>
                    </div>
                }
                {this.state.currentUser.username &&
                <div>
                    <h2>
                        Username
                    </h2>
                    <input
                        value={this.state.username}
                        onChange={(e) => this.setState({username: e.target.value})}
                        className="form-control"/>
                    <br/>
                    <h2>
                        User Password
                    </h2>
                    <input
                        value={this.state.password}
                        type={"password"}
                        onChange={(e) => this.setState({password: e.target.value})}
                        className="form-control"/>

                    <br/>

                    <h2>
                        User Email
                    </h2>
                    <input type="email"
                           className="form-control"
                           value={this.state.email}
                           placeholder="li.tianq@husky.neu.edu"
                           title="The email address you use"
                           onChange={(e) => this.setState({email: e.target.value})}/>
                    <br/>

                    <h2>
                        User Birthday
                    </h2>
                    <input type="date"
                           className="form-control"
                           value={this.state.birthday}
                           title="The Date of birth for you"
                           onChange={(e) => this.setState({birthday: e.target.value})}/>
                    <br/>

                    <h3>{this.state.type}</h3>

                    <button
                        onClick={this.update}
                        className="btn btn-primary">
                        Update
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={this.logout}>
                        Sign out
                    </button>
                </div>
                }

                {this.state.type === 'seller' &&
                    this.state.loggedUserId === this.props.match.params.uid &&
                <div>

                    <h2> Sell your product here! </h2>
                    <input
                        onChange={(event) => this.setState({
                            productName: event.target.value
                        })}
                        value={this.state.productName}
                        placeholder="Product Name"/>
                    <input
                        onChange={(event) => this.setState({
                            productPrice: event.target.value
                        })}
                        value={this.state.productPrice}
                        placeholder="Product Price"/>
                    <input
                        onChange={(event) => this.setState({
                            productDetail: event.target.value
                        })}
                        value={this.state.productDetail}
                        placeholder="Product Detail"/>

                    <button onClick={() => this.addProduct()}>
                        Add Product
                    </button>
                    <div>
                        <MyProductTableComponent
                            deleteProduct={this.deleteProduct}
                            products={this.state.productList}/>
                    </div>

                </div>
                }

                {this.state.likes}


                {(this.state.currentUser.id != this.props.match.params.uid) &&
                <button onClick={() => {
                    this.setState({
                        likes: parseInt(this.state.likes) + 1,
                        lover: this.state.loggedUserName
                    })
                    this.updateLikes()
                }}>
                    like!
                </button>
                }
            </div>
        )
    }
}
