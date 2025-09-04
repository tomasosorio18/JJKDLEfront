import axios from "axios";

export const getAllCharacters = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:3000/api/personajes');
        
        return response.data;
    } catch (error) {
        console.error("Error fetching characters:", error);
        throw error;
    }
}
