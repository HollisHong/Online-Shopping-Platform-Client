import React from "react";
import {Link} from "react-router-dom";
import ProductService from "../services/ProductService";

export default class MyProductRowComponent extends React.Component {
    state = {
        product: this.props.product,
        price: '',
        details: '',
        productName: '',
        editing: ''
    }

    render = () => (
        <tr>
            {this.state.editing &&
            <td>
                <input value={this.state.productName}
                       placeholder={this.state.product.productName}
                       onChange={(event) => this.setState({
                           productName: event.target.value
                       })}/>
            </td>}

            {this.state.editing &&
            <td>
                <input value={this.state.price}
                       placeholder={this.state.product.price}
                       onChange={(event) => this.setState({
                           price: event.target.value
                       })}/>

            </td>}

            {this.state.editing &&
            <td>
                <input value={this.state.details}
                       placeholder={this.state.product.details}
                       onChange={(event) => this.setState({
                           details: event.target.value
                       })}/>
            </td>}

            {this.state.editing === 'yes' &&
            <td>
                <button onClick={() => {
                    ProductService.updateProduct(this.state.product.id, {
                        price: this.state.price,
                        productName: this.state.productName,
                        details: this.state.details
                    }).then(response => this.setState({
                        editing: '',
                        product: response
                    }))

                }}>
                    Update
                </button>
                <button onClick={() => {
                    this.props.deleteProduct(this.state.product)
                }}>
                    delete
                </button>
            </td>}

            {!this.state.editing &&
            <td>
                <Link to={`/search/${this.state.product.productName}`}>
                    {this.state.product.productName}
                </Link>
            </td>
            }

            {!this.state.editing &&
            <td>
                {this.state.product.price}
            </td>
            }

            {!this.state.editing &&
            <td>
                {this.state.product.details}
            </td>}

            {!this.state.editing &&
            <td>
                <button onClick={() => this.setState({
                    editing: 'yes'
                })}>
                    Edit
                </button>
            </td>}


        </tr>
    )
}

