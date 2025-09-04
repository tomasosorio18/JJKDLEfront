import React, { useState } from "react"
import { motion } from "motion/react"

interface pictureProps {
    startData: any
    attempts: any
    hasWon: boolean
}
export const Picture = React.memo(({ startData, attempts, hasWon }: pictureProps) => {
    const [revealed, setRevealed] = useState<boolean>(false)
    const blurClass = hasWon || attempts >= 7 ? "blur-none" : attempts >= 4 ? "blur-sm" : attempts >= 2 ? "blur-md" : "blur-lg"

    return (
        <>
        <div className="flex flex-col justify-center items-center">
             <img src={startData.picture} alt="secret image" draggable={false} className={`w-64 h-64 rounded-lg transition-all duration-500 pointer-events-none
             ${blurClass}
          ${revealed ? "grayscale-0" : "grayscale"} 
        `} />
          </div>
        <div className="flex flex-col justify-center items-center mt-4">
              <p className=" text-gray-400 mt-2">Every use of a Curse Technique reveals the pic a little!</p>
            <motion.div 
                className="mt-4 px-2 bg-gray-800 rounded-lg border border-purple-700 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                       <p className="font-semibold text-purple-200 items-center">Use a Curse Technique to reveal color</p>
            </motion.div>
              

            <label className="inline-flex items-center cursor-pointer mt-4">
                    
                    <input type="checkbox" value="" checked={revealed} onChange={() => setRevealed(!revealed)} className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 dark:peer-checked:bg-purple-600"></div>
                   
                </label>
        </div>
    
      
        </>
    )

})