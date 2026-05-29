import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user preference or system setting
  useEffect(() => {
    // For this demo, we'll default to light mode to match the Navbar screenshot 
    // but the user can toggle it.
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        
        {/* Placeholder for future sections: Ingeniería, Arquitectura, Construcción, etc. */}
        <div className="w-full bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h3 className="text-bixar-blue text-sm font-bold tracking-widest uppercase mb-4">Rubros</h3>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Especialidades que <span className="text-bixar-blue">trabajan</span><br/><span className="text-[#09C895]">juntas.</span>
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                (Esta sección se desarrollará próximamente)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
