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