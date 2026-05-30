export default function Stats() {
  const stats = [
    { value: "+15", label: "AÑOS DE TRAYECTORIA" },
    { value: "+120", label: "PROYECTOS ENTREGADOS" },
    { value: "3", label: "DISCIPLINAS INTEGRADAS" },
    { value: "100%", label: "COMPROMISO CON PLAZOS" }
  ];

  return (
    <div className="w-full bg-[#f3f4f6] dark:bg-[#111111] py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col pl-6 border-l-[3px] border-bixar-green">
              <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-[0.15em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
