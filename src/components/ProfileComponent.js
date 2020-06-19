import React from "react";
import ProductService from "../services/ProductService";
import {fetchProfile} from "../services/UserService";
import ProductRowComponent from "./ProductRowComponent";
import ProductTableComponent from "./ProductTableComponent";

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
        email: 'default@gmail.com'
    }

    findAllProductByUserId = () =>
        ProductService.findAllProductByUserId(this.props.match.params.uid)
            .then(response =>
                      this.setState( {productList: response}))

    componentDidMount() {
        fetchProfile()
            .catch(e => {
                this.props.history.push(`/profile/${this.props.match.params.uid}`)
            })
            .then(user => {
                if (user) {
                    if (user.id != this.props.match.params.uid) {
                        this.setState({currentUser: {username: ''}})
                    } else {
                        this.setState({
                                          currentUser: user,
                                          username: user.username,
                                          password: user.password,
                                          type: user.type,
                                          email: user.email,
                                          birthday: user.birthday
                                      })
                    }
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

    update = () => {
        fetch(`http://localhost:8080/api/profile/${this.props.match.params.uid}`, {
            method: 'PUT',
            body: JSON.stringify({username: this.state.username,
                                     email: this.state.email, birthday: this.state.birthday,
                                     password: this.state.password, type: this.state.type}),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        })
            .then(response => response.json())
            // .then(user => this.setState({
            //                                 username: user.username, password: user.password
            //                             }))
    }

    addProduct = (userId) =>
        ProductService.createProduct(this.props.match.params.uid,
            {productName: this.state.productName,
                price: this.state.productPrice,
                details: this.state.productDetail,
                                     })
            // .then(theActualNewProduct =>
            //           this.setState((prevState) => {
            //               return {
            //                   products: [
            //                       ...prevState.products,
            //                       theActualNewProduct
            //                   ]
            //               }
            //           }))



    render() {
        return(
            <div>
                {
                    !this.state.currentUser.username &&
                    <div>
                        <h3>
                            need sign in
                        </h3>

                        <button onClick={() => this.findAllProductByUserId()}>
                            show his/her on-sell products
                        </button>

                        <div>
                            <ProductTableComponent
                                products={this.state.productList}/>
                        </div>

                    </div>
                }
                    {this.state.type === 'seller' &&
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
                         <br/>
                         <br/>
                         <br/>
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

                         <button onClick={() => this.findAllProductByUserId()}>
                             show your on-sell products
                         </button>

                         <div>
                             <ProductTableComponent
                                 products={this.state.productList}/>
                         </div>

                     </div>
                    }

                    {this.state.type === 'buyer' &&
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
                             onChange={(e) => this.setState({password: e.target.value})}
                             className="form-control"/>

                             <br/>


                         <h2>
                             User Email
                         </h2>
                         <input type="email"
                                className="form-control"
                                placeholder="li.tianq@husky.neu.edu"
                                title="The email address you use"
                                onChange={(e) => this.setState({email: e.target.value})}
                                value={this.state.email}/>
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
            </div>
        )
    }
}
