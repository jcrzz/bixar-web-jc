import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="w-full bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-bixar-green text-white flex items-center justify-center font-bold text-xl rounded-sm">
              B
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-gray-900 dark:text-white">
              BIXAR
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex space-x-2 lg:space-x-4 items-center">
            <Link to="/" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md text-sm font-medium transition-colors">Inicio</Link>
            <Link to="/ingenieria" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">Ingeniería</Link>
            <Link to="/arquitectura" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">Arquitectura</Link>
            <Link to="/construccion" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">Construcción</Link>
            <Link to="/nosotros" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">Nosotros</Link>
            <Link to="/contacto" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">Contacto</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-bixar-blue hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm cursor-pointer">
              Cotizar proyecto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
