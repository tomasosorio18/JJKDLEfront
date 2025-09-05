import axios from "axios";

export const getAllCharacters = async () => {
    try {
        const response = await axios.get(`${import.meta.env.API_URL}/api/personajes`);

        return response.data;
    } catch (error) {
        console.error("Error fetching characters:", error);
        throw error;
    }
}
