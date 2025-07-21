import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-blue-600">SwapFX</Link>
                    <div className="flex space-x-4">
                        <Link to="/rates" className="text-gray-700 hover:text-blue-600 px-3 py-2">Rates</Link>
                        <Link to="/trade" className="text-gray-700 hover:text-blue-600 px-3 py-2">Trade</Link>
                        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;