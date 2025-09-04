import { createContext, useContext, useEffect, useState } from "react";
import { gameStart } from "../api/gameStart";
import { getSecretChar } from "../api/getSecretChar";

interface StartState {
  id: number;
  voiceId: number;
  voice: string;
  pictureId:number;
  picture: string;
}

interface StartContextType {
  startData: StartState;
  isLoading: boolean;
}

const startContext = createContext<StartContextType | undefined>(undefined);

export const useStart = () => {
  const context = useContext(startContext);
  if (!context) {
    throw new Error("useStart must be used within a StartProvider");
  }
  return context;
};

export const StartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [startData, setStartData] = useState<StartState>({ id: 0, voiceId: 0, voice: "",pictureId: 0, picture: ""});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initGame = async () => {
    try {
      setIsLoading(true);
      await gameStart(); // prepara la partida en backend
      const response = await getSecretChar(); // obtiene el personaje secreto
  
      setStartData({
        id: response.GuessCharacterId,
        voiceId: response.GuessVoiceId,
        voice: response.Voice,
        pictureId:response.GuessPictureId,
        picture: response.Picture
      });
    } finally {
      setIsLoading(false);
    }
  };

  // 🔹 Solo se ejecuta una vez al montar → carga el personaje diario
  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
  
  }, [startData]);

  return (
    <startContext.Provider value={{ startData, isLoading }}>
      {children}
    </startContext.Provider>
  );
};
