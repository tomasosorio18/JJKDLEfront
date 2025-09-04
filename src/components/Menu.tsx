import { motion } from 'framer-motion';
import gojo from '../shared/icon/gojo.ico';
import sukuna from '../shared/icon/sukun.ico';
import kenjaku from '../shared/icon/ken.ico';

import sukunaMark from '../shared/icon/sukunamarkInv.png';

export const Menudle = () => {
  const menuItems = [
    {
      title: "GUESS THE CHARACTER",
      href: "/app/dle",
      icon: gojo,
      description: "Test your knowledge of Jujutsu Sorcerers",
      color: "from-blue-600 to-purple-600",
      borderColor: "border-blue-500",
      hoverColor: "hover:shadow-blue-500/50"
    },
    {
      title: "GUESS WITH A PICTURE",
      href: "/app/picture",
      icon: sukuna,
      description: "Identify sorcerers or curses from their pictures",
      color: "from-red-600 to-pink-600",
      borderColor: "border-red-500",
      hoverColor: "hover:shadow-red-500/50"
    },
    {
      title: "GUESS WITH A VOICE",
      href: "/app/voice",
      icon: kenjaku,
      description: "Recognize sorcerers or curses by their voice",
      color: "from-green-600 to-teal-600",
      borderColor: "border-green-500",
      hoverColor: "hover:shadow-green-500/50"
    }
  ];

  return (
   

      <motion.div 
        className="bg-gray-800 text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center mx-auto w-full max-w-4xl border-2 border-purple-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
           
     <motion.div
              
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 * 0.1, duration: 0.5 }}
            >  <div className="w-12 h-12 opacity-70 mb-4 mt-4">
        <img src={sukunaMark } alt="Domain Expansion" className="w-full h-full" />
      </div>

            </motion.div>
    
       
  
        <motion.h2 
          className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          WELCOME TO JUJUTSU GUESS
        </motion.h2>
        
        <motion.p 
          className="text-lg text-purple-300 mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Channel your cursed energy and test your knowledge
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
                
              <motion.a
                href={item.href}
                className={`group bg-gray-900 h-80 w-full rounded-xl flex flex-col items-center justify-center p-6 border-2 ${item.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-lg ${item.hoverColor}`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icono con efecto de gradiente */}
                <div className={``}>
                  <img 
                    src={item.icon} 
                    alt="" 
                    className="w-32 h-32 transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>

                {/* Título */}
                <h3 className={`text-xl font-bold mb-2 text-center bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-400 text-center text-sm mb-4">
                  {item.description}
                </p>

                {/* Indicador de hover */}
                <div className={`w-8 h-1 bg-gradient-to-r ${item.color} rounded-full mt-2 group-hover:w-16 transition-all duration-300`}></div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Footer decorativo */}
        <motion.div 
          className="mt-12 text-center text-purple-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p>Choose your guessing technique and prove your worth as a Jujutsu Sorcerer</p>
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

  );
};