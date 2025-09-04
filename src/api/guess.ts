import axios from "axios";

export const guessApi = async ( id: number) => {
    try {
        console.log("guessapi")
        console.log("ID que voy a enviar:", id, typeof id);
        const response = await axios.post('http://127.0.0.1:3000/game/guess', { id: id });
       
        return response.data;
    } catch (error) {
        console.error("Error fetching characters:", error);
        throw error;
    }
}