export default function Stats({ items, theme = "default" }) {
  const defaultStats = [
    { value: "+15", label: "AÑOS DE TRAYECTORIA" },
    { value: "+120", label: "PROYECTOS ENTREGADOS" },
    { value: "3", label: "DISCIPLINAS INTEGRADAS" },
    { value: "100%", label: "COMPROMISO CON PLAZOS" }
  ];

  const statsToRender = items || defaultStats;
  
  const isDark = theme === "dark";
  const isTransparent = theme === "transparent";

  let bgClass = 'bg-[#f3f4f6] dark:bg-[#111111]';
  if (isDark) bgClass = 'bg-[#161616]';
  if (isTransparent) bgClass = 'bg-transparent';

  return (
    <div className={`w-full py-20 transition-colors duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {statsToRender.map((stat, index) => (
            <div key={index} className="flex flex-col pl-6 border-l-[3px] border-bixar-green">
              <span className={`text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight ${isDark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {stat.value}
              </span>
              <span className={`text-xs font-bold tracking-[0.15em] uppercase ${isDark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
