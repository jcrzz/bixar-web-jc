import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar({ isDarkMode, toggleTheme }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past top to add shadow/blur
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine scroll direction for showing/hiding navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold -> hide
        setIsVisible(false);
      } else {
        // Scrolling up or at top -> show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive 
        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
    }`;
  };

  return (
    <>
      {/* Placeholder to prevent layout shift when navbar is fixed */}
      <div className="h-20 w-full shrink-0"></div>

      <nav className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800' 
          : 'bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-[#00B4D8] text-white flex items-center justify-center font-bold text-xl rounded-sm">
                B
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-gray-900 dark:text-white">
                BIXAR
              </span>
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex space-x-2 lg:space-x-4 items-center">
              <Link to="/" className={getLinkClass('/')}>Inicio</Link>
              <Link to="/ingenieria" className={getLinkClass('/ingenieria')}>Ingeniería</Link>
              <Link to="/arquitectura" className={getLinkClass('/arquitectura')}>Arquitectura</Link>
              <Link to="/construccion" className={getLinkClass('/construccion')}>Construcción</Link>
              <Link to="/nosotros" className={getLinkClass('/nosotros')}>Nosotros</Link>
              <Link to="/contacto" className={getLinkClass('/contacto')}>Contacto</Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="bg-[#186DD4] hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm cursor-pointer">
                Cotizar proyecto
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
