import React from "react";
import ProductService from "../services/ProductService";
import ProductTableComponent from "../components/ProductTableComponent";


class ProductListContainer
    extends React.Component
{
    state = {
        products: [],
        newProductTitle: ""
    }

    componentDidMount() {
        ProductService.findAllProducts()
            .then(actualArrayOfProducts =>
                      this.setState({
                                        products: actualArrayOfProducts
                                    }))
    }



    render() {
        return(

            <div>
                <h2>Product List</h2>
                <ProductTableComponent
                    products={this.state.products}/>
            </div>
        )
    }
}

export default ProductListContainer
