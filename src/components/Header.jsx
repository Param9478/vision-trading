// components/Header.jsx
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Charts', path: '/charts' },
    { name: 'Bots', path: '/bots' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="text-2xl font-bold flex items-center group"
          >
            <span className="text-white mr-1 group-hover:text-gray-200 transition-colors">
              Trade with
            </span>
            <span className="text-teal-400 group-hover:text-teal-300 transition-colors">
              Scholars
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-teal-400 font-medium'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 py-2 bg-gray-800 rounded-lg">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 transition-colors ${
                    isActive
                      ? 'text-teal-400 bg-gray-700 font-medium'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
