import React from "react";
import {Link} from "react-router-dom";
import SearchRowComponent from "./SearchRowComponent";


export default class SearchTableComponent
    extends React.Component {
        render() {
            return (
        <div>
            <br/>
            <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Poster</th>
                </tr>
                </thead>

                <tbody>
                {
                    this.props.products.map(product =>
                        <SearchRowComponent
                            key={product.id}
                            product={product}/>
                    )}
                </tbody>
            </table>
        </div>
            )
        }
}
