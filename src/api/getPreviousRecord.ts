import axios from "axios";

export const getPreviousRecord = async () =>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/game/previousRecords`);
        console.log("Previous record response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching previous record:", error);
        throw error;
    }
}