import { motion } from "motion/react";

interface SpinnerProps {
  isLittle?: boolean
}
export const Spinner: React.FC<SpinnerProps> = ({ isLittle}) => {
  return (
      <div className={`flex items-center justify-center h-screen`}>
  <motion.div
      className={`${isLittle ? "w-6 h-6" : "w-20 h-20" } border-8 border-t-purple-500 border-gray-200 rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  
      </div>
 
 
  );
};