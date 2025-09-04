import jjklogo from '../shared/images/jjklogo.png';
export const WelcomeView = () => {
    return (
      
      <div className="">
          <div className='justify-center items-center flex flex-col bg-gradient-to-b from-gray-900 to-black min-h-screen'>
            <img src={jjklogo} alt="Jujutsu Kaisen Logo" className="w-1/4 h-auto" />
            <h1 className="text-3xl text-gray-400 font-bold hover:text-gray-300 cursor-default">Jujutsu Kaisen DLE</h1>
            <a href="/app/inicio" className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer mt-5'>Press start</a>
          </div>
      </div>
    )

}