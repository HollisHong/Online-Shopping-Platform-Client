(function () {
    let products = []

    let $ProductRows
    let $ProductRowsTemplate
    let $searchTitleFld
    let $searchBtn
    let $ProductTitleDetail, $ProductCreatedAtDetail
    // let $ProductHighDetail, $ProductLowDetail
    let service = new onlineShopClient()


    function renderDetails(details) {
        $ProductTitleDetail.html(details.title)
        $ProductCreatedAtDetail.html(details.createdAt)
        // $ProductHighDetail.html(details.highestPricing)
        // $ProductLowDetail.html(details.lowestPricing)
    }

    function searchProductByID(event) {
        const trDOM = event.currentTarget
        const $tr = $(trDOM)
        const ID = $tr.attr('id')
        service.findProductByID(ID)
            .then(function (results) {
                const details = results
                console.log(details)
                renderDetails(details)
            })
    }

    function renderProducts() {
        $ProductRows.empty()
        for(let p = 0; p < products.length; p++) {
            const product = products[p]
            const $productRow = $ProductRowsTemplate.clone()
            $productRow.attr('id', product.ASIN).click(searchProductByID)
            $productRow.find('.product-title').html(product.title)
            $productRow.find('.product-price').html(product.price)
            $productRow.find('.product-poster').attr('src', product.imageUrl)
            $ProductRows.append($productRow)
        }
    }

    function findCoke() {
        service.findCoke()
            .then(function(results) {
                products = results
                renderProducts()
            })
    }

    function searchProductByTitle() {
        const title = $searchTitleFld.val()
        service.searchProductByTitle(title)
            .then(function (results) {
                products = results
                renderProducts()
            })
    }

    function main() {
        $ProductRows = $('.product-rows')
        $ProductRowsTemplate = $('.product-row-template').clone()
        $searchTitleFld = $('.product-search-title')
        $searchBtn = $('.product-search-btn')
            .click(searchProductByTitle)

        $ProductTitleDetail = $('.product-title-detail')
        $ProductCreatedAtDetail = $('.product-createdAt-detail')
        // $ProductHighDetail =$('.product-high-price-detail')
        // $ProductLowDetail =$('.product-low-price-detail')


        findCoke()
        // renderProducts()
    }

    $(main)

}) ()