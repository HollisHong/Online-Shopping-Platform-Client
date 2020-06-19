import React from "react";
import {fetchProfile} from "../services/UserService";
import {Link} from "react-router-dom";

export default class DetailsComponent extends React.Component {
    state = {
        detailFromAmazon: this.props.detailFromAmazon,
        reviews: this.props.detailFromAmazon.reviews
    }

    render() {
        return(
            <div>

                {console.log(this.props.detailFromAmazon)}

                <h4>Title: </h4>
                <h5>{this.state.detailFromAmazon.title}</h5>

                <br/>

                <h4>Brand: </h4>
                <h5>{this.state.detailFromAmazon.brand}</h5>
                <br/>

                <h4>FulfilledBy: </h4>
                <h5>{this.state.detailFromAmazon.fulfilledBy}</h5>
                <br/>

                <h4>Url: </h4>
                <h5>{this.state.detailFromAmazon.url}</h5>
                <br/>

                <h4>Price Details: </h4>
                <h5>{JSON.stringify(this.state.detailFromAmazon.price)}</h5>
                <br/>

                <h4>StoreID: </h4>
                <h5>{this.state.detailFromAmazon.storeID}</h5>
                <br/>

                <h4>Review: </h4>
                <h5>{JSON.stringify(this.state.detailFromAmazon.reviews)}</h5>

                {console.log(this.state.detailFromAmazon)}
                {/*{this.props.detailFromAmazon.reviews}*/}

                {/*<img src = {this.props.detailFromAmazon.images.get(1)}/>*/}
            </div>
        )
    }
}

