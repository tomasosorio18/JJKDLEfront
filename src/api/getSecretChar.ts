import axios from "axios"

export const getSecretChar = async () => {
    try {
        const response = await axios.get(`${import.meta.env.API_URL}/game/secret`)
        console.log(response.data.personaje)
        return response.data.personaje

    } catch (error) {
        console.error("Error fetching secret characters")
        throw error
    }
}