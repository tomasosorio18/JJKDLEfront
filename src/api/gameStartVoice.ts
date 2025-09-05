import axios from "axios";

export const gameStartVoice = async () => {
    try {
        const response = await axios.get(`${import.meta.env.API_URL}/game/startVoice`);
        return response.data;
    } catch (error) {
        console.error("Error starting game:", error);
        throw error;
    }
}