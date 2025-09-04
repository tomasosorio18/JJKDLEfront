import axios from "axios";

export const getPreviousRecord = async () =>{
    try {
        const response = await axios.get("http://127.0.0.1:3000/game/previousRecords");
        return response.data;
    } catch (error) {
        console.error("Error fetching previous record:", error);
        throw error;
    }
}