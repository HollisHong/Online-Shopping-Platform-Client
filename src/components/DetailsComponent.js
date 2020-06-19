import React from "react";
import {fetchProfile} from "../services/UserService";
import {Link} from "react-router-dom";

export default class DetailsComponent extends React.Component {
    state = {
        product: this.props.product,
    }

    render() {
        return(
            <div>
                <div>
                    {console.log(this.props.product)}

                    <h4>Title: </h4>
                    <h5>{this.state.product.title}</h5>

                    <br/>

                    <h4>Brand: </h4>
                    <h5>{this.state.product.brand}</h5>
                    <br/>

                    <h4>FulfilledBy: </h4>
                    <h5>{this.state.product.fulfilledBy}</h5>
                    <br/>

                    <h4>Url: </h4>
                    <h5>{this.state.product.url}</h5>
                    <br/>

                    <h4>Price Details: </h4>
                    <h5>{JSON.stringify(this.state.product.price)}</h5>
                    <br/>

                    <h4>StoreID: </h4>
                    <h5>{this.state.product.storeID}</h5>
                    <br/>

                    <h4>Review: </h4>
                    <h5>{JSON.stringify(this.state.product.reviews)}</h5>

                    {console.log(this.state.product)}
                    {/*{this.props.detailFromAmazon.reviews}*/}

                    {/*<img src = {this.props.detailFromAmazon.images.get(1)}/>*/}
                </div>
            </div>

        )
    }
}

