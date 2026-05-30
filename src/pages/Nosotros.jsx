import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import Stats from "../components/Stats";

export default function Nosotros() {
  const valores = [
    {
      icon: <Target className="text-[#09C895] mb-4" size={28} strokeWidth={2} />,
      title: "Precisión",
      desc: "Decisiones basadas en datos y experiencia."
    },
    {
      icon: <Users className="text-[#09C895] mb-4" size={28} strokeWidth={2} />,
      title: "Colaboración",
      desc: "Disciplinas que trabajan en simultáneo, no en cadena."
    },
    {
      icon: <Lightbulb className="text-[#09C895] mb-4" size={28} strokeWidth={2} />,
      title: "Creatividad técnica",
      desc: "Soluciones inteligentes para problemas complejos."
    },
    {
      icon: <Award className="text-[#09C895] mb-4" size={28} strokeWidth={2} />,
      title: "Compromiso",
      desc: "Cada obra es nuestra carta de presentación."
    }
  ];

  const nosotrosStats = [
    { value: "2010", label: "AÑO DE FUNDACIÓN" },
    { value: "+35", label: "PROFESIONALES" },
    { value: "3", label: "OFICINAS" },
    { value: "+200", label: "CLIENTES" }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-bixar-dark transition-colors duration-300">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 w-full text-left">
            <h3 className="text-[#00B4D8] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              SOBRE BIXAR
            </h3>
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-8">
              Una firma. <span className="text-[#00B4D8]">Tres</span><br />
              <span className="text-[#09C895]">miradas.</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-normal max-w-xl">
              Bixar nació para resolver un problema clásico de la construcción: la 
              desconexión entre quien diseña, quien calcula y quien ejecuta. 
              Integramos los tres roles en un mismo proceso para que las decisiones 
              sean más rápidas, más coherentes y más eficientes.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
              <img 
                src="/nosotros_team.png" 
                alt="Equipo de Bixar reunido" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Valores Section */}
      <div className="w-full bg-[#f3f4f6] dark:bg-[#111111] py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h3 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-4">VALORES</h3>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              En lo que creemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                {valor.icon}
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {valor.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {valor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats items={nosotrosStats} theme="transparent" />

      {/* CTA Banner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-32">
        <div className="bg-[#161616] rounded-2xl p-12 md:p-16 lg:p-20 shadow-xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Nuestra ventaja competitiva es la <span className="text-[#09C895]">coordinación.</span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Cuando ingeniería, arquitectura y construcción comparten oficina, los
              proyectos se ejecutan más rápido, con menos errores y con un nivel de
              detalle mayor.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#09C895] hover:bg-[#08b385] text-gray-900 px-6 py-3 rounded-md font-bold text-sm transition-colors shadow-sm">
              Trabajemos juntos
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
