import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { toast, ToastContainer } from "react-toastify";
import type { Character } from "../types/d.type";

import { FlameButton } from "./FlameButton";

interface InputDLEProps {
  characters: Character[];
  selected: Character | null;
  setselected: (character: Character | null) => void;
  onGuess?: () => void;
  guessedIds?: number[];
}

export const Buscador: React.FC<InputDLEProps> = ({ characters, selected, setselected, onGuess, guessedIds = [] }) => {
  const [query, setQuery] = useState("");
  const notifyError2 = () => toast.error('Character already guessed!')
  const notifyError1 = () => toast.error('No character selected!')

  useEffect(() => {
  }, [characters]);

  const filteredCharacters =
    query === ""
      ? characters
      : characters.filter((p) =>
          p.name.toLowerCase().split(" ").some(word => word.startsWith(query.toLowerCase())) && !guessedIds.includes(p.id)
        )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) {
      console.log("No character selected")
      notifyError1();
      return;
    }
      
    if (guessedIds.includes(selected.id)) {
      console.log("Character already guessed");
      notifyError2();
      return;
    }

    setselected(selected);
    if (onGuess) onGuess();  
  }

 return (
    <>
      <form onSubmit={onSubmit}>
        <Combobox value={selected} onChange={setselected}>
          <div className="relative w-72">
            <Combobox.Input
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 z-40 bg-gray-800 text-white placeholder-gray-400"
              onChange={handleSearch}
              displayValue={(personaje: Character | null) => (personaje ? personaje.name : "")}
              placeholder="Search for a sorcerer..."
              autoComplete="off"
            />

            {/* 🔥 Siempre montado, oculto con hidden */}
            <Combobox.Options
              
              className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md text-white bg-gray-800 border border-purple-500 shadow-lg z-50 transition
                ${filteredCharacters.length === 0 ? "hidden" : "block"}`}
            >
              {filteredCharacters.map((character) => (
                <Combobox.Option
                  key={character.id}
                  value={character}
                  className={({ active, disabled }) =>
                    `cursor-pointer select-none px-4 py-2 ${
                      disabled
                        ? "opacity-50 cursor-not-allowed"
                        : active
                        ? "bg-purple-600 text-white"
                        : "text-gray-100"
                    }`
                  }
                >
                  {character.name}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </div>
        </Combobox>

        <div className="flex justify-center mt-4 items-center">
          <FlameButton />
        </div>
      </form>
      <ToastContainer theme="dark" />
    </>
  );
}