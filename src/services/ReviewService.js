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

const updateReview = (rid, review) =>
    fetch(`http://localhost:8080/api/reviews/${rid}`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteReview = (rid) =>
    fetch(`http://localhost:8080/api/reviews/${rid}`, {
        method: 'DELETE'
    })
        .then(response => response.json())




export default {
    createReview,
    findReviewsByProductId,
    updateReview,
    deleteReview
}
