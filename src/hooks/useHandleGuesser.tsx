import { useState } from "react";
import type { Character, GuessItem, GuessResult } from "../types/d.type";
import { guessApi } from "../api/guess";
import { guessVoiceApi } from "../api/guessVoice"; // tu nuevo endpoint
import { guessPictureApi } from "../api/guessPicture";

type GuessType = "character" | "voice" | "picture";

export const useHandleGuess = ({
  selected,
  type = "character"
}: {
  selected: Character | null;
  type?: GuessType;
}) => {
  const [guesses, setGuesses] = useState<GuessItem[]>([]);
  const [hasWon, setHasWon] = useState(false);
  const [hasLose, setHasLose] = useState(false);
  const [winner, setWinner] = useState<GuessItem | null>(null);
 
  const handleGuess = async () => {
    if (!selected) {
      console.warn("No character selected.");
      return;
    }

    try {
      // ✅ Escoger API según tipo
      const apiFn = type === "voice" ? guessVoiceApi : type === "picture" ? guessPictureApi: guessApi;
      const response = await apiFn(selected.id);

      const result: GuessResult =
        response.resultado ?? response.result ?? null;
      const wonFromApi = !!(
        response.haswon ?? response.has_won ?? response.hasWon
      );

      const newGuess: GuessItem = { character: selected, result };

      setGuesses((prev) => {
        const next = [...prev, newGuess];
     

        if (next.length >= 7 && !wonFromApi) {
          setHasLose(true);
          setWinner(newGuess);
          setHasWon(false);
        }

        return next;
      });

      setHasWon(wonFromApi);

      if (wonFromApi) {
        setWinner(newGuess);
       
      }
    } catch (err) {
      console.error("Error calling guessApi:", err);
    }
  };

  return { guesses, hasWon, hasLose, winner, handleGuess };
};
