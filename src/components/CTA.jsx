import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <div className="w-full bg-white dark:bg-bixar-dark py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl overflow-hidden relative shadow-2xl">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1218] via-[#10202e] to-[#0a485a] z-0" />
          
          <div className="relative z-10 py-24 px-6 sm:px-12 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-10">
              Conversemos. Te acompañamos desde la idea inicial hasta la entrega de obra.
            </p>
            <button className="flex items-center gap-2 bg-bixar-green hover:bg-[#07a87d] text-gray-900 px-8 py-3.5 rounded-md font-bold transition-colors">
              Hablemos
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
