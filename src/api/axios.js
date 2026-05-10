import axios from "axios"

export default axios.create({
    baseURL: "https://anyhand.co/",
    headers: {
        "Content-Type": "application/json"
    },
})