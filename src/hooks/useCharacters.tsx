import { useEffect, useState } from "react";
import { getAllCharacters } from "../api/getAllCharacters";
import type { Character } from "../types/d.type";

export const useCharacters = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selected, setSelected] = useState<Character | null>(null);
   useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const chars = await getAllCharacters();
        setCharacters(chars);
        
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacters();
  }, []);
  return { isLoading, characters, selected, setSelected };
}