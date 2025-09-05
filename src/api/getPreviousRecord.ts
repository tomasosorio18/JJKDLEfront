import axios from "axios";

export const getPreviousRecord = async () =>{
    try {
        const response = await axios.get(`${import.meta.env.API_URL}/game/previousRecords`);
        return response.data;
    } catch (error) {
        console.error("Error fetching previous record:", error);
        throw error;
    }
}