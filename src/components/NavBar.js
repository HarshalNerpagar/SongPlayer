import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('jwt');

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0">
              <img className="w-44" src="https://imgs.search.brave.com/L0TNpCJEcGEfcKWiT7a6MRipCMPKil6hxYCPSbK6_Tg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE3MTYwNTgucG5n" alt="Brand Logo" />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {token ? (
              <button
                onClick={handleLogout}
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-xl font-medium"
              >
                Log Out
              </button>
            ) : (
              <Link to="/login" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-xl font-medium">
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
