import axios from "axios";

export const guessPictureApi = async ( id: number) => {
    try {
        console.log("guessPictureApi")
        console.log("ID que voy a enviar:", id, typeof id);
        const response = await axios.post(`${import.meta.env.API_URL}/game/guessPicture`, { id: id });

        return response.data;
    } catch (error) {
        console.error("Error fetching characters:", error);
        throw error;
    }
}