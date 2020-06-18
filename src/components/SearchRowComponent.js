import React from "react";

export default class SearchRowComponent extends React.Component {
    state = {
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
