import React from "react";
import ProductService from "../services/ProductService";
import {fetchProfile, findUserByID} from "../services/UserService";
import ProductTableComponent from "./ProductTableComponent";
import MyProductTableComponent from "./MyProductTableComponent";
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
        loggedUserName: '',
        loggedUserId:'',
        watchedType: ''
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
                        findUserByID(this.props.match.params.uid).then(
                            response => {
                                this.setState(
                                    {
                                        watchedType: response.type,
                                        currentUser: {username: response.username},
                                        likes: response.likes,
                                        loggedUserId: user.id,
                                        loggedUserName: user.username
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
                            loggedUserId: user.id,
                            loggedUserName: user.username
                        })
                    }
                } else {
                    findUserByID(this.props.match.params.uid).then(
                        response => {
                            this.setState(
                                {
                                    likes: response.likes,
                                    watchedType: response.type,
                                    currentUser: {username: response.username},
                                }
                            )
                        }
                    )
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
        fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))

    }

    update = () => {
        fetch(`https://cs4550-20su1-group17-server.herokuapp.com/api/profile/${this.props.match.params.uid}`, {
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
        fetch(`https://cs4550-20su1-group17-server.herokuapp.com/api/profile/${this.props.match.params.uid}/update`, {
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
                {this.state.currentUser.username !== this.state.loggedUserName &&
                      this.state.watchedType === "seller" &&

                      <div>
                          <h3>This User's Selling List</h3>
                          <ProductTableComponent
                              products={this.state.productList}/>
                      </div>
                }

                {this.state.currentUser.username !== this.state.loggedUserName &&
                    this.state.watchedType == "buyer" &&
                    <div>
                    <h3>This User is a buyer!</h3>
                    </div>
                }


                {this.state.loggedUserName &&
                    this.state.currentUser.username === this.state.loggedUserName &&
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

                    <h3>You are a {this.state.type}</h3>
                     <br/>

                     <h3>likes: {this.state.likes}, Recent liker: {this.state.lover}</h3>

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

                {this.state.loggedUserName&&
                    this.state.type === 'seller' &&
                    this.state.loggedUserId == this.props.match.params.uid &&
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




                {this.state.loggedUserId != this.props.match.params.uid &&
                 <div>
                 <h3>Likes he/she has: {this.state.likes} </h3>
                     {console.log(this.state.loggedUserName)}
                 <button onClick={() => {
                    this.setState({
                        likes: parseInt(this.state.likes) + 1,
                        lover: this.state.loggedUserName
                    })
                    this.updateLikes()
                }}>
                    like!
                </button>
                 </div>
                }
            </div>
        )
    }
}
