import axios from "axios"

export const getPostsApi = async () => 
await axios.get(process.env.REACT_APP_URL + "/posts", {
    headers: {
        "Content-Type": "application/json",
    },
});