import React from "react";
import ProductService from "../services/ProductService";
import ProductTableComponent from "../components/ProductTableComponent";


class ProductListContainer
    extends React.Component
{
    state = {
        products: [],
        newProductTitle: "cjsysb"
    }

    componentDidMount() {
        ProductService.findAllProducts()
            .then(
                actualArrayOfProducts =>
                      this.setState({
                                        products: actualArrayOfProducts
                                    }))
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevProps.match.params.layout !== this.props.match.params.layout) {
    //         this.setState({
    //                           layout: this.props.match.params.layout
    //                       })
    //     }
    // }


    deleteProduct = (ProductToDelete) =>
        ProductService.deleteProduct(71)
            .then(status => this.setState((prevState) => {
                return {
                    products: prevState
                        .products.filter(product => product.id !== ProductToDelete.id)
                }
            }))

    addProduct = (productName) =>
        ProductService.createProduct({
            productName: productName,
            price: 1.0,
            details: "cjsysb"

        })
            .then(theActualNewProduct =>
                      this.setState((prevState) => {
                          return {
                              products: [
                                  ...prevState.products,
                                  theActualNewProduct
                              ]
                          }
                      }))



    render() {
        return(

            <div>
                <button onClick={
                    () => this.addProduct(this.state.newProductTitle)}>
                    Add Product
                </button>
                <button onClick={
                    () => this.deleteProduct({
                        id: 71
                    })}>
                    Delete Product
                </button>
                <h2>Product List</h2>
                <ProductTableComponent
                    products={this.state.products}/>
            </div>
        )
    }
}

export default ProductListContainer
