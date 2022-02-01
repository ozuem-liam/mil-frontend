import axios from "axios"

export const getUsersApi = async () => 
await axios.get(process.env.REACT_APP_URL + "api/users", {
    headers: {
        "Content-Type": "application/json",
    },
});