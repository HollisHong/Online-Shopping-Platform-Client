import React from "react";
import {Link} from "react-router-dom";
import ProductService from "../services/ProductService";

export default class MyProductRowComponent extends React.Component {
    state = {
        product: this.props.product

    }

    render = () => (
        <tr>
            {console.log(this.state.product)}
            <td>
                <Link to={`/search/${this.state.product.productName}`}>
                    {this.state.product.productName}
                </Link>
            </td>
            <td>{this.state.product.price}</td>
            <td>{this.state.product.id}</td>

            <td>
                <button onClick={() => {ProductService.deleteProduct(this.state.product.id)}}>
                    delete
                </button>
            </td>

        </tr>
    )
}
