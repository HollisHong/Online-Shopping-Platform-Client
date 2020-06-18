import React from "react";
import SearchTableComponent from "../components/SearchTableComponent";
import AmazonService from "../services/AmazonService";
import courseService from "../services/CourseService";

class AmazonListContainer
    extends React.Component
{
    state = {
        searchTitle:'iphone',
        products: [],
    }

    componentDidMount() {
        AmazonService.searchProductByTitle(this.state.searchTitle)
            .then(response =>
                this.setState({
                    products:response
                }))
    }

    searchProductByTitle = (title) =>
        AmazonService.searchProductByTitle(title)
            .then(response =>
                this.setState({
                        products: response
                    }))

    render() {

        console.log(this.props)

        return(
            <div>
                <h2>Search Products on Amazon</h2>
                <input
                    onChange={(event) => this.setState({
                        searchTitle: event.target.value
                    })}
                    placeholder="Input Product Title"/>
                <button onClick={() => this.searchProductByTitle(this.state.searchTitle)}>
                    Search
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
