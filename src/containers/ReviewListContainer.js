// import React from "react";
// import ProductService from "../services/ProductService";
// import ProductTableComponent from "../components/ProductTableComponent";
// import ReviewService from "../services/ReviewService";
// import ReviewTableComponent from "../components/ReviewTableComponent";
//
//
// class ReviewListContainer
//     extends React.Component
// {
//     state = {
//         reviews: [],
//         newReviewContent: ""
//     }
//
//     componentDidMount() {
//         ReviewService.findReviewsByProductId(this.props.did)
//             .then(actualArrayOfReviews =>
//                 this.setState({
//                     reviews: actualArrayOfReviews
//                 }))
//     }
//
//     render() {
//         return(
//
//             <div>
//                 <h2>Review List</h2>
//                 <ReviewTableComponent
//                     reviews={this.state.reviews}/>
//             </div>
//         )
//     }
// }
//
// export default ReviewListContainer
