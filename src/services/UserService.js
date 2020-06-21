export const fetchProfile = () =>
    fetch("http://localhost:8080/api/profile", {
        method: 'GET',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })


export const findUserByID = (uid) =>
    fetch(`http://localhost:8080/api/users/${uid}`, {
    method: 'GET',
    credentials: "include"
})
    .then(response => {
        return response.json()
    })

export const logout = () => {
    fetch("http://localhost:8080/api/logout", {
        method: 'POST',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })
}

export const updateLikes = (id, user) => {
    fetch(`http://localhost:8080/api/profile/${id}/update`, {
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