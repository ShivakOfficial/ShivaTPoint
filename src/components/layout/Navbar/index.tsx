import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">ShivaTpoint</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <NavLinks className="flex space-x-4" />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} />
      </div>
    </nav>
  );
}