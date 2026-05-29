import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full bg-bixar-dark min-h-[600px] flex items-center overflow-hidden">
      {/* Background overlay / gradient to simulate the image background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b3c] via-bixar-dark to-bixar-dark opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-20">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <h2 className="text-bixar-green text-xs sm:text-sm font-bold tracking-[0.2em] mb-6">
            INGENIERÍA · ARQUITECTURA · CONSTRUCCIÓN
          </h2>
          
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
            Tres disciplinas.<br />
            <span className="text-bixar-blue">Una sola firma.</span>
          </h1>
          
          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
            En Bixar unimos diseño, cálculo y ejecución en un proceso continuo. Proyectos
            integrales que nacen, se diseñan y se construyen bajo un mismo equipo.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-bixar-blue hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-medium transition-colors shadow-lg">
              Iniciar proyecto
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center bg-transparent border border-gray-600 hover:border-gray-400 text-white px-8 py-3.5 rounded-md font-medium transition-colors">
              Conoce Bixar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
