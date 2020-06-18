import React from "react";
import {fetchProfile} from "../services/UserService";
import {Link} from "react-router-dom";

export default class DetailsComponent extends React.Component {

    render() {
        return(
            <div>
                {console.log(this.props.detailFromAmazon)}
                <h4>Title: </h4>
                <h5>{this.props.detailFromAmazon.title}</h5>
                <br/>

                <h4>Brand: </h4>
                <h5>{this.props.detailFromAmazon.brand}</h5>
                <br/>

                <h4>FulfilledBy: </h4>
                <h5>{this.props.detailFromAmazon.fulfilledBy}</h5>
                <br/>

                <h4>Url: </h4>
                <h5>{this.props.detailFromAmazon.url}</h5>
                <br/>

                <h4>Price Details: </h4>
                <h5>{JSON.stringify(this.props.detailFromAmazon.price)}</h5>
                <br/>

                <h4>StoreID: </h4>
                <h5>{this.props.detailFromAmazon.storeID}</h5>
                <br/>

                <h4>Review: </h4>
                <h5>{JSON.stringify(this.props.detailFromAmazon.reviews)}</h5>
                {console.log(this.props.detailFromAmazon.price)}
                {/*{this.props.detailFromAmazon.reviews}*/}

                {/*<img src = {this.props.detailFromAmazon.images.get(1)}/>*/}
            </div>
        )
    }
}

