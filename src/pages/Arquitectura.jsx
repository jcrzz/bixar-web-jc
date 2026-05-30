import { PenTool, Box, Sun, Sparkles, ArrowRight } from "lucide-react";
import Stats from "../components/Stats";

export default function Arquitectura() {
  const arquitecturaStats = [
    { value: "+80", label: "PROYECTOS DISEÑADOS" },
    { value: "12", label: "PREMIOS Y MENCIONES" },
    { value: "40k", label: "M² DESARROLLADOS" },
    { value: "6", label: "TIPOLOGÍAS" }
  ];

  const proyectos = [
    {
      category: "RESIDENCIAL",
      title: "Casa Mirador",
      description: "Vivienda unifamiliar con patio interior."
    },
    {
      category: "CULTURAL",
      title: "Centro Cívico",
      description: "Edificio público con plaza activa."
    },
    {
      category: "CORPORATIVO",
      title: "HQ Bahía",
      description: "Oficinas con jardín vertical de doble altura."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-bixar-dark transition-colors duration-300 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
        
        {/* Top Text Grid */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16 mb-16">
          <div className="flex-1">
            <h3 className="text-[#00B4D8] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              02 — ARQUITECTURA
            </h3>
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight">
              Diseñar es<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#09C895] font-serif italic font-medium pr-4">
                tomar partido.
              </span>
            </h1>
          </div>
          
          <div className="flex-1 lg:max-w-md lg:mt-10">
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Cada proyecto es una conversación entre lugar, programa y usuario. 
              Diseñamos espacios que tienen una idea clara y la sostienen hasta el detalle.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
          <img 
            src="/arquitectura_bg.png" 
            alt="Interior de arquitectura moderna" 
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </div>

      {/* Filosofía Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Text */}
          <div className="flex-1">
            <h3 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-6">FILOSOFÍA</h3>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              Menos forma. <span className="text-[#00B4D8]">Más</span><br />
              <span className="text-[#09C895]">sentido.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
              Creemos en la arquitectura como una herramienta para mejorar la experiencia humana. 
              Nuestro lenguaje es claro, contemporáneo y profundamente material.
            </p>
          </div>

          {/* Right: Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mt-4 lg:mt-0">
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <PenTool className="text-[#09C895] mb-4" size={24} strokeWidth={2} />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Concepto</h4>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <Box className="text-[#09C895] mb-4" size={24} strokeWidth={2} />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Materialidad</h4>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <Sun className="text-[#09C895] mb-4" size={24} strokeWidth={2} />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Luz natural</h4>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <Sparkles className="text-[#09C895] mb-4" size={24} strokeWidth={2} />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Detalle</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section (Forced Dark) */}
      <Stats items={arquitecturaStats} theme="dark" />

      {/* Galería Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-14">
          <h3 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-4">GALERÍA</h3>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Proyectos destacados
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {proyectos.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-200 dark:border-gray-800">
              <div className="h-64 w-full overflow-hidden relative border-b border-gray-200 dark:border-gray-800">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src="/arquitectura_bg.png" 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 pb-10">
                <h5 className="text-[#00B4D8] text-[11px] font-bold tracking-widest uppercase mb-3">
                  {item.category}
                </h5>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#00B4D8] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button Aligned Left */}
        <div className="flex justify-start">
          <button className="flex items-center gap-2 bg-[#09C895] hover:bg-[#08b385] text-gray-900 px-8 py-3.5 rounded-md font-bold text-sm transition-colors shadow-sm">
            Diseñar mi proyecto
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
      
    </div>
  );
}
