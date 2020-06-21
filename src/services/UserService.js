export const fetchProfile = () =>
    fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/profile", {
        method: 'GET',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })


export const findUserByID = (uid) =>
    fetch(`https://cs4550-20su1-group17-server.herokuapp.com/api/users/${uid}`, {
    method: 'GET',
    credentials: "include"
})
    .then(response => {
        return response.json()
    })

export const logout = () => {
    fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/logout", {
        method: 'POST',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })
}

export const updateLikes = (id, user) => {
    fetch(`https://cs4550-20su1-group17-server.herokuapp.com/api/profile/${id}/update`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => {
        return response.json()
    })
}