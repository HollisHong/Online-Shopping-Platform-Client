import React from "react";
import {Link} from "react-router-dom";
import AmazonService from "../services/AmazonService";

export default class SearchRowComponent extends React.Component {
    state = {
        editing: false,
        product: this.props.product
    }

    render = () => (
        <tr>
            {console.log(this.state.product)}
            <td>{this.state.product.title}</td>
            <td>{this.state.product.price}</td>
            <td><img src = {this.state.product.imageUrl}/></td>

        </tr>
    )
}
