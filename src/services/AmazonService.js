

export const searchProductByTitle = (title) =>
    fetch("https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?country=US&keyword=iphone"
        .replace('iphone', title), {
        "method": "GET",
            "headers": {
            "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
                "x-rapidapi-key": "d84db33b52msh35262445c420772p1ec9bfjsn0aa4c6bef814"
        }
    })
    .then(response => {
        return response.json()
    })
        .catch(err => {
            console.log(err);
        });

export const findProductByASIN = (asin) => {
    return fetch("https://amazon-product-reviews-keywords.p.rapidapi.com/product/details?country=US&asin=B01LWAM0V1"
        .replace('B01LWAM0V1', asin), {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
            "x-rapidapi-key": "d84db33b52msh35262445c420772p1ec9bfjsn0aa4c6bef814"
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err);
        });
}


export default {
    searchProductByTitle,
    findProductByASIN
}