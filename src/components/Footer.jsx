import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#161616] pt-16 w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#00B4D8] text-white flex items-center justify-center font-bold text-lg rounded-sm">
                B
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                BIXAR
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Integramos Ingeniería, Arquitectura y Construcción bajo una sola firma. 
              Soluciones técnicas y creativas, ejecutadas con precisión.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#262626] hover:bg-[#333] rounded-md flex items-center justify-center text-gray-300 transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#262626] hover:bg-[#333] rounded-md flex items-center justify-center text-gray-300 transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#262626] hover:bg-[#333] rounded-md flex items-center justify-center text-gray-300 transition-colors">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Rubros */}
          <div className="col-span-1">
            <h4 className="text-[#09C895] text-xs font-bold tracking-widest uppercase mb-6">
              RUBROS
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/ingenieria" className="text-gray-400 hover:text-white text-sm transition-colors">Ingeniería</Link>
              </li>
              <li>
                <Link to="/arquitectura" className="text-gray-400 hover:text-white text-sm transition-colors">Arquitectura</Link>
              </li>
              <li>
                <Link to="/construccion" className="text-gray-400 hover:text-white text-sm transition-colors">Construcción</Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-1">
            <h4 className="text-[#09C895] text-xs font-bold tracking-widest uppercase mb-6">
              CONTACTO
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} />
                <a href="mailto:contacto@bixar.com" className="hover:text-white transition-colors">contacto@bixar.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} />
                <a href="tel:+541100000000" className="hover:text-white transition-colors">+54 11 0000 0000</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Buenos Aires, AR</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Bixar. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Ingeniería · Arquitectura · Construcción
          </p>
        </div>
      </div>
    </footer>
  );
}
