import React from "react";
import SearchTableComponent from "../components/SearchTableComponent";
import AmazonService from "../services/AmazonService";

class ProductListContainer
    extends React.Component
{
    state = {
        searchTitle:'coke',
        products: [],
    }

    componentDidMount() {
        AmazonService.searchProductByTitle(this.state.searchTitle)
            .then(response =>
                this.setState({
                    products:response
                }))
    }


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
                <button onClick={
                    () => this.componentDidMount()}>
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

export default ProductListContainer
