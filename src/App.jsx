import React, { useState } from 'react';

// --- ICONOS SVG (Sin dependencias externas para evitar errores) ---
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
  name: "Blush & Glow", 
  tagline: "Resaltando tu luz propia con el poder del maquillaje",
  about: "Soy Monique, una maquilladora profesional apasionada por el arte de transformar y realzar la belleza natural que cada persona posee. Con años de experiencia en el sector, mi enfoque se basa en escuchar las necesidades de mis clientes y utilizar productos de la más alta calidad para garantizar acabados impecables y duraderos. Creo firmemente que el maquillaje no es para esconder, sino para empoderar y hacerte brillar en tus momentos más importantes.",
  phone: "+56 9 6716 2874",
  email: "moniquehidalgo28@gmail.com",
  location: "Los Andes, Chile",
  instagram: "@_blush_y_glow_",
  instagramLink: "https://www.instagram.com/_blush_y_glow_?igsh=bTBveWRuOGd3eTY4",
  logo: "/Logo_monique.jpg",
  logoAnimado: "/Logo_animado.jpeg"
};

const services = [
  {
    id: 1,
    title: "Maquillaje para Novias",
    description: "Un servicio integral y personalizado para el día más importante. Incluye una sesión de prueba previa para diseñar el look perfecto, preparación profunda de la piel con técnicas de skincare avanzado, y el uso de productos a prueba de agua y de larga duración (HD) para que luzcas radiante de principio a fin.",
    icon: <HeartIcon className="w-8 h-8" />,
    color: "bg-[#fce4ec]" // Rosa pastel suave
  },
  {
    id: 2,
    title: "Maquillaje Social",
    description: "Ideal para graduaciones, galas, fiestas o eventos de día/noche. Adaptamos el estilo a tu vestuario y tipo de evento, ya sea que busques un look sutil y luminoso ('no-makeup makeup') o un estilo dramático y audaz con ojos ahumados y contornos definidos.",
    icon: <SparklesIcon className="w-8 h-8" />,
    color: "bg-[#f8bbd0]" // Rosa pastel intermedio
  },
  {
    id: 3,
    title: "Maquillaje Editorial y Moda",
    description: "Servicio especializado para sesiones fotográficas, revistas, pasarelas o producciones audiovisuales. Trabajo en conjunto con directores de arte y fotógrafos para crear looks creativos, vanguardistas o de época, adaptados a la iluminación de estudio.",
    icon: <CameraIcon className="w-8 h-8" />,
    color: "bg-[#f48fb1]" // Rosa más vibrante
  }
];

// --- GALERÍA DEL PORTAFOLIO ---
// Categorías basadas en los nombres exactos de tus archivos
const portfolioItems = [
  { id: 1, category: "Día", img: "/Maquillaje_de_día.jpeg", title: "Look de Día" },
  { id: 2, category: "Noche", img: "/Maquillaje_de_noche.jpeg", title: "Look de Noche" },
  { id: 3, category: "Noche", img: "/Maquillaje_de_noche1.jpeg", title: "Look de Noche" },
  { id: 4, category: "Bodas", img: "/Maquillaje_de_bodas.jpeg", title: "Novia Radiante" },
  { id: 5, category: "Estudio", img: "/maquillaje_de_estudio.jpeg", title: "Retrato de Estudio" },
  { id: 6, category: "Estudio", img: "/maquillaje_de_estudio1.jpeg", title: "Retrato de Estudio" },
  { id: 7, category: "Exterior", img: "/Maquillaje_de_exterior.jpeg", title: "Sesión Exterior" },
  { id: 8, category: "Exterior", img: "/Maquillaje_de_exterior1.jpeg", title: "Sesión Exterior" },
  { id: 9, category: "Editorial", img: "/Maquillaje_editorial.jpeg", title: "Look Editorial" },
  { id: 10, category: "Editorial", img: "/Maquillaje_editorial1.jpeg", title: "Look Editorial" },
  { id: 11, category: "Vanguardista", img: "/Maquillaje_vanguardista.jpeg", title: "Arte y Vanguardia" },
  { id: 12, category: "Vanguardista", img: "/Maquillaje_vanguardista1.jpeg", title: "Arte y Vanguardia" },
  { id: 13, category: "Tonos Rosados", img: "/Tonos rosados.jpeg", title: "Tonos Rosados" },
  { id: 14, category: "Tonos Rosados", img: "/Tonos rosados1.jpeg", title: "Tonos Rosados" },
  { id: 15, category: "Natural", img: "/Imagen11.jpeg", title: "Maquillaje Sutil" },
  { id: 16, category: "Natural", img: "/Imagen15.jpeg", title: "Maquillaje Sutil" }
];

export default function App() {
  const [filter, setFilter] = useState('Todos');
  
  // Estado para guardar lo que el usuario escribe en el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    servicio: 'Maquillaje para Novia',
    mensaje: ''
  });

  // Función que actualiza el estado cada vez que el usuario teclea algo
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // La magia que toma los datos y abre WhatsApp
  const enviarWhatsApp = (e) => {
    e.preventDefault(); 
    const numeroLimpio = personalInfo.phone.replace(/[^0-9]/g, ''); 
    const mensajeTexto = `¡Hola! Vengo desde tu portafolio web. 💖\n\n*Mi nombre es:* ${formData.nombre}\n*Me interesa:* ${formData.servicio}\n*Mi teléfono/correo:* ${formData.contacto}\n\n*Detalles de mi fecha/consulta:* ${formData.mensaje}`;
    const mensajeCodificado = encodeURIComponent(mensajeTexto);
    window.open(`https://wa.me/${numeroLimpio}?text=${mensajeCodificado}`, '_blank');
  };

  const categories = ['Todos', 'Día', 'Noche', 'Bodas', 'Estudio', 'Exterior', 'Editorial', 'Vanguardista', 'Tonos Rosados', 'Natural'];

  const filteredPortfolio = filter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-[#fff0f6] font-sans text-gray-800">
      
      {/* NAVEGACIÓN */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#f8bbd0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <img src={personalInfo.logoAnimado} alt="Logo Monique" className="h-12 w-auto mr-3 rounded-full" />
              <span className="font-serif text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ec407a] to-[#ab47bc]">
                {personalInfo.name}
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-[#ec407a] hover:text-[#ab47bc] transition-colors font-medium">Inicio</a>
              <a href="#sobre-mi" className="text-[#ec407a] hover:text-[#ab47bc] transition-colors font-medium">Sobre Mí</a>
              <a href="#servicios" className="text-[#ec407a] hover:text-[#ab47bc] transition-colors font-medium">Servicios</a>
              <a href="#portafolio" className="text-[#ec407a] hover:text-[#ab47bc] transition-colors font-medium">Portafolio</a>
              <a href="#contacto" className="text-[#ec407a] hover:text-[#ab47bc] transition-colors font-medium">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* SECCIÓN HERO (Inicio) */}
      <section id="inicio" className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f8bbd0]/40 to-[#e1bee7]/50 -z-10"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#f48fb1]/20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#ce93d8]/30 blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-[#880e4f] mb-6 tracking-tight">
            Descubre tu <span className="text-[#d81b60]">Mejor Versión</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[#ec407a] max-w-3xl mx-auto font-light leading-relaxed">
            {personalInfo.tagline}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#portafolio" className="px-8 py-3 rounded-full bg-[#d81b60] text-white font-medium hover:bg-[#ad1457] transition-all shadow-lg shadow-[#d81b60]/30 flex items-center">
              Ver Trabajos <ChevronRightIcon className="ml-2 w-5 h-5" />
            </a>
            <a href="#contacto" className="px-8 py-3 rounded-full bg-white text-[#ec407a] font-medium border border-[#f48fb1] hover:bg-[#fce4ec]/30 transition-all shadow-sm">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ec407a] to-[#ab47bc] rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
                <img 
                  src="/Perfil.jpeg" 
                  alt="Maquilladora trabajando" 
                  className="relative rounded-2xl shadow-xl z-10 w-full object-cover h-[500px]"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold tracking-widest text-[#ec407a] uppercase mb-2">Conóceme</h2>
              <h3 className="text-3xl font-serif font-bold text-[#880e4f] mb-6">El arte detrás del pincel</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center text-[#ad1457]">
                  <StarIcon className="w-5 h-5 text-[#d81b60] mr-3" />
                  <span className="font-medium">Productos de Alta Gama (Cruelty Free)</span>
                </div>
                <div className="flex items-center text-[#ad1457]">
                  <StarIcon className="w-5 h-5 text-[#d81b60] mr-3" />
                  <span className="font-medium">Higiene y Sanitización Estricta</span>
                </div>
                <div className="flex items-center text-[#ad1457]">
                  <StarIcon className="w-5 h-5 text-[#d81b60] mr-3" />
                  <span className="font-medium">Atención Personalizada a Domicilio o Estudio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <section id="servicios" className="py-20 bg-[#fce4ec]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#d81b60] uppercase mb-2">Especialidades</h2>
            <h3 className="text-3xl font-serif font-bold text-[#880e4f] mb-4">Servicios Diseñados para Ti</h3>
            <p className="text-gray-600 text-lg">
              Cada rostro es un lienzo único. Ofrezco distintos paquetes adaptados al nivel de detalle y duración que requiere tu evento especial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-[#f8bbd0]/50 group">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-[#ad1457] mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#880e4f] mb-4">{service.title}</h4>
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
            <h2 className="text-sm font-bold tracking-widest text-[#ec407a] uppercase mb-2">Mi Trabajo</h2>
            <h3 className="text-3xl font-serif font-bold text-[#880e4f] mb-8">Portafolio Destacado</h3>
            
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? 'bg-[#d81b60] text-white shadow-md'
                      : 'bg-[#fce4ec] text-[#ad1457] hover:bg-[#f8bbd0]/40'
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#880e4f]/90 via-[#880e4f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#f8bbd0] text-sm font-bold uppercase tracking-wider mb-1">{item.category}</span>
                  <h4 className="text-white text-xl font-serif">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="py-20 bg-[#880e4f] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ec407a]/30 blur-[100px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#ab47bc]/40 blur-[100px] -z-0"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-[#f8bbd0]">Hablemos de tu próximo look</h2>
              <p className="text-[#fce4ec] mb-10 text-lg">
                ¿Tienes un evento importante pronto? Completa el formulario o contáctame directamente a través de mis redes. Estaré encantada de asesorarte.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#ec407a]/50 flex items-center justify-center mr-4">
                    <PhoneIcon className="text-[#fce4ec] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#f8bbd0]">Teléfono / WhatsApp</p>
                    <p className="font-medium text-white">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#ec407a]/50 flex items-center justify-center mr-4">
                    <MailIcon className="text-[#fce4ec] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#f8bbd0]">Correo Electrónico</p>
                    <p className="font-medium text-white">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#ab47bc]/50 flex items-center justify-center mr-4">
                    <InstagramIcon className="text-[#e1bee7] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#f8bbd0]">Instagram</p>
                    <a 
                      href={personalInfo.instagramLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium text-white hover:text-[#f8bbd0] transition-colors"
                    >
                      {personalInfo.instagram}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#ab47bc]/50 flex items-center justify-center mr-4">
                    <MapPinIcon className="text-[#e1bee7] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#f8bbd0]">Ubicación</p>
                    <p className="font-medium text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-800">
              <h3 className="text-2xl font-bold text-[#880e4f] mb-6">Envía un Mensaje</h3>
              
              <form className="space-y-4" onSubmit={enviarWhatsApp}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d81b60] focus:border-transparent outline-none bg-[#fff0f6]"
                    placeholder="Tu nombre" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo o WhatsApp</label>
                  <input 
                    type="text" 
                    name="contacto"
                    value={formData.contacto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ec407a] focus:border-transparent outline-none bg-[#fff0f6]"
                    placeholder="Para poder responderte" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Evento / Consulta</label>
                  <select 
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d81b60] focus:border-transparent outline-none bg-[#fff0f6]"
                  >
                    <option value="Maquillaje para Novia">Maquillaje para Novia</option>
                    <option value="Maquillaje Social / Fiesta">Maquillaje Social / Fiesta</option>
                    <option value="Editorial / Producción">Editorial / Producción</option>
                    <option value="Clases de Automaquillaje">Clases de Automaquillaje</option>
                    <option value="Otra consulta">Otra consulta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje o Detalles de la fecha</label>
                  <textarea 
                    rows="4" 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ec407a] focus:border-transparent outline-none bg-[#fff0f6]" 
                    placeholder="Cuéntame sobre la fecha, hora y estilo que buscas..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#880e4f] to-[#d81b60] hover:from-[#ad1457] hover:to-[#c2185b] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md">
                  Enviar Consulta por WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3e2723] py-8 border-t border-[#ec407a]/30 text-center text-sm text-[#f8bbd0]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <img src={personalInfo.logo} alt="Logo Monique" className="h-16 w-auto mb-4 rounded-full" />
          <p>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
          <p className="mt-2 text-[#ec407a]/70">Diseñado con mucho amor y tonos rosados.</p>
        </div>
      </footer>

    </div>
  );
}