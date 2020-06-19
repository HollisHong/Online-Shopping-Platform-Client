import React from "react";
import {Link} from "react-router-dom";
import ProductService from "../services/ProductService";

export default class ProductRowComponent extends React.Component {
    state = {
        product: this.props.product
    }

    render = () => (
        <tr>
            {console.log(this.state.product)}
            <td>
                <Link to={`/details/${this.state.product.id}`}>
                    {this.state.product.productName}
                </Link>
            </td>
            <td>{this.state.product.price}</td>
            <td>{this.state.product.id}</td>

            <button onClick={() => {ProductService.deleteProduct(this.state.product.id)}}>
                delete
            </button>

        </tr>
    )
}
