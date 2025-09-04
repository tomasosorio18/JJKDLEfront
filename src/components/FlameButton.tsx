import { motion } from "framer-motion";
import { useState } from "react";
import cursedenergy from "../shared/icon/cursedEnergyFinal.png";

export function FlameButton() {
  const [hover, setHover] = useState(false);


  const CLIP_POLYGON_PERCENT =
"polygon(10.95% 61.39%, 11.62% 65.47%, 14.82% 71.20%, 19.49% 74.57%, 18.96% 75.38%, 23.10% 81.82%, 30.71% 86.72%, 32.31% 88.76%, 33.11% 91.22%, 31.91% 91.83%, 32.18% 92.54%, 33.51% 92.13%, 35.25% 93.56%, 35.25% 95.30%, 38.99% 94.48%, 46.06% 94.89%, 46.86% 93.77%, 38.99% 94.08%, 38.72% 92.24%, 42.06% 92.13%, 52.07% 88.87%, 53.54% 91.01%, 53.00% 91.73%, 54.21% 91.62%, 52.60% 88.66%, 55.01% 86.72%, 59.55% 86.01%, 59.55% 87.64%, 57.94% 87.84%, 57.41% 88.76%, 64.35% 87.74%, 64.49% 86.82%, 68.89% 85.60%, 67.82% 84.78%, 77.17% 81.00%, 74.23% 85.39%, 77.04% 83.55%, 76.90% 82.53%, 87.85% 78.24%, 88.25% 75.28%, 83.58% 73.24%, 81.58% 69.46%, 75.30% 65.37%, 74.77% 62.72%, 71.43% 62.21%, 71.83% 60.88%, 74.23% 59.55%, 75.70% 59.96%, 76.90% 55.98%, 82.11% 53.42%, 83.18% 52.09%, 79.04% 46.48%, 76.77% 40.45%, 71.16% 37.39%, 57.81% 34.32%, 53.54% 27.17%, 53.54% 23.90%, 57.14% 18.39%, 56.21% 17.67%, 58.08% 17.67%, 63.55% 14.61%, 65.42% 11.75%, 64.22% 6.64%, 62.35% 5.11%, 57.41% 3.98%, 61.01% 5.01%, 60.08% 6.23%, 60.35% 8.68%, 57.01% 9.50%, 56.07% 6.74%, 56.88% 9.91%, 53.94% 13.48%, 49.00% 15.63%, 36.45% 18.59%, 28.44% 24.00%, 23.10% 29.01%, 22.83% 31.36%, 24.83% 34.12%, 37.52% 40.96%, 42.59% 45.05%, 35.25% 52.60%, 28.57% 54.75%, 15.22% 57.00%, 10.95% 61.39%)"
              


  const SVG_POINTS =
    "10.95,61.39 11.62,65.47 14.82,71.20 19.49,74.57 18.96,75.38 23.10,81.82 30.71,86.72 32.31,88.76 33.11,91.22 31.91,91.83 32.18,92.54 33.51,92.13 35.25,93.56 35.25,95.30 38.99,94.48 46.06,94.89 46.86,93.77 38.99,94.08 38.72,92.24 42.06,92.13 52.07,88.87 53.54,91.01 53.00,91.73 54.21,91.62 52.60,88.66 55.01,86.72 59.55,86.01 59.55,87.64 57.94,87.84 57.41,88.76 64.35,87.74 64.49,86.82 68.89,85.60 67.82,84.78 77.17,81.00 74.23,85.39 77.04,83.55 76.90,82.53 87.85,78.24 88.25,75.28 83.58,73.24 81.58,69.46 75.30,65.37 74.77,62.72 71.43,62.21 71.83,60.88 74.23,59.55 75.70,59.96 76.90,55.98 82.11,53.42 83.18,52.09 79.04,46.48 76.77,40.45 71.16,37.39 57.81,34.32 53.54,27.17 53.54,23.90 57.14,18.39 56.21,17.67 58.08,17.67 63.55,14.61 65.42,11.75 64.22,6.64 62.35,5.11 57.41,3.98 61.01,5.01 60.08,6.23 60.35,8.68 57.01,9.50 56.07,6.74 56.88,9.91 53.94,13.48 49.00,15.63 36.45,18.59 28.44,24.00 23.10,29.01 22.83,31.36 24.83,34.12 37.52,40.96 42.59,45.05 35.25,52.60 28.57,54.75 15.22,57.00 10.95,61.39"; // ← convierte tu polygon a este formato

  return (
    <motion.div
      className="relative inline-block isolate"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
  
<motion.button
  type="submit"
  className="relative z-10 text-white font-bold cursor-pointer overflow-hidden"
  style={{
    WebkitClipPath: CLIP_POLYGON_PERCENT,
    clipPath: CLIP_POLYGON_PERCENT,
    background: "radial-gradient(circle, rgba(147,51,234,0.6) 0%, rgba(0,0,0,0.8) 70%)",
  }}
  animate={{
    background: [
      "radial-gradient(circle, rgba(147,51,234,0.9) 0%, rgba(0,0,0,0.8) 70%)",
      "radial-gradient(circle, rgba(6,240,229,0.9) 0%, rgba(0,0,0,0.8) 70%)",
      "radial-gradient(circle, rgba(147,51,234,0.9) 0%, rgba(0,0,0,0.8) 70%)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <img src={cursedenergy} alt="Cursed Energy" className="inline-block w-32 h-32" />
  
</motion.button>

      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.svg
          key={i}
          className="absolute inset-0 pointer-events-none z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          initial={false}
        >
          <motion.polygon
            points={SVG_POINTS}
            fill="none"
            stroke="rgb(6, 240, 229)"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            initial={{ scale: 1, opacity: 0 }}
            animate={
              hover
                ? { scale: [1, 1.4], opacity: [1, 0] }
                : { opacity: 0 }
            }
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay,
              repeat: hover ? Infinity : 0,
            }}
            
            style={{ originX: 0.5, originY: 0.5, transformBox: "fill-box" }}
          />
        </motion.svg>
      ))}
            
    </motion.div>
  );
}