import axios from "axios";

export const gameStart = async () => {
    try {
        const response = await axios.get(`${import.meta.env.API_URL}/game/start`);
        return response.data;
    } catch (error) {
        console.error("Error starting game:", error);
        throw error;
    }
}