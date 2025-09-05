import axios from "axios"

export const getCharacterClue = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/game/clue`)
        return response.data;
    } catch (error) {
        console.error("Error fetching character clue:", error);
        throw error;
    }
}