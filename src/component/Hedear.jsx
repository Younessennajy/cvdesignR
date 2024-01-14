import React, { useState } from 'react';
import logo from '../asset/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="flex justify-between items-center h-24 bg-white p-2 relative mx-10 max-sm:h-32  max-sm:align-middle">
        <img src={logo} alt="logo" className="w-12 bg-transparent shrink-1" />
        <button onClick={toggleMenu} className="ml-auto hover:underline sm:hidden">
          <FaBars/>
        </button>
        <div className={`ml-auto sm:flex ${showMenu ? 'flex' : 'hidden'} flex-col sm:flex-row`}>
          <button className="ml-auto hover:underline">
            <Link to="/make" className="text-black  max-sm:hidden">
              Make a Cv
            </Link>
          </button>
          <Link
            to="/create"
            className="mx-4 max-sm:hidden text-pink-500 font-bold p-1 size-5px rounded-sm hover:border-pink-800 border-2 bg-pink-200"
          >
            Create mon cv
          </Link>
          <Link
            to="/login"
            className="mx-4 text-blue-600 font-bold p-1 size-1 rounded-sm hover:border-x-blue-600 bg-blue-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
