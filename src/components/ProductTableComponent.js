import React from "react";
import ProductRowComponent from "./ProductRowComponent";
import {fetchProfile} from "../services/UserService";



export default class ProductTableComponent
    extends React.Component {

    state = {
        type: ''

    }


    componentDidMount() {
        fetchProfile()
            .catch(e => {})
            .then(user => {
                if (user) {
                    this.setState({
                        type: user.type
                    })
                } else {
                    this.setState({
                        type: 'dad'
                    })
                }
            })}


    render() {
        return (
            <div>
                <br/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th className="d-none d-md-table-cell">Details</th>
                        <th>Options</th>
                    </tr>
                    </thead>

                    <tbody>
                    {

                        this.props.products.map(product =>
                            <ProductRowComponent
                                type={this.state.type}
                                key={product.id}
                                product={product}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
