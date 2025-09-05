import axios from "axios";

export const guessVoiceApi = async ( id: number) => {
    try {
        console.log("guessVoiceApi")
        console.log("ID que voy a enviar:", id, typeof id);
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/game/guessVoice`, { id: id });

        return response.data;
    } catch (error) {
        console.error("Error fetching characters:", error);
        throw error;
    }
}