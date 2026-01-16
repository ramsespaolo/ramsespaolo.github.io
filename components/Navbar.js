"use client"; // <--- Importante: Esto permite interactividad
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Al cargar la página, revisamos si el usuario ya tenía modo oscuro
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Función para cambiar el tema
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <nav className="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm z-50 p-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          MiPortafolio.
        </Link>
        
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <li><Link href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Inicio</Link></li>
            <li><Link href="#habilidades" className="hover:text-blue-600 dark:hover:text-blue-400 transition"> Habilidades</Link></li>
            <li><Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Proyectos</Link></li>
             <li><Link href="#contactame" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contactame</Link></li>
          </ul>

          {/* Botón de Sol / Luna */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Cambiar tema"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}