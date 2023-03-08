import {useReducer} from "react";

const BASE_URL = "http://localhost:8000";

export async function Authentification(credentials) {
    return fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })
        .then((response) => response.json());
}
