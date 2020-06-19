export const fetchProfile = () =>
    fetch("http://localhost:8080/api/profile", {
        method: 'GET',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })


export const login = () =>
    fetch("http://localhost:8080/api/login", {
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            type: this.state.type
        }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
