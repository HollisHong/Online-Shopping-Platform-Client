export const fetchProfile = () =>
    fetch("http://localhost:8080/api/profile", {
        method: 'GET',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })


