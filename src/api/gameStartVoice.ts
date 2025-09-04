import axios from "axios";

export const gameStartVoice = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:3000/game/startVoice');
        return response.data;
    } catch (error) {
        console.error("Error starting game:", error);
        throw error;
    }
}