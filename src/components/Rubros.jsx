import { ArrowRight, Ruler, Compass, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Rubros() {
  return (
    <div className="w-full bg-[#f8f9fa] dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h3 className="text-bixar-blue text-xs font-bold tracking-widest uppercase mb-2">RUBROS</h3>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Especialidades que <span className="text-[#00B4D8]">trabajan</span><br/><span className="text-[#09C895]">juntas.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
            Cada rubro tiene su lenguaje, sus herramientas y su equipo. Pero todos comparten un mismo estándar de excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ingeniería */}
          <Link to="/ingenieria" className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg block">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/40 to-transparent z-10" />
            <img src="/ingenieria_bg.png" alt="Ingeniería" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <div className="text-bixar-green mb-4">
                <Ruler size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Ingeniería</h3>
              <p className="text-gray-300 text-sm mb-6">Precisión, cálculo y soluciones estructurales.</p>
              <div className="flex items-center text-bixar-green font-semibold text-sm gap-2">
                Explorar <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* Arquitectura */}
          <Link to="/arquitectura" className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg block">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/40 to-transparent z-10" />
            <img src="/arquitectura_bg.png" alt="Arquitectura" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <div className="text-bixar-green mb-4">
                <Compass size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Arquitectura</h3>
              <p className="text-gray-300 text-sm mb-6">Diseño con identidad y propósito.</p>
              <div className="flex items-center text-bixar-green font-semibold text-sm gap-2">
                Explorar <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* Construcción */}
          <Link to="/construccion" className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg block">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/40 to-transparent z-10" />
            <img src="/construccion_bg.png" alt="Construcción" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <div className="text-bixar-green mb-4">
                <HardHat size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Construcción</h3>
              <p className="text-gray-300 text-sm mb-6">Ejecución profesional, en tiempo y forma.</p>
              <div className="flex items-center text-bixar-green font-semibold text-sm gap-2">
                Explorar <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
