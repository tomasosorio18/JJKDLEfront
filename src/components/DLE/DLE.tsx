import { Buscador } from "../Buscador";
import { Winner } from "../Winner";
import { Clue } from "./Clue";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import gojo from '../../shared/icon/gojochibi.png'
import fire from '../../shared/icon/fire.png'
import { useCharacters } from "../../hooks/useCharacters";
import { useHandleGuess } from "../../hooks/useHandleGuesser";
import {useState } from "react";

import sukunaMark from '../../shared/icon/sukunamarkInv.png';
import { useScrollDown } from "../../hooks/useScrollDown";
import { Spinner } from "../Spinner";

import { usePreviousRecord } from "../../hooks/usePreviousRecord";


export const DleGuess = () => {
  const [firstClue, setFirstClue] = useState<boolean>(false);
  const [moreClues, setMoreClues] = useState<boolean>(false);
  const { width, height } = useWindowSize()
  const { isLoading, characters, selected, setSelected } = useCharacters();
  const {guesses, hasWon, hasLose, winner,handleGuess} = useHandleGuess({selected,type: "character"});
  const bottomRef = useScrollDown([hasWon, hasLose, winner]);
  const previousData = usePreviousRecord();
  console.log("Previous Record Data:", previousData);
  const greenOrRed = (flag?: boolean | null) => (flag ? "text-green-400" : "text-red-400");


  if (isLoading) {
    return (
      <Spinner />
    );
  }
  return (
    <>
      <div className="relative bg-gray-900 text-white p-8 rounded-xl shadow-2xl max-w-md mx-auto w-fit flex flex-col justify-center items-center border-2 border-purple-600 overflow-visible">

        <div className="absolute top-3 left-3 w-8 h-8 opacity-80">
          <img src={sukunaMark} alt="Cursed Mark" className="w-full h-full" />
        </div>
        <div className="absolute bottom-3 right-3 w-8 h-8 opacity-80 rotate-180">
          <img src={sukunaMark} alt="Cursed Mark" className="w-full h-full" />
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 opacity-80">
          <img src={sukunaMark} alt="Sukuna Mark" className="w-full h-full" />
        </div>
         <div className="absolute bottom-3 left-3 w-8 h-8 opacity-800 rotate-180">
          <img src={sukunaMark} alt="Sukuna Mark" className="w-full h-full" />
        </div>
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          GUESS THE SORCERER
        </h2>
        <p className="text-lg font-semibold mb-1">Enter a first guess.</p>
        <p className="text-sm font-semibold text-purple-300 mb-3"> 
          Channel your cursed energy to guess!
        </p>
                <p className="text-xs text-gray-300 mb-3"> 
            The character from yesterday was:{" "}
            <span className="text-yellow-400 font-bold">
              {previousData?.records?.CharacterName ?? "No hay registros."}
            </span>
          </p>
        <Buscador 
          characters={characters} 
          selected={selected} 
          setselected={setSelected} 
          onGuess={handleGuess} 
          guessedIds={guesses.map(g => g.character.id)} 
        />
        
        {guesses.length >= 2 && firstClue === false && (
          <button 
            type="button" 
            onClick={() => setFirstClue(true)} 
            className="mt-4 bg-purple-700 text-white font-bold px-5 py-2 rounded-md cursor-pointer transition-all hover:scale-110 hover:bg-purple-600 shadow-lg hover:shadow-purple-500/50"
          > 
            Reveal Clue
          </button>
        )}
      </div>
      
      {(firstClue || guesses.length === 5) && (
        <Clue setMoreClues={setMoreClues} moreClues={moreClues} />
      )}
              {guesses.length > 0 && (  
      <div className="relative flex flex-col items-center mt-6 bg-gray-900 rounded-xl shadow-xl border border-purple-700 overflow-hidden p-2">
 
        <div className="absolute inset-0 opacity-10 pattern-japanese-paper"></div>
        

          <div className="mt-1 container mx-auto p-2 rounded-xl relative">
            <div className="flex flex-col justify-center items-center mb-2">
              <h3 className="font-bold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {guesses.length} Cursed Techniques Used! 
                <img src={fire} alt="fire" className="inline-block w-21 h-21 ml-2" />
                <img src={gojo} alt="Gojo" className="inline-block w-21 h-21 ml-2" />
              </h3>
              <h3 className="font-semibold text-purple-300 text-sm mt-1"> 
                Use {7 - guesses.length} more techniques to unlock a clue!
              </h3> 
              <h3 className="text-lg font-bold mt-4 text-white">Sorcerer History:</h3>
            </div>
         
            <div className="overflow-x-auto rounded-lg border-2 border-purple-800 shadow-lg">
              <table className="min-w-full text-center table-fixed rounded-xl">
                <thead className="bg-gradient-to-r from-purple-800 to-blue-800 text-white">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Age</th>
                    <th className="p-3">Gender</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Affiliation</th>
                    <th className="p-3">Grade</th>
                    <th className="p-3">Species</th>
                    <th className="p-3">RCT</th>
                    <th className="p-3">Domain</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 font-semibold divide-y divide-purple-900">
                  {guesses.map((g, rowIdx) => {
                    const r = g.result;
                    const ageText = Array.isArray(g.character.age) ? g.character.age[0] : g.character.age ?? "???";
                    const ageSuffix = r?.ageDifference === "igual" ? "" : r?.ageDifference === null ? "?" : r?.ageDifference === "menor" ? "↑" : "↓";
                    const gradeSuffix = r?.gradeDifference === "igual" ? "" : r?.gradeDifference === null ? "?" : r?.gradeDifference === "menor" ? "↑" : "↓";

                    const cells = [
                      { key: "name",     content: g.character.name,                              className: greenOrRed(Boolean(r?.name)) },
                      { key: "age",      content: `${ageText} ${ageSuffix}`,                     className: greenOrRed(Boolean(r?.age)) },
                      { key: "gender",   content: g.character.gender ?? "Unknown",               className: greenOrRed(Boolean(r?.gender)) },
                      { key: "status",   content: g.character.status ?? "???",                   className: greenOrRed(Boolean(r?.status)) },
                      { key: "group",    content: g.character.group ?? "None",                   className: greenOrRed(Boolean(r?.group)) },
                      { key: "grade",    content: `${g.character.grade ?? "None"} ${gradeSuffix}`,className: greenOrRed(Boolean(r?.grade)) },
                      { key: "species",  content: g.character.species ?? "—",                    className: greenOrRed(Boolean(r?.species)) },
                      { key: "rct",      content: g.character.abilities?.has_rct ? "Yes" : "No", className: greenOrRed(Boolean(r?.RCT)) },
                      { key: "domain",   content: g.character.abilities?.has_domain ? "Yes" : "No",className: greenOrRed(Boolean(r?.domain_expansion)) }
                    ];

                    return (
                      <tr key={rowIdx} className="hover:bg-purple-900/30 transition-colors">
                        {cells.map((cell, cellIdx) => {
                          const delaySeconds = (cellIdx * 0.10) + (rowIdx * 0.06);
                          return (
                            <td
                              key={cell.key}
                              className={`${cell.className} p-3 animate-fadeIn border-r border-purple-900 last:border-r-0`}
                              style={{ animationDelay: `${delaySeconds}s` }}
                            >
                              {cell.content}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
            </div>
        )}
    
     
     {(hasWon || hasLose) && winner && (
       <>
        <Winner winner={winner} guesses={guesses} hasLose={hasLose} />
        {hasLose === false && hasWon === true && (
          <Confetti
            width={width}
            height={height}
            colors={['#8B5CF6', '#EC4899', '#6366F1', '#10B981']}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 9999,
              pointerEvents: "none"
            }}
          />
        )}
         <div ref={bottomRef}></div>
       </>
     )}
    </>
  );
};