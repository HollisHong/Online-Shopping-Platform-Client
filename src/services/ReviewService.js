const createReview = (pid, review) =>
    fetch(`http://localhost:8080/api/products/${pid}/reviews`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


const findReviewsByProductId = (pid) =>
    fetch(`http://localhost:8080/api/products/${pid}/reviews`,
        {
            method: 'GET',
        })
        .then(response => response.json())


export default {
    createReview,
    findReviewsByProductId
}
