import React, { useState } from 'react';

// --- ICONOS SVG (Sin dependencias externas) ---
const HeartIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>);
const SparklesIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>);
const CameraIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>);
const ChevronRightIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>);
const StarIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const PhoneIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const MailIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const InstagramIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);
const MapPinIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);

// --- CONFIGURACIÓN DE DATOS ---
const personalInfo = {
  name: "Estudio de Belleza", // Cambiar por el nombre de tu prima
  tagline: "Resaltando tu luz propia con el poder del maquillaje",
  about: "Soy una maquilladora profesional apasionada por el arte de transformar y realzar la belleza natural que cada persona posee. Con años de experiencia en el sector, mi enfoque se basa en escuchar las necesidades de mis clientes y utilizar productos de la más alta calidad para garantizar acabados impecables y duraderos. Creo firmemente que el maquillaje no es para esconder, sino para empoderar y hacerte brillar en tus momentos más importantes.",
  phone: "+56 9 6716 2874",
  email: "contacto@gmail.com",
  location: "Los Andes, Chile",
  instagram: "@monii_tapia_"
};

const services = [
  {
    id: 1,
    title: "Maquillaje para Novias",
    description: "Un servicio integral y personalizado para el día más importante. Incluye una sesión de prueba previa para diseñar el look perfecto, preparación profunda de la piel con técnicas de skincare avanzado, y el uso de productos a prueba de agua y de larga duración (HD) para que luzcas radiante de principio a fin.",
    icon: <HeartIcon className="w-8 h-8" />,
    color: "bg-[#e2d1f0]" // Lavanda claro (Paleta Morada)
  },
  {
    id: 2,
    title: "Maquillaje Social",
    description: "Ideal para graduaciones, galas, fiestas o eventos de día/noche. Adaptamos el estilo a tu vestuario y tipo de evento, ya sea que busques un look sutil y luminoso ('no-makeup makeup') o un estilo dramático y audaz con ojos ahumados y contornos definidos.",
    icon: <SparklesIcon className="w-8 h-8" />,
    color: "bg-[#bed4f5]" // Celeste claro (Paleta Azul)
  },
  {
    id: 3,
    title: "Maquillaje Editorial y Moda",
    description: "Servicio especializado para sesiones fotográficas, revistas, pasarelas o producciones audiovisuales. Trabajo en conjunto con directores de arte y fotógrafos para crear looks creativos, vanguardistas o de época, adaptados a la iluminación de estudio.",
    icon: <CameraIcon className="w-8 h-8" />,
    color: "bg-[#d4b5ec]" // Lila intermedio (Paleta Morada)
  }
];

const portfolioItems = [
  { id: 1, category: "Novias", img: "https://images.unsplash.com/photo-1595475884562-073c30d45670?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Novia Clásica" },
  { id: 2, category: "Social", img: "https://images.unsplash.com/photo-1512496115851-a1c8f1307e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Gala de Noche" },
  { id: 3, category: "Editorial", img: "https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Sesión de Moda" },
  { id: 4, category: "Social", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Glamour" },
  { id: 5, category: "Novias", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Preparación Novia" },
  { id: 6, category: "Editorial", img: "https://images.unsplash.com/photo-1586445581567-33f7d13c4731?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Color Creativo" }
];

export default function App() {
  const [filter, setFilter] = useState('Todos');
  
  const categories = ['Todos', 'Novias', 'Social', 'Editorial'];

  const filteredPortfolio = filter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-[#faf8fc] font-sans text-gray-800">
      
      {/* NAVEGACIÓN */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#e2d1f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0c1f3d] to-[#5c3482]">
                {personalInfo.name}
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-[#225b9e] hover:text-[#5c3482] transition-colors font-medium">Inicio</a>
              <a href="#sobre-mi" className="text-[#225b9e] hover:text-[#5c3482] transition-colors font-medium">Sobre Mí</a>
              <a href="#servicios" className="text-[#225b9e] hover:text-[#5c3482] transition-colors font-medium">Servicios</a>
              <a href="#portafolio" className="text-[#225b9e] hover:text-[#5c3482] transition-colors font-medium">Portafolio</a>
              <a href="#contacto" className="text-[#225b9e] hover:text-[#5c3482] transition-colors font-medium">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* SECCIÓN HERO (Inicio) */}
      <section id="inicio" className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#bed4f5]/40 to-[#e6d2f5]/50 -z-10"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#8cb1e3]/20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#d4b5ec]/30 blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-[#0c1f3d] mb-6 tracking-tight">
            Descubre tu <span className="text-[#5c3482]">Mejor Versión</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[#225b9e] max-w-3xl mx-auto font-light leading-relaxed">
            {personalInfo.tagline}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#portafolio" className="px-8 py-3 rounded-full bg-[#5c3482] text-white font-medium hover:bg-[#40225c] transition-all shadow-lg shadow-[#5c3482]/30 flex items-center">
              Ver Trabajos <ChevronRightIcon className="ml-2 w-5 h-5" />
            </a>
            <a href="#contacto" className="px-8 py-3 rounded-full bg-white text-[#225b9e] font-medium border border-[#8cb1e3] hover:bg-[#bed4f5]/30 transition-all shadow-sm">
              Agendar Cita
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN SOBRE MÍ */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#588bce] to-[#9f6ec2] rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Maquilladora trabajando" 
                  className="relative rounded-2xl shadow-xl z-10 w-full object-cover h-[500px]"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold tracking-widest text-[#588bce] uppercase mb-2">Conóceme</h2>
              <h3 className="text-3xl font-serif font-bold text-[#0c1f3d] mb-6">El arte detrás del pincel</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center text-[#40225c]">
                  <StarIcon className="w-5 h-5 text-[#9f6ec2] mr-3" />
                  <span className="font-medium">Productos de Alta Gama (Cruelty Free)</span>
                </div>
                <div className="flex items-center text-[#40225c]">
                  <StarIcon className="w-5 h-5 text-[#9f6ec2] mr-3" />
                  <span className="font-medium">Higiene y Sanitización Estricta</span>
                </div>
                <div className="flex items-center text-[#40225c]">
                  <StarIcon className="w-5 h-5 text-[#9f6ec2] mr-3" />
                  <span className="font-medium">Atención Personalizada a Domicilio o Estudio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <section id="servicios" className="py-20 bg-[#f4f7fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#9f6ec2] uppercase mb-2">Especialidades</h2>
            <h3 className="text-3xl font-serif font-bold text-[#0c1f3d] mb-4">Servicios Diseñados para Ti</h3>
            <p className="text-gray-600 text-lg">
              Cada rostro es un lienzo único. Ofrezco distintos paquetes adaptados al nivel de detalle y duración que requiere tu evento especial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-[#e6d2f5]/50 group">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-[#40225c] mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0c1f3d] mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PORTAFOLIO */}
      <section id="portafolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[#588bce] uppercase mb-2">Mi Trabajo</h2>
            <h3 className="text-3xl font-serif font-bold text-[#0c1f3d] mb-8">Portafolio Destacado</h3>
            
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? 'bg-[#5c3482] text-white shadow-md' 
                      : 'bg-[#f4f7fc] text-[#40225c] hover:bg-[#d4b5ec]/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100 cursor-pointer shadow-md">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f3d]/90 via-[#0c1f3d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#bed4f5] text-sm font-bold uppercase tracking-wider mb-1">{item.category}</span>
                  <h4 className="text-white text-xl font-serif">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="py-20 bg-[#0c1f3d] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#225b9e]/30 blur-[100px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#5c3482]/40 blur-[100px] -z-0"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-[#e6d2f5]">Hablemos de tu próximo look</h2>
              <p className="text-[#8cb1e3] mb-10 text-lg">
                ¿Tienes un evento importante pronto? Completa el formulario o contáctame directamente a través de mis redes. Estaré encantada de asesorarte.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#225b9e]/50 flex items-center justify-center mr-4">
                    <PhoneIcon className="text-[#bed4f5] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8cb1e3]">Teléfono / WhatsApp</p>
                    <p className="font-medium text-white">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#225b9e]/50 flex items-center justify-center mr-4">
                    <MailIcon className="text-[#bed4f5] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8cb1e3]">Correo Electrónico</p>
                    <p className="font-medium text-white">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#5c3482]/50 flex items-center justify-center mr-4">
                    <InstagramIcon className="text-[#e6d2f5] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#d4b5ec]">Instagram</p>
                    <p className="font-medium text-white">{personalInfo.instagram}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#5c3482]/50 flex items-center justify-center mr-4">
                    <MapPinIcon className="text-[#e6d2f5] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#d4b5ec]">Ubicación</p>
                    <p className="font-medium text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-800">
              <h3 className="text-2xl font-bold text-[#0c1f3d] mb-6">Envía un Mensaje</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9f6ec2] focus:border-transparent outline-none bg-[#f8f9fa]" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo o WhatsApp</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#588bce] focus:border-transparent outline-none bg-[#f8f9fa]" placeholder="Para poder responderte" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Evento / Consulta</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9f6ec2] focus:border-transparent outline-none bg-[#f8f9fa]">
                    <option>Maquillaje para Novia</option>
                    <option>Maquillaje Social / Fiesta</option>
                    <option>Otra consulta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje o Detalles de la fecha</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#588bce] focus:border-transparent outline-none bg-[#f8f9fa]" placeholder="Cuéntame sobre la fecha, hora y estilo que buscas..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#0c1f3d] to-[#5c3482] hover:from-[#225b9e] hover:to-[#8250ab] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md">
                  Enviar Consulta
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050d1a] py-8 border-t border-[#225b9e]/30 text-center text-sm text-[#8cb1e3]">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
          <p className="mt-2 text-[#588bce]/70">Diseñado con los colores elegidos especialmente para ti.</p>
        </div>
      </footer>

    </div>
  );
}