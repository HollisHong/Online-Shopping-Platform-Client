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