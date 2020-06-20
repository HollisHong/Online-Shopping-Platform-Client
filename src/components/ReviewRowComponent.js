import React from "react";
import {Link} from "react-router-dom";
import {fetchProfile, findUserByID} from "../services/UserService";

import ReviewService from "../services/ReviewService";

export default class ReviewRowComponent extends React.Component {
    state = {
        review: this.props.review,
        username:'',
        currentUser: {
            username: ''
        },
        editing: '',
        editingContent : ''
    }

    componentDidMount() {
        findUserByID(this.state.review.uid).then(
            response =>
                this.setState({
                username: response.username
            })
        )

        fetchProfile()
            .catch(e => {})
            .then(user => {
                if (user) {
                    this.setState({
                    currentUser: user}
                    )}})
    }

    updateReview = () =>
        ReviewService.updateReview(
            this.state.review.id,
            {
                ...this.state.review,
                content: this.state.editingContent
            })
            .then(response => this.setState({
                editing: '',
                review: response
                }))



    render = () => (
        <tr>

            <td>
                <Link to={`/profile/${this.state.review.uid}`}>
                    {this.state.username}
                </Link>
            </td>
            {!this.state.editing && <td>{this.state.review.content}</td>}

            {!this.state.editing &&
            <td>
                {
                    this.state.currentUser.id === this.state.review.uid &&
                    <button onClick={() => this.setState({
                        editing: 'yes'
                    })}>
                        Edit
                    </button>
                }

                {
                    this.state.currentUser.id !== this.state.review.uid &&
                    <h6>You can't modify this review</h6>
                }
            </td>}

            {this.state.editing === 'yes' &&
            <td>
                <input value={this.editingContent}
                       placeholder={this.state.review.content}
                       onChange={(event) => this.setState({
                           editingContent: event.target.value
                           })
                       }/>
            </td>}
            {this.state.editing === 'yes' &&
                <td>
                <button onClick={() => this.updateReview()}>
                update
                </button>
                <button onClick={() => this.props.deleteReview(this.state.review)}>
                delete
                </button>
                </td>
            }
        </tr>

    )
}
