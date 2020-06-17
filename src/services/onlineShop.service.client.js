function onlineShopClient() {
    this.searchProductByTitle = searchProductByTitle
    this.findCoke = findCoke
    this.findProductByID = findProductByID


    function searchProductByTitle(title) {
        return fetch("https://google-shopping.p.rapidapi.com/search?language=EN&keywords=iphone&country=US".replace('iphone', title), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "google-shopping.p.rapidapi.com",
                "x-rapidapi-key": "d84db33b52msh35262445c420772p1ec9bfjsn0aa4c6bef814"
            }
        })
            .then(response => {
                console.log(response.json())
                return response.json()
            })
            .catch(err => {
                console.log(err);
            });
        // return fetch("https://amazon-price1.p.rapidapi.com/search?keywords=apple&marketplace=US".replace('apple', title), {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
        //         "x-rapidapi-key": "fc6203c746msh05c6757930968d3p10ea0ejsne3ad81739582"
        //     }
        // })
        //     .then(function (response) {
        //         return response.json()
        //     })
    }

    function findCoke() {
        return fetch("https://google-shopping.p.rapidapi.com/search?language=EN&keywords=iphone&country=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "google-shopping.p.rapidapi.com",
                "x-rapidapi-key": "d84db33b52msh35262445c420772p1ec9bfjsn0aa4c6bef814"
            }
        })
            .then(response => {
                return response.json()
            })
            .catch(err => {
                console.log(err);
            });
        // return fetch("https://amazon-price1.p.rapidapi.com/search?keywords=coke&marketplace=US", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
        //         "x-rapidapi-key": "fc6203c746msh05c6757930968d3p10ea0ejsne3ad81739582"
        //     }
        // })
        //     .then(function (response) {
        //         return response.json()
        //     })
    }

    function findProductByID(ID) {
        return fetch("https://amazon-price1.p.rapidapi.com/priceReport?asin=coke&marketplace=US".replace('coke', ID), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
                "x-rapidapi-key": "fc6203c746msh05c6757930968d3p10ea0ejsne3ad81739582"
            }
        })
            .then(function (response) {
                return response.json()
            })
    }


}