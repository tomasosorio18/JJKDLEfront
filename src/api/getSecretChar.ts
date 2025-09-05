import axios from "axios"

export const getSecretChar = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/game/secret`)
        console.log("secretttt",response.data.personaje)
        return response.data.personaje

    } catch (error) {
        console.error("Error fetching secret characters")
        throw error
    }
}