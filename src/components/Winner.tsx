import type { GuessItem } from "../types/d.type";
import getogojo from '../shared/icon/getogojo.png'
import sukunaFinger from '../shared/icon/finger.png';
import domainExpansion from '../shared/icon/finger2.png';
import { motion } from 'framer-motion';

interface WinnerProps{
    winner: GuessItem | null;
    guesses: GuessItem[];
    hasLose: boolean;
}


const CursedEnergyParticle = () => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 2;
  const randomDuration = 3 + Math.random() * 4;
  const randomSize = 3 + Math.random() * 4;
  const colors = ['#8B5CF6', '#EC4899', '#6366F1', '#10B981', '#F43F5E'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${randomX}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        backgroundColor: randomColor,
      }}
      initial={{ 
        y: -20,
        opacity: 0 
      }}
      animate={{ 
        y: [0, -100, -200],
        x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1.2, 0.8],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export const Winner = ({ winner, guesses, hasLose }: WinnerProps) => {
    if (!winner || guesses.length === 0) return null;
   const API_URL = import.meta.env.VITE_API_URL;
   
    return (
        <div className="relative bg-gray-900 text-white p-6 rounded-xl shadow-2xl max-w-md mx-auto mt-6 flex flex-col justify-center items-center border-2 border-purple-600 overflow-hidden">
         
            {!hasLose && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(30)].map((_, i) => (
                        <CursedEnergyParticle key={i} />
                    ))}
                </div>
            )}
            
       
            <div className="absolute top-2 right-2 w-10 h-10 opacity-20">
                <img src={sukunaFinger} alt="Sukuna Finger" className="w-full h-full" />
            </div>
            <div className="absolute bottom-2 left-2 w-8 h-8 opacity-20">
                <img src={domainExpansion} alt="Domain Expansion" className="w-full h-full" />
            </div>
            
            <motion.h2 
                className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {hasLose ? "DOMAIN EXPANSION FAILED!" : "DOMAIN EXPANSION SUCCESSFUL!"}
            </motion.h2>

            <motion.p 
                className="text-center mt-2 text-purple-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                The secret sorcerer was: <span className="font-bold text-white">{winner.character.name}</span>
            </motion.p>

            <motion.div 
                className="flex justify-center items-center mt-4 p-2 border-2 border-purple-500 rounded-lg bg-gray-800"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <img 
                    src={`${API_URL}${winner.character.image_url}`} 
                    alt={winner.character.name} 
                    className="rounded-md max-h-48 shadow-lg"
                />
            </motion.div>

            {!hasLose ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {guesses.length === 1 ? (
                        <div className="text-center mt-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500">
                            <h1 className="font-bold text-xl text-green-400 text-center ">
                                PERFECT DOMAIN EXPANSION!
                            </h1>
                            <p className="font-semibold mt-2 text-green-300">
                                "Throughout Heaven and Earth, you alone are the honored one!"
                            </p>
                            <div className="mt-2 text-yellow-400 text-sm">
                                ✦ Unlimited Cursed Energy ✦ Six Eyes ✦
                            </div>
                        </div>
                    ) : guesses.length <= 3 ? (
                        <div className="text-center mt-4 p-4 bg-blue-900/30 rounded-lg border border-blue-500">
                            <h1 className="font-bold text-xl text-blue-400">
                                IMPRESSIVE CURSED TECHNIQUE!
                            </h1>
                            <p className="font-semibold mt-2 text-blue-300">
                                "You guessed it right, stand proud, you're strong!"
                            </p>
                            <div className="mt-2 text-yellow-400 text-sm">
                                ✦ Grade 1 Sorcerer ✦ High Skill ✦
                            </div>
                        </div>
                    ) : guesses.length >= 5 && guesses.length < 7 ? (
                        <div className="text-center mt-4 p-4 bg-green-900/30 rounded-lg border border-green-500">
                            <h1 className="font-bold text-xl text-green-400">
                                SOLID JUTSU SHIKIGAMI!
                            </h1>
                            <p className="font-semibold mt-2 text-green-300">
                                "You guessed it right, keep it up, keep it up!"
                            </p>
                            <div className="mt-2 text-yellow-400 text-sm">
                                ✦ Semi-Grade 1 ✦ Developing Potential ✦
                            </div>
                        </div>
                    ) : (
                        <div className="text-center mt-4 p-4 bg-yellow-900/30 rounded-lg border border-yellow-500">
                            <h1 className="font-bold text-xl text-yellow-400">
                                BEGINNER'S LUCK!
                            </h1>
                            <p className="font-semibold mt-2 text-yellow-300">
                                "You guessed it right! Got a lot to learn, but you're on the right path!"
                            </p>
                            <div className="mt-2 text-yellow-400 text-sm">
                                ✦ Grade 4 Sorcerer ✦ Raw Talent ✦
                            </div>
                        </div>
                    )}
                </motion.div>
            ) : (
                <motion.div 
                    className="text-center mt-4 p-4 bg-red-900/30 rounded-lg border border-red-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <img src={getogojo} alt="Gojo disappointed" className="mx-auto w-16 h-16 mb-2" />
                    <h1 className="font-bold text-xl text-red-400">
                        REVERSE CURSED TECHNIQUE FAILED!
                    </h1>
                    <p className="font-semibold mt-2 text-red-300">
                        "You were defeated... maybe you should exorcise yourself first!"
                    </p>
                    <div className="mt-2 text-yellow-400 text-sm">
                        ✦ Cursed Spirit ✦ Needs Training ✦
                    </div>
                </motion.div>
            )}

            <motion.div 
                className="mt-4 p-3 bg-gray-800 rounded-lg border border-purple-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <p className="text-center">
                    Total cursed techniques used: <b className="text-purple-400">{guesses.length}</b>
                </p>
            </motion.div>

            <motion.a
                href="/app/inicio"
                className="mt-4 bg-gradient-to-r from-purple-700 to-pink-700 text-white px-5 py-2 rounded-lg font-bold cursor-pointer transition-all duration-200 hover:scale-105 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
            >
                RETURN TO JUJUTSU HIGH
            </motion.a>
        </div>
    );
};