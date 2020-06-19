import React from "react";
import ProductService from "../services/ProductService";

export default class ProfileComponent extends React.Component {
    state = {
        username: '',
        password: '',
        type: '',
        productName: '',
        productPrice: '',
        productDetail: '',
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/profile", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .catch(e => {
                this.props.history.push(`/profile/${e.id}`)
            })
            .then(user => {
                if(user)
                    this.setState({
                                      username: user.username, password: user.password, type: user.type,
                                  })
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
        fetch("http://localhost:8080/api/profile", {
            method: 'PUT',
            body: JSON.stringify({username: this.state.username, password: this.state.password, type: this.state.type}),
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

    addProduct = (productName) =>
        ProductService.createProduct({
                                        owner: this.props.match.params.uid,
                                         productName: this.state.productName,
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
