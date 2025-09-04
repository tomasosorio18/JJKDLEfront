import { Outlet } from "react-router-dom";
import sukunawpp from "../shared/images/sukunawpp.jpg"
import logodlejjk from '../../src/shared/images/jjkdlelogo2.png';
export const Layout: React.FC = () => {

  console.log("AppLayout loaded")
  return (
    <div
      className="min-h-screen flex flex-col relative bg-fixed"
      style={{
        backgroundImage: `url(${sukunawpp})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none"></div>
      {/* Header fijo */}
      <div className="flex items-center justify-center relative z-10 p-4">
        <a href="/app/inicio" className='rounded-full shadow-[0_0_80px_30px_rgba(147,51,234,1)] hover:bg-purple-950'>
          <img src={logodlejjk} alt="Logo JJK" className='h-32 rounded-full transform hover:scale-105 transition-all cursor-pointer' />
        </a>
      </div>
      {/* Contenido dinámico */}
      <div className="flex-grow p-4 relative z-10">
        <Outlet />
      </div>
      <footer>
        <div className="container mx-auto py-4 text-center text-white">
          <p>&copy; {new Date().getFullYear()} JJK DLE. All rights  reserved - tomi</p>
          <p>Buttons and icons - <a href="https://wallpapers-clan.com/">https://wallpapers-clan.com/</a></p>

        </div>
      </footer>
    </div>
  );
};