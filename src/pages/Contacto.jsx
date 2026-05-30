import { Mail, Phone, MapPin, Send } from "lucide-react";

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Contacto() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-bixar-dark transition-colors duration-300 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
        
        {/* Header Content */}
        <div className="max-w-3xl mb-16">
          <h3 className="text-[#00B4D8] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            CONTACTO
          </h3>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-6">
            Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#09C895]">próximo proyecto</span>.
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-normal">
            Contanos qué necesitás. Coordinamos una reunión sin compromiso para entender alcance,
            plazos y presupuesto.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-gray-800">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 dark:text-gray-200 block">
                      Nombre <span className="text-[#00B4D8]">*</span>
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 dark:text-gray-200 block">
                      Email <span className="text-[#00B4D8]">*</span>
                    </label>
                    <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 dark:text-gray-200 block">
                      Teléfono
                    </label>
                    <input type="tel" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 dark:text-gray-200 block">
                      Empresa
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900 dark:text-gray-200 block">
                    Rubro de interés
                  </label>
                  <select className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all cursor-pointer">
                    <option>Ingeniería</option>
                    <option>Arquitectura</option>
                    <option>Construcción</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900 dark:text-gray-200 block">
                    Contanos tu proyecto
                  </label>
                  <textarea rows="5" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all resize-none"></textarea>
                </div>

                <button type="button" className="inline-flex items-center gap-2 bg-[#186DD4] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold text-sm transition-colors shadow-sm mt-2">
                  Enviar mensaje
                  <Send size={16} strokeWidth={2.5} className="ml-1" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Card */}
            <div className="bg-[#161616] rounded-2xl p-8 md:p-10 text-white shadow-xl">
              <h4 className="text-xl font-bold mb-8">Información directa</h4>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <Mail className="text-[#09C895] mt-1" size={20} strokeWidth={2} />
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-1">Email</span>
                    <a href="mailto:contacto@bixar.com" className="text-white hover:text-[#00B4D8] text-sm transition-colors">contacto@bixar.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-[#09C895] mt-1" size={20} strokeWidth={2} />
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-1">Teléfono</span>
                    <a href="tel:+541100000000" className="text-white hover:text-[#00B4D8] text-sm transition-colors">+54 11 0000 0000</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#09C895] mt-1" size={20} strokeWidth={2} />
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-1">Oficina</span>
                    <span className="text-white text-sm block">Av. Libertador 1234, CABA</span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-[#262626] hover:bg-[#333] rounded-md flex items-center justify-center text-gray-300 transition-colors">
                  <LinkedinIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#262626] hover:bg-[#333] rounded-md flex items-center justify-center text-gray-300 transition-colors">
                  <InstagramIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#262626] hover:bg-[#333] rounded-md flex items-center justify-center text-gray-300 transition-colors">
                  <FacebookIcon size={18} />
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-58.55%2C-34.68%2C-58.30%2C-34.50&amp;layer=mapnik" 
                style={{ border: 'none' }}
                title="Mapa de oficinas Bixar"
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
