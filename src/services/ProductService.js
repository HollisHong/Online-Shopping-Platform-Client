const createProduct = (product) =>
    fetch("http://localhost:8080/api/products", {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateProduct = (productId, product) =>
    fetch("http://localhost:8080/api/products/" + productId, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteProduct = (productId) =>
    fetch("http://localhost:8080/api/products/" + productId, {
        method: 'DELETE'
    })
        .then(response => response.json())

const findProductById = (productId) =>
    fetch("http://localhost:8080/api/products/" + productId)
        .then(response => response.json())

const findAllProducts = () =>
    fetch("http://localhost:8080/api/products")
        .then(response => response.json())

export default {
    findAllProducts,
    findProductById,
    deleteProduct,
    updateProduct,
    createProduct
}
