import { HardHat, ClipboardCheck, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import Stats from "../components/Stats";

export default function Construccion() {
  const hitos = [
    { num: "01", title: "Planificación", desc: "Cronograma maestro, compras y logística." },
    { num: "02", title: "Movimiento de suelos", desc: "Excavación, fundaciones y submuración." },
    { num: "03", title: "Estructura", desc: "Hormigón, acero, encofrados y losas." },
    { num: "04", title: "Cerramientos", desc: "Mampostería, cubierta y aislaciones." },
    { num: "05", title: "Instalaciones", desc: "Eléctrica, sanitaria, gas y termomecánica." },
    { num: "06", title: "Terminaciones", desc: "Revestimientos, carpinterías y entrega." }
  ];

  const features = [
    {
      icon: <ClipboardCheck className="text-[#186DD4] mb-4" size={24} strokeWidth={2} />,
      title: "Control diario",
      desc: "Reporte de obra con fotos y avance."
    },
    {
      icon: <Truck className="text-[#186DD4] mb-4" size={24} strokeWidth={2} />,
      title: "Logística propia",
      desc: "Equipos, materiales y proveedores integrados."
    },
    {
      icon: <ShieldCheck className="text-[#186DD4] mb-4" size={24} strokeWidth={2} />,
      title: "Higiene & seguridad",
      desc: "Cumplimiento estricto de protocolos."
    }
  ];

  const construccionStats = [
    { value: "98%", label: "CUMPLIMIENTO DE PLAZOS" },
    { value: "+60", label: "OBRAS FINALIZADAS" },
    { value: "0", label: "ACCIDENTES GRAVES" },
    { value: "24/7", label: "SEGUIMIENTO DE OBRA" }
  ];

  const obras = [
    {
      category: "RESIDENCIAL",
      title: "Edificio Olivos",
      description: "6 pisos, 24 departamentos. 14 meses."
    },
    {
      category: "COMERCIAL",
      title: "Strip Center Sur",
      description: "3.200 m² de superficie comercial."
    },
    {
      category: "INDUSTRIAL",
      title: "Depósito Logístico",
      description: "Llave en mano para operador 3PL."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-bixar-dark transition-colors duration-300 pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] flex items-center">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/construccion_bg.png" 
            alt="Obra en construcción con grúas" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#161616]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#09C895] text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              <HardHat size={14} strokeWidth={2.5} />
              03 · CONSTRUCCIÓN
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              Lo que diseñamos,<br />
              <span className="text-[#09C895]">lo construimos.</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-normal max-w-lg">
              Coordinamos cada etapa de la obra con foco en seguridad, calidad y plazos. 
              Sin sorpresas. Sin excusas.
            </p>
          </div>
        </div>
      </div>

      {/* Proceso Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-14 max-w-2xl">
          <h3 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-4">PROCESO</h3>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
            Hitos de obra claros
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Una metodología repetible, auditada y transparente para cada cliente.
          </p>
        </div>

        {/* Hitos Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800 overflow-hidden">
          {hitos.map((hito, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white dark:bg-[#1a1a1a] transition-colors hover:bg-gray-50 dark:hover:bg-[#222]"
            >
              <div className="text-[3.5rem] font-extrabold text-[#dbeafe] dark:text-[#00B4D8]/20 leading-none mb-5">
                {hito.num}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {hito.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {hito.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Cards Section */}
      <div className="w-full bg-[#f3f4f6] dark:bg-[#111111] py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                {feature.icon}
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section (Transparent) */}
      <Stats items={construccionStats} theme="transparent" />

      {/* Obras Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-14">
          <h3 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-4">OBRAS</h3>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Proyectos finalizados
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {obras.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-200 dark:border-gray-800">
              <div className="h-64 w-full overflow-hidden relative border-b border-gray-200 dark:border-gray-800">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src="/construccion_bg.png" 
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
          <button className="flex items-center gap-2 bg-[#186DD4] hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-medium text-sm transition-colors shadow-sm">
            Solicitar presupuesto
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
      
    </div>
  );
}
