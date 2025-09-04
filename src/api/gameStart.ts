import axios from "axios";

export const gameStart = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:3000/game/start');
        return response.data;
    } catch (error) {
        console.error("Error starting game:", error);
        throw error;
    }
}