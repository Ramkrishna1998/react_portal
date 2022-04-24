import react from 'react';
import { Link } from 'react-router-dom';

function Header() {

    function handleLogout() {
        localStorage.setItem('userToken', false);
        localStorage.setItem('email', '');
    }
    return (
        <div className="bg-blue-600">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 font-medium text-2xl text-white flex-1 flex items-center">
                        <span>Portal</span>
                    </div>
                    <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                        <Link onClick={handleLogout} to='/'>
                            <button
                                type='button'
                                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
                            >
                                Logout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;
