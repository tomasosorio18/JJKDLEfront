import { useEffect, useState } from "react";
import { getCharacterClue } from "../../api/characterClue";

interface clueProps {
    setMoreClues: React.Dispatch<React.SetStateAction<boolean>>;
    moreClues: boolean;
}
interface clues {
    personality: string;
    appearance: string;
    abilities: {
        special_trait: string;
        innate_technique: string;
        description: string;
    }
}
export const Clue = ({ setMoreClues, moreClues }: clueProps) =>{
    const [clues, setClues] = useState<clues | null>(null);

 const getClue = async () => {
   try {
     const responseClue = await getCharacterClue();
     setClues(responseClue);
     console.log("Clue fetched successfully:", responseClue);
   } catch (error) {
     console.error("Error fetching clue:", error);
   }
 }
    useEffect(() => {
        getClue();
    }, []);

return(<div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto w-fit flex flex-col space-y-4 justify-center items-center mt-4">
        <h2 className="text-xl font-bold mb-4">First Clue</h2>
        <p className="text-lg">Here is your clue!</p>
         {clues && (
                <div className="flex flex-col space-y-2 bg-gray-600">
                    <h1><b>Personality:</b> {clues.personality}</h1>
                    <h1><b>Appearance:</b> {clues.appearance}</h1>
                </div>
            )}
            {moreClues && clues &&(
                <div className="flex flex-col space-y-2 bg-gray-600">
                    <h1><b>Special trait:</b> {clues.abilities.special_trait}</h1>
                    <h1><b>Innate Technique:</b> {clues.abilities.innate_technique}</h1>
                    <h1><b>Description:</b> {clues.abilities.description}</h1>

                </div>
            )}
            { moreClues === false && (
               <button className="bg-gray-400 text-gray-800 font-bold px-4 py-2 rounded-md cursor-pointer transition hover:scale-110 hover:bg-gray-500" type="button" onClick={() => setMoreClues(!moreClues)}> Get more clues!</button>
            )}
       
      </div>)
}