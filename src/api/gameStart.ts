import axios from "axios";

export const gameStart = async () => {
    try {
        console.log("env", import.meta.env.VITE_API_URL)
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/game/start`);
        return response.data;
    } catch (error) {
        console.error("Error starting game:", error);
        throw error;
    }
}