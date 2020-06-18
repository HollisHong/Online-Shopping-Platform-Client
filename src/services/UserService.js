export const fetchProfile = () =>
    fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/profile", {
        method: 'POST',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })