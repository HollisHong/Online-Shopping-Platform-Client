import React from "react";
import {logout, updateLikes} from "../../services/UserService";
import SellerProfileComponent from "./SellerProfileComponent";
import MyProductTableComponent from "../MyProductTableComponent";
import ProductService from "../../services/ProductService";

export default class VisitorProfileComponent extends React.Component {
    state = {
        user: this.props.user,
        likes: this.props.user.likes,
        lover: this.props.user.lover

    }

    // componentDidMount() {
    //     this.setState({
    //         likes: parseInt(this.state.likes) + 1,
    //         lover: this.props.visitorName
    //     })
    // }




    render() {
        return(
            <div>
                <h1>The Profile of User {this.state.user.username}</h1>
                <div>
                    <div className='row' style={{backgroundColor: 'rgb(255, 204, 179)'}}>

                        <block
                            style={{backgroundColor: 'rgb(255, 204, 179)'}}
                            className="form-control text-center col-11">
                            <h4>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp;
                                Likes he/she has: {this.state.likes} </h4>
                        </block>
                        <button className='btn btn-warning col-1'
                                onClick={() => {
                                    this.setState({
                                        likes: parseInt(this.state.likes) + 1
                                    })
                                    updateLikes(this.state.user.id, {
                                        likes: parseInt(this.state.likes) + 1,
                                        lover: this.state.lover
                                    })
                                }}>
                            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </button>
                    </div>

                </div>
                {
                    this.state.user.type == 'seller' &&
                    <div>
                        <br/>
                        <h4>On Selling</h4>
                        <MyProductTableComponent
                            products={this.state.user.products}/>

                    </div>
                }
            </div>


        )
    }
}
