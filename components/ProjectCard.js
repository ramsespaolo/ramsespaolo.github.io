import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';

export default function ProjectCard({ title, description, tags, link, color }) {
  return (
    <div className="group relative bg-white dark:bg-slate-900 dark:border-slate-800 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
      
      {/* 1. PORTADA DEL PROYECTO */}
      <div className={`h-32 w-full bg-gradient-to-br ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        {/* El icono se mantiene blanco siempre porque está sobre el color gradiente */}
        <FolderGit2 className="absolute bottom-4 left-4 text-white/90 drop-shadow-md" size={32} />
      </div>

      {/* 2. CONTENIDO */}
      <div className="p-6">
        {/* Título: Negro en luz, Blanco en oscuro */}
        <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        
        {/* Descripción: Gris oscuro en luz, Gris claro en oscuro */}
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Etiquetas: Fondo gris claro en luz, Fondo gris oscuro en oscuro */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-full font-semibold border border-slate-200 dark:border-slate-700">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Botón: Negro en luz, Blanco en oscuro */}
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Ver Código <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}