import { Buscador } from "../Buscador";
import { Voz } from "./Voz";
import { useCharacters } from "../../hooks/useCharacters";
import { useHandleGuess } from "../../hooks/useHandleGuesser";
import { Winner } from "../Winner";
import Confetti from 'react-confetti'
import { useWindowSize } from "react-use";
import { useStart } from "../../context/startContext";
import { Spinner } from "../Spinner";
import { motion } from 'framer-motion';

import sukunaMark from '../../shared/icon/sukunamarkInv.png';
import { useScrollDown } from "../../hooks/useScrollDown";
import { usePreviousRecord } from "../../hooks/usePreviousRecord";

export const VoiceGuesser = () => {
  const { width, height } = useWindowSize()
  const { startData, isLoading } = useStart()
  const { characters, selected, setSelected } = useCharacters();
  const { guesses, hasWon, hasLose, winner, handleGuess } = useHandleGuess({ selected, type: "voice" });
  const charactersWithVoice = characters.filter(char => char.voice && char.voice !== "None");
  const previousData = usePreviousRecord();
 const bottomRef = useScrollDown([hasWon, hasLose, winner]);
  if (isLoading) {
    return ( 
      <div className="flex justify-center items-center min-h-screen">
        <Spinner isLittle={false}/>
      </div>
    )
  }

  return (
    <>
      <motion.div 
        className="relative bg-gray-900 text-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto w-full flex flex-col justify-center items-center border-2 border-purple-600 overflow-visible"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <div className="absolute top-3 left-3 w-10 h-10 opacity-80">
          <img src={sukunaMark} alt="Cursed Mark" className="w-full h-full" />
        </div>
        <div className="absolute bottom-3 right-3 w-10 h-10 opacity-80 rotate-180">
          <img src={sukunaMark} alt="Cursed Mark" className="w-full h-full" />
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 opacity-80">
          <img src={sukunaMark} alt="Sukuna Mark" className="w-full h-full" />
        </div>
         <div className="absolute bottom-3 left-3 w-10 h-10 opacity-800 rotate-180">
          <img src={sukunaMark} alt="Sukuna Mark" className="w-full h-full" />
        </div>
        
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          GUESS THE VOICE
        </h2>
        
        <p className="text-lg font-semibold text-purple-300 mb-1">Listen to the curse/sorcerer</p>
        <p className="text-sm text-gray-400 mb-6">Channel your cursed energy to identify the voice!</p>
        <p className="text-xs  text-gray-300 mb-3"> 
          The character from yesterday was: <span className="text-yellow-400 font-bold">{previousData ? previousData.records.VoiceCharacterName : "Loading..."}</span>
        </p>
    
        <div className="mb-8 w-full max-w-md">
          <Voz src={startData.voice} />
        </div>
          
        <div className="w-full max-w-md flex justify-center ">
          <Buscador 
            characters={charactersWithVoice} 
            guessedIds={guesses.map(g => g.character.id)} 
            onGuess={handleGuess} 
            selected={selected} 
            setselected={setSelected}
          />
        </div>
      </motion.div>

      {hasWon === false && guesses.length > 0 && (
        <motion.div 
          className="mt-8 flex flex-col items-center gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-purple-300 bg-purple-900/30 px-4 py-2 rounded-lg border border-purple-600">
            Cursed Techniques Attempted: {guesses.length}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {guesses.map((g, rowIdx) => (
              <motion.div 
                key={rowIdx} 
                className="bg-gray-800 p-4 rounded-xl border-2 border-red-600 flex flex-col items-center gap-2 animate-fadeIn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: rowIdx * 0.1, duration: 0.5 }}
              >
                <img
                  className="w-20 h-20 rounded-full border-2 border-red-500 object-cover"
                  src={g.character.profile_url}
                  alt={g.character.name}
                />
                <div className="text-center">
                  <h4 className="font-bold text-white text-sm">{g.character.name}</h4>
                  <p className="text-red-400 text-xs">Incorrect sorcerer</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      
      {(hasWon || hasLose) && winner && (
        <>
          <Winner winner={winner} guesses={guesses} hasLose={hasLose} />
          {hasWon === true && (
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