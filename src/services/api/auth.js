const BASE_URL = "http://localhost:8000";

export async function Authentification(data) {
    return fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: data.username,
            password: data.password,
        }),
    })
        .then((response) => response.json())

        .catch((error) => {
            console.log(error);
        });
}
