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
                        <th>Poster</th>
                    </tr>
                    </thead>

                    <tbody>
                    {

                        this.props.products.map(product =>
                            <MyProductRowComponent
                                key={product.id}
                                product={product}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
