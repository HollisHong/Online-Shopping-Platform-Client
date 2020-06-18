import React from "react";
import {Link} from "react-router-dom";
import SearchTableComponent from "../components/SearchTableComponent";
import AmazonService from "../services/AmazonService";
import DetailsComponent from "../components/DetailsComponent";

export default class DetailsContainer
    extends React.Component
{
    state = {
        detailFromAmazon: [],
        reviewFromUsers: []
    }

    componentDidMount() {
        AmazonService.findProductByASIN(this.props.match.params.did)
            .then(
                response =>
                    this.setState({
                        detailFromAmazon: response.product}))
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.match.params.title !== this.props.match.params.title) {
    //         AmazonService.searchProductByTitle(this.state.searchTitle)
    //             .then(response =>
    //                 this.setState({
    //                     products:response
    //                 }))
    //     }
    // }


    render() {
        return(
            <div>
                <h2>Details on Amazon</h2>
                <br/>

                <div>
                    <DetailsComponent
                        detailFromAmazon={this.state.detailFromAmazon}/>
                </div>

            </div>
        )
    }
}


