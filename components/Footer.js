import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Icono de Contacto (Solo Correo) */}
      

      {/* Texto de Copyright adaptable */}
      <p className="text-sm text-slate-500 dark:text-slate-400">
        © 2026 <span className="font-semibold text-slate-700 dark:text-slate-200">Ramses Tornero</span>. 
        Todos los derechos reservados.
      </p>
    </footer>
  );
}