import React from "react";

import ReviewService from "../services/ReviewService";
import ReviewTableComponent from "../components/ReviewTableComponent";
import DetailsComponent from "../components/DetailsComponent";
import AmazonService from "../services/AmazonService";
export default class DetailsContainer
    extends React.Component
{
    state = {
        product: [],
        reviews: []
    }

    componentDidMount() {
        AmazonService.findProductByASIN(this.props.match.params.did)
            .then(response =>
                    this.setState({
                        product: response.product}))

        ReviewService.findReviewsByProductId(this.props.match.params.did)
            .then(reviews =>
                this.setState({
                    reviews: reviews
                }))
    }



    addReview = (did, review) =>
        ReviewService.createReview(did, review).then(response =>
            this.setState((prevState) => {
                return {
                    reviews: [
                        ...prevState.reviews,
                        response
                    ]
                }
            })
        )



    deleteReview = (ReviewToDelete) =>
        ReviewService.deleteReview(ReviewToDelete.id)
            .then(response => this.setState(prevState => ({
                reviews: prevState.reviews.filter(review => review !== ReviewToDelete)
                }))
            )


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
                        key={this.state.product.url}
                        product={this.state.product}/>
                </div>

                <br/>
                <div>
                    {console.log(this.state.reviews)}
                    <ReviewTableComponent
                        addReview={this.addReview}
                        deleteReview={this.deleteReview}
                        did={this.props.match.params.did}
                        reviews={this.state.reviews}/>
                </div>

            </div>
        )
    }
}


