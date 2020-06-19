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
                <h2>Search Products on Amazon</h2>
                <input
                    onChange={(event) => this.setState({
                        searchTitle: event.target.value
                    })}
                    placeholder="Input Product Title"/>
                <button>
                    <Link to={`/search/${this.state.searchTitle}`}>
                        Search
                    </Link>
                </button>
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
