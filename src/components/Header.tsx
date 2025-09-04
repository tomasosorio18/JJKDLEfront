import logojjk from '../../src/shared/images/jjklogo.png';
export const Header = () => {
    return (
        <header className='bg-gradient-to-b from-gray-800 to-black text-white flex flex-wrap items-center justify-center pr-6'>
            <div className="group flex items-center justify-center space-x-6">
                <a href="/" className='w-auto transform hover:scale-105 transition-all cursor-pointer'>
                    <img src={logojjk} alt="Logo JJK" className='h-32 w-auto transform hover:scale-105 transition-all cursor-pointer' />
                </a>
            </div>

        </header>
    )
}