import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl md:text-2xl font-serif font-bold text-coffee-dark transition-all duration-300 hover:scale-105">
            La Belle Tasse
          </Link>
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={`transition-colors duration-300 hover:text-coffee-light ${isActive('/') ? 'text-coffee-dark font-medium border-b-2 border-coffee-light' : ''}`}
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className={`transition-colors duration-300 hover:text-coffee-light ${isActive('/menu') ? 'text-coffee-dark font-medium border-b-2 border-coffee-light' : ''}`}
              >
                Menü
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`transition-colors duration-300 hover:text-coffee-light ${isActive('/about') ? 'text-coffee-dark font-medium border-b-2 border-coffee-light' : ''}`}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`transition-colors duration-300 hover:text-coffee-light ${isActive('/blog') ? 'text-coffee-dark font-medium border-b-2 border-coffee-light' : ''}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`transition-colors duration-300 hover:text-coffee-light ${isActive('/contact') ? 'text-coffee-dark font-medium border-b-2 border-coffee-light' : ''}`}
              >
                İletişim
              </Link>
            </li>
            <li>
              <Link 
                to="/reservation" 
                className={`transition-colors duration-300 hover:text-coffee-light ${isActive('/reservation') ? 'text-coffee-dark font-medium border-b-2 border-coffee-light' : ''}`}
              >
                Rezervasyon
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-300">
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className={`block py-2 transition-colors duration-300 ${isActive('/') ? 'text-coffee-light font-medium' : 'hover:text-coffee-light'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className={`block py-2 transition-colors duration-300 ${isActive('/menu') ? 'text-coffee-light font-medium' : 'hover:text-coffee-light'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menü
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`block py-2 transition-colors duration-300 ${isActive('/about') ? 'text-coffee-light font-medium' : 'hover:text-coffee-light'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className={`block py-2 transition-colors duration-300 ${isActive('/blog') ? 'text-coffee-light font-medium' : 'hover:text-coffee-light'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`block py-2 transition-colors duration-300 ${isActive('/contact') ? 'text-coffee-light font-medium' : 'hover:text-coffee-light'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link 
                  to="/reservation" 
                  className={`block py-2 transition-colors duration-300 ${isActive('/reservation') ? 'text-coffee-light font-medium' : 'hover:text-coffee-light'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rezervasyon
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;