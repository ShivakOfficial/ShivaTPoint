import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars } from 'react-icons/fa';

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
            <div className="relative">
              <input
                type="text"
                placeholder="Search tutorials..."
                className="py-1 px-4 pr-10 rounded-md text-gray-900 w-64"
              />
              <FaSearch className="absolute right-3 top-2 text-gray-500" />
            </div>
            <Link to="/tutorials" className="hover:text-gray-200">Tutorials</Link>
            <Link to="/jobs" className="hover:text-gray-200">Jobs</Link>
            <Link to="/courses" className="hover:text-gray-200">Courses</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="relative my-4">
              <input
                type="text"
                placeholder="Search tutorials..."
                className="w-full py-1 px-4 pr-10 rounded-md text-gray-900"
              />
              <FaSearch className="absolute right-3 top-2 text-gray-500" />
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/tutorials" className="hover:text-gray-200">Tutorials</Link>
              <Link to="/jobs" className="hover:text-gray-200">Jobs</Link>
              <Link to="/courses" className="hover:text-gray-200">Courses</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}