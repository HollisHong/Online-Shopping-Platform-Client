import React from "react";
import {Link} from "react-router-dom";
import SearchTableComponent from "../components/SearchTableComponent";
import AmazonService from "../services/AmazonService";

class AmazonListContainer
    extends React.Component
{
    state = {
        searchTitle: this.props.match.params.title,
        products: [],
    }

    componentDidMount() {
        (this.state.searchTitle !== undefined) &&
        AmazonService.searchProductByTitle(this.state.searchTitle)
            .then(response =>
                // console.log(response)
                this.setState({
                    products:response.products
                })
            )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.title !== this.props.match.params.title) {
            AmazonService.searchProductByTitle(this.state.searchTitle)
                .then(response =>
                    this.setState({
                        products:response.products
                    }))
        }
    }


    render() {
        return(
            <div>
                <h2 className="d-none d-sm-block">Search Product on Amazon</h2>
                <div className="row container">
                <input className="col-10"
                    onChange={(event) => this.setState({
                        searchTitle: event.target.value
                    })}
                    placeholder="Input Product Title"/>
                    <Link className="col-2"
                        to={`/search/${this.state.searchTitle}`}>
                <button className="btn btn-primary">
                        Search
                </button>
                    </Link>
                    </div>
                <br/>

                <div>
                    <SearchTableComponent
                        products={this.state.products}/>
                </div>

            </div>
        )
    }
}

export default AmazonListContainer
