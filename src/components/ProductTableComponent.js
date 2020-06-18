import React from "react";
import ProductRowComponent from "./ProductRowComponent";



export default class ProductTableComponent
    extends React.Component {
    state = {
        products: []
    }

    render() {
        return (
            <div>
                <br/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Poster</th>
                    </tr>
                    </thead>

                    <tbody>
                    {

                        this.props.products.map(product =>
                            <ProductRowComponent
                                key={product.id}
                                product={product}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
