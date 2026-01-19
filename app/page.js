'use client';

import React, { useState } from 'react'; // <--- Agregamos useState
import { ExternalLink, Code2, Terminal, Cpu, Globe, Download, Coffee, Database, Layers, Server, Github, Linkedin, Zap, Layout, Rocket, Mail, MapPin, Send, Phone } from 'lucide-react';
import Swal from 'sweetalert2';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function Portfolio() {

  // --- LÓGICA DEL FORMULARIO (NUEVO) ---
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Envío AJAX a FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/ramsespaolotorneronarvaez@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Alerta de Éxito
        Swal.fire({
          title: '¡Mensaje Enviado!',
          text: 'Gracias por contactarme, te responderé pronto.',
          icon: 'success',
          confirmButtonColor: '#2563EB',
          confirmButtonText: 'Genial'
        }).then((result) => {
          // Recargar página al cerrar alerta
          if (result.isConfirmed || result.isDismissed) {
             window.location.reload(); 
          }
        });
        e.target.reset(); 
      } else {
        throw new Error('Error al enviar');
      }

    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // -------------------------------------

  // Datos EXCLUSIVOS de las 5 tecnologías
  const techStack = [
    { 
      name: "React", 
      icon: Code2, 
      color: "text-blue-500", 
      level: 90, 
      desc: "Biblioteca para interfaces de usuario dinámicas y componentes reutilizables." 
    },
    { 
      name: "Next.js", 
      icon: Terminal, 
      color: "text-slate-900 dark:text-white", 
      level: 85,
      desc: "Framework de producción para React con optimización SEO y renderizado rápido." 
    },
    { 
      name: "Tailwind", 
      icon: Globe, 
      color: "text-cyan-500", 
      level: 95,
      desc: "Framework de estilos 'utility-first' para diseños modernos y responsivos." 
    },
    { 
      name: "JavaScript", 
      icon: Cpu, 
      color: "text-yellow-600", 
      level: 90,
      desc: "Lenguaje de programación fundamental para la interactividad web." 
    },
    { 
      name: "MySQL", 
      icon: Database, 
      color: "text-blue-700", 
      level: 80,
      desc: "Base de datos relacional para gestión segura y estructurada de datos." 
    },
  ];

  const projects = [
    {
      title: "Prueba Técnica Angular",
      description: "Aplicación web SPA desarrollada con Angular. Implementación de componentes reutilizables y consumo de APIs REST.",
      tags: ["Angular", "TypeScript", "Web Dev"],
      link: "https://github.com/ramsespaolo/efact-prueba",
      color: "from-red-500 to-orange-500"
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      
      {/* --- FONDO GLOBAL FIJO --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
        
        {/* CONSTELACIÓN DE ICONOS GLOBAL */}
        <div className="absolute top-20 left-[5%] text-blue-600/30 dark:text-blue-400/20 animate-pulse">
          <Code2 size={60} />
        </div>
        <div className="absolute bottom-20 right-[5%] text-yellow-600/30 dark:text-yellow-400/20 animate-bounce" style={{ animationDuration: '3s' }}>
          <Cpu size={70} />
        </div>
        <div className="absolute top-1/3 right-[10%] text-cyan-600/30 dark:text-cyan-400/20 animate-pulse" style={{ animationDelay: '1s' }}>
          <Database size={50} />
        </div>
        <div className="absolute bottom-1/3 left-[10%] text-green-600/30 dark:text-green-400/20 animate-bounce" style={{ animationDuration: '4s' }}>
          <Terminal size={60} />
        </div>
      </div>

      <Navbar/>

      {/* --- SECCIÓN HERO --- */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center z-10">
        
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponible para trabajar
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-slate-100">
            Hola, soy <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              Ramses Tornero
            </span>
            <span className="block text-2xl md:text-4xl mt-4 text-slate-600 dark:text-slate-400 font-semibold">
              <span className="text-blue-500  ">Software Developer</span>
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto text-justify">
            Me considero un <span className="font-semibold text-slate-800 dark:text-slate-200">Desarrollador Junior</span> con una capacidad innata para 
            <span className="text-blue-600 dark:text-blue-400 font-medium"> aprender rápido y adaptarme a cualquier tecnología</span>. 
            Transformo desafíos en soluciones Full Stack eficientes y modernas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#contactame" className="bg-white dark:bg-transparent text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Hablemos ahora
            </a>
            <a href="#projects" className="bg-white dark:bg-transparent text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Ver proyectos
            </a>
             <a href="/cv.pdf" download className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
              <Download size={20} /> CV
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 w-full max-w-3xl">
            <div className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <Layout size={20} className="text-blue-500" />
              <h3 className="font-bold text-slate-900 dark:text-white">Diseño Responsive</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center uppercase tracking-wide">
                Adaptable a cualquier dispositivo
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <Rocket size={20} className="text-purple-500" />
              <h3 className="font-bold text-slate-900 dark:text-white">Código Limpio</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center uppercase tracking-wide">
                Escalable y fácil de mantener
              </p>
            </div>
             <div className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <Zap size={20} className="text-orange-500" />
              <h3 className="font-bold text-slate-900 dark:text-white">Aprendizaje Rápido</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center uppercase tracking-wide">
                Siempre actualizado
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center group cursor-default">
              <span className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                10+
              </span>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-2">
                Tecnologías
              </span>
          </div>

          <div className="mt-8 flex flex-col items-center animate-bounce opacity-50">
             <div className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center pt-1">
               <div className="w-1 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
             </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN: HABILIDADES --- */}
     <section id="habilidades" className="min-h-screen flex flex-col justify-center items-center py-20 relative z-10">
        
        <div className="max-w-6xl mx-auto px-4 w-full">
          
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 animate-fade-in-up">
            Habilidades Tecnológicas
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {techStack.map((tech, index) => (
              <div key={index} className="group relative w-full max-w-[300px] h-[180px] perspective-1000">
                
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-slate-900/95 dark:bg-black/95 backdrop-blur-md text-white text-xs rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2 z-30 border border-slate-700/50">
                  <p className="text-center leading-relaxed font-medium">
                    {tech.desc}
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95 dark:border-t-black/95"></div>
                </div>

                <div className="w-full h-full bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] group-hover:-translate-y-1">
                  
                  <div className="relative flex items-center justify-center">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-200 dark:text-slate-800" />
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={226} strokeDashoffset={226 - (226 * tech.level) / 100} className={`text-blue-500 transition-all duration-1000 ease-out opacity-0 group-hover:opacity-100`} />
                    </svg>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <tech.icon className={`${tech.color} transition-transform duration-300 group-hover:scale-110`} size={32} />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-1">{tech.name}</h3>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.level}% Dominio
                    </span>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECCIÓN PROYECTOS --- */}
      <section id="projects" className="min-h-screen flex flex-col justify-center px-4 relative z-10 py-20">
        <div className="max-w-6xl mx-auto w-full">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 animate-fade-in-up">
              Proyectos 
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Una colección de mis trabajos recientes, desde aplicaciones web hasta experimentos de diseño.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                  color={project.color}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECCIÓN: CONTACTO --- */}
      <section id="contactame" className="min-h-screen flex flex-col justify-center items-center py-20 border-t border-slate-200 dark:border-slate-800 relative z-10">
        
        <div className="max-w-5xl w-full px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
            Contáctame
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Ya sea para una oportunidad laboral o simplemente para saludar, mi bandeja de entrada siempre está abierta.
            </p>
          </div>

          {/* TARJETA DUAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            
            {/* COLUMNA 1: INFO DE CONTACTO (Azul) */}
            <div className="bg-blue-600 dark:bg-blue-900/40 p-10 flex flex-col justify-between relative overflow-hidden">
              
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                <p className="text-blue-100 mb-10 leading-relaxed">
                  ¿Prefieres una llamada rápida o un mensaje? Aquí tienes mis datos directos.
                </p>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition">
                      <Mail size={24} />
                    </div>
                    <span className="font-medium text-sm md:text-base break-all">ramsespaolotorneronarvaez@gmail.com</span>
                  </div>

                  {/* Celular / WhatsApp */}
                  <a href="https://wa.me/51955756671" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-green-300 transition-colors group">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-green-500/20 transition">
                      <Phone size={24} />
                    </div>
                    <span className="font-medium text-lg">+51 955 756 671</span>
                  </a>

                  {/* Ubicación */}
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <span className="font-medium">Lima, Perú</span>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="mt-12 relative z-10">
                <p className="text-blue-200 text-sm mb-4 uppercase tracking-wider">Sígueme en</p>
                <div className="flex gap-4">
                  <a href="https://github.com/ramsespaolo" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-blue-600 text-white transition-all cursor-pointer z-20">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/ramses-paolo-tornero-narvaez-a977b1154/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-blue-600 text-white transition-all cursor-pointer z-20">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

            </div>

            {/* COLUMNA 2: FORMULARIO (Actualizado) */}
            <div className="p-10 bg-white dark:bg-slate-950">
              <form 
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Tu Nombre</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Nombres y Apellidos"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Tu Correo</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Mensaje</label>
                  <textarea 
                    name="message" 
                    required
                    rows="4"
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>

              </form>
            </div>

          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}