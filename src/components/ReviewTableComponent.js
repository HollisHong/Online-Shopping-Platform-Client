import React from "react";
import SearchRowComponent from "./SearchRowComponent";
import ReviewRowComponent from "./ReviewRowComponent";


export default class ReviewTableComponent
    extends React.Component {

    state = {
        reviews: []
    }

    render() {
        return (
            <div>
                <br/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Review</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.reviews.map(review =>
                            <ReviewRowComponent
                                key={review.id}
                                review={review}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
