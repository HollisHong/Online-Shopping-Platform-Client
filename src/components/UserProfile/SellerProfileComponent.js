import React from "react";
import {logout} from "../../services/UserService";
import MyProductTableComponent from "../MyProductTableComponent";
import ProductService from "../../services/ProductService";

export default class SellerProfileComponent extends React.Component {
    state = {
        user: this.props.user,
        username: this.props.user.username,
        password: this.props.user.password,
        email: this.props.user.email,
        birthday: this.props.user.birthday,

        productName: '',
        productPrice: '',
        productDetail: '',
        productList: []
    }

    componentDidMount() {
        ProductService.findAllProductByUserId(this.props.user.id)
            .then(response =>
                this.setState({productList: response}))
    }


    addProduct = () =>
        ProductService.createProduct(this.props.user.id,
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
                <h2> Add Products to Sell </h2>
                <div className='row container'>
                    <input className="form-control col-lg-3"
                           onChange={(event) => this.setState({
                               productName: event.target.value
                           })}
                           value={this.state.productName}
                           placeholder="Product Name"/>
                    <input className="form-control col-lg-3"
                           onChange={(event) => this.setState({
                               productPrice: event.target.value
                           })}
                           value={this.state.productPrice}
                           placeholder="Product Price"/>
                    <input className="form-control col-lg-4"
                           onChange={(event) => this.setState({
                               productDetail: event.target.value
                           })}
                           value={this.state.productDetail}
                           placeholder="Product Detail"/>

                    <button className="btn btn-success col-lg-2"
                            onClick={() => this.addProduct()}>
                        Add Product
                    </button>
                </div>

                <MyProductTableComponent
                    deleteProduct={this.deleteProduct}
                    products={this.state.productList}/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>




        )
    }
}
