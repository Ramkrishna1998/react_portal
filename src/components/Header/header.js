import react from 'react';

function Header() {
    return (
        <header className="bg-blue-500 shadow-md">
            <nav className="max-w-7xl mx-auto px-4" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-blue-500">
                    <div className="flex items-center">
                        <span className='font-bold text-white text-2xl tracking-wide'>
                            Portal
                        </span>
                       
                    </div>                   
                </div>
               
            </nav>
        </header>
    );
}

export default Header;
