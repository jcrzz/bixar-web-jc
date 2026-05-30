import { Calculator, Activity, Layers, Cpu, ArrowRight } from "lucide-react";
import Stats from "../components/Stats";

export default function Ingenieria() {
  const servicios = [
    {
      icon: <Calculator size={28} className="text-[#00B4D8]" strokeWidth={1.5} />,
      title: "Cálculo estructural",
      description: "Hormigón armado, acero y mixto. Modelado 3D y análisis sísmico avanzado."
    },
    {
      icon: <Activity size={28} className="text-[#00B4D8]" strokeWidth={1.5} />,
      title: "Instalaciones",
      description: "Eléctricas, sanitarias, termomecánicas (HVAC) y prevención de incendios."
    },
    {
      icon: <Layers size={28} className="text-[#00B4D8]" strokeWidth={1.5} />,
      title: "Estudios técnicos",
      description: "Suelo, hidráulica, factibilidad técnica y optimización de recursos."
    },
    {
      icon: <Cpu size={28} className="text-[#00B4D8]" strokeWidth={1.5} />,
      title: "BIM & Modelado",
      description: "Coordinación digital y clash detection para evitar interferencias en obra."
    }
  ];

  const ingenieriaStats = [
    { value: "+200", label: "CÁLCULOS ENTREGADOS" },
    { value: "0", label: "OBSERVACIONES CRÍTICAS" },
    { value: "48h", label: "RESPUESTA TÉCNICA" },
    { value: "ISO", label: "ESTÁNDARES APLICADOS" }
  ];

  const proyectos = [
    {
      category: "ESTRUCTURAL",
      title: "Torre Norte 18p",
      description: "Cálculo sismorresistente y supervisión integral."
    },
    {
      category: "INDUSTRIAL",
      title: "Planta logística",
      description: "Nave de 12.000 m² con estructura mixta."
    },
    {
      category: "INSTALACIONES",
      title: "Hospital Regional",
      description: "Coordinación BIM multidisciplinaria."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-bixar-dark transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full bg-[#131313] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px)', 
            backgroundSize: '80px 100%' 
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left w-full">
            <h3 className="text-[#09C895] text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              <span className="text-[#09C895]/60">//</span> 01 · INGENIERÍA
            </h3>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              Precisión que <span className="text-[#00B4D8]">se</span><br />
              <span className="text-[#09C895]">calcula.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-normal">
              Diseño estructural, cálculo y supervisión técnica. Hacemos que cada
              decisión esté respaldada por datos, normas y experiencia.
            </p>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-[#00B4D8] rounded-2xl blur-[100px] opacity-15" />
            <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <img src="/ingenieria_bg.png" alt="Planos de Ingeniería" className="w-full h-auto object-cover opacity-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Servicios Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-14">
          <h3 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-4">SERVICIOS</h3>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Soluciones de ingeniería integral
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] overflow-hidden lg:divide-x lg:divide-y-0 md:divide-x md:divide-y divide-y divide-gray-200 dark:divide-gray-800">
          {servicios.map((servicio, idx) => (
            <div 
              key={idx} 
              className="p-8 transition-colors hover:bg-gray-50 dark:hover:bg-[#222]"
            >
              <div className="mb-6">
                {servicio.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {servicio.title}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <Stats items={ingenieriaStats} />

      {/* Casos destacados Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-14">
          <h3 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-4">PROYECTOS</h3>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Casos destacados
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {proyectos.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="h-64 w-full overflow-hidden relative border-b border-gray-200 dark:border-gray-800">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src="/ingenieria_bg.png" 
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
        
        {/* Botón CTA Inferior */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-[#186DD4] hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-medium transition-colors shadow-sm">
            Solicitar asesoría técnica
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
