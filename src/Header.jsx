import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './assets/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
                isScrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-[#282f3c]'
            }`}
        >
            <div className='h-20 w-full flex items-center justify-between px-4 md:px-8'>
                <img
                    src={Logo}
                    className="h-16 w-32 cursor-pointer"
                    alt="Logo"
                    onClick={() => (window.location.href = "/")}
                />
                <nav className='hidden md:flex'>
                    <ul className='flex space-x-8 text-white font-semibold text-lg'>
                        <li>
                            <Link
                                to="/"
                                className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/' ? 'text-yellow-400' : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/popular"
                                className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/popular' ? 'text-yellow-400' : ''}`}
                            >
                                Popular
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/top-rated"
                                className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/top-rated' ? 'text-yellow-400' : ''}`}
                            >
                                Top Rated
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/upcoming"
                                className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/upcoming' ? 'text-yellow-400' : ''}`}
                            >
                                Upcoming
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='flex gap-5 items-center'>
                    <AccountCircleIcon
                        className='text-white'
                        sx={{ fontSize: "2.4rem" }}
                    />
                    <div className='md:hidden'>
                        <MenuIcon
                            className='text-white cursor-pointer'
                            onClick={toggleMenu}
                            sx={{ fontSize: "2rem" }}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`md:hidden bg-gray-800 p-4 font-semibold text-lg transition-all duration-500 ease-in-out transform ${
                    menuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 overflow-hidden -translate-y-4'
                }`}
            >
                <ul className='flex flex-col space-y-8 text-white'>
                    <li>
                        <Link
                            to="/"
                            className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/' ? 'text-yellow-400' : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/popular"
                            className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/popular' ? 'text-yellow-400' : ''}`}
                        >
                            Popular
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/top-rated"
                            className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/top-rated' ? 'text-yellow-400' : ''}`}
                        >
                            Top Rated
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/upcoming"
                            className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/upcoming' ? 'text-yellow-400' : ''}`}
                        >
                            Upcoming
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
