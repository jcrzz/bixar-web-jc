import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ingenieria from './pages/Ingenieria';
import Arquitectura from './pages/Arquitectura';
import Construccion from './pages/Construccion';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user preference or system setting
  useEffect(() => {
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
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ingenieria" element={<Ingenieria />} />
            <Route path="/arquitectura" element={<Arquitectura />} />
            <Route path="/construccion" element={<Construccion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
