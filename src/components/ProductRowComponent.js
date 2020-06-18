import React from "react";

export default class ProductRowComponent extends React.Component {
    state = {
        product: this.props.product
    }

    render = () => (
        <tr>
            {console.log(this.state.product)}
            <td>{this.state.product.productName}</td>
            <td>{this.state.product.price}</td>
            <td>??</td>

        </tr>
    )
}
