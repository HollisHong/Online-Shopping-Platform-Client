import React from "react";
import MyProductRowComponent from "./MyProductRowComponent";
import {fetchProfile} from "../services/UserService";



export default class MyProductTableComponent
    extends React.Component {


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
                            <MyProductRowComponent
                                deleteProduct={this.props.deleteProduct}
                                key={product.id}
                                product={product}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
