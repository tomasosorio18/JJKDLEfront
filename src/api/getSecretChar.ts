import axios from "axios"

export const getSecretChar = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:3000/game/secret")
        console.log(response.data.personaje)
        return response.data.personaje

    } catch (error) {
        console.error("Error fetching secret characters")
        throw error
    }
}