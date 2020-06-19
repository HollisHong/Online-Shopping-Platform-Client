import React from "react";
import {Link} from "react-router-dom";
import {findUserByID} from "../services/UserService";
import AmazonService from "../services/AmazonService";

export default class ReviewRowComponent extends React.Component {
    state = {
        review: this.props.review,
        username:'cjsydasb'
    }

    componentDidMount() {
        findUserByID(this.state.review.uid).then(
            response =>
                this.setState({
                username: response.username
            })
        )


    }

    render = () => (
        <tr>
            {console.log(this.state.review)}
            <td>
                <Link to={`/profile/${this.state.review.uid}`}>
                    {this.state.username}
                </Link>
            </td>
            <td>{this.state.review.content}</td>

        </tr>
    )
}
