import { Mail, Phone, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 font-mono">
      {/* Animated Background with Waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1763cb] to-white">
        {/* Dynamic Wave Shapes */}
        <div className="absolute inset-0">
          {/* Wave 1 */}
          <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-gradient-to-br from-[#2563eb]/40 to-[#1763cb]/60 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite] transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Wave 2 */}
          <div className="absolute top-1/3 right-0 w-[700px] h-[500px] bg-gradient-to-bl from-[#3b82f6]/50 to-[#1e40af]/40 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite_reverse] transform translate-x-1/3"></div>

          {/* Wave 3 */}
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-[#60a5fa]/30 to-[#2563eb]/50 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] transform translate-y-1/3"></div>

          {/* Wave 4 */}
          <div className="absolute top-2/3 right-1/4 w-[500px] h-[350px] bg-gradient-to-tl from-[#1d4ed8]/40 to-[#3730a3]/30 rounded-full blur-2xl animate-[float_7s_ease-in-out_infinite_reverse]"></div>

          {/* Wave 5 - Smaller accent */}
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[300px] bg-gradient-to-r from-[#4f46e5]/35 to-[#6366f1]/25 rounded-full blur-xl animate-[float_9s_ease-in-out_infinite] transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_4s_ease-in-out_infinite]"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gray-900/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">S</span>
              </div>
              <h1 className="text-white text-2xl font-bold font-mono">SAH</h1>
            </div>

            <h2 className="text-white text-xl font-semibold mb-3">Développeur Web Fullstack</h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Création d'applications web modernes et performantes. Spécialisation en développement frontend et backend pour
              donner vie à vos projets digitaux.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:contact@s4h.online" className="text-gray-300 hover:text-white transition-colors flex-1">
                contact@s4h.online
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors">
              <Phone className="w-5 h-5 text-green-400" />
              <a href="tel:+33762632743" className="text-gray-300 hover:text-white transition-colors flex-1">
                +33 7 62 63 27 43
              </a>
            </div>

            {/* LinkedIn */}
            <Button asChild className="w-full bg-[#0077b5] hover:bg-[#005885] text-white border-0 h-12">
              <a
                href="https://www.linkedin.com/in/arie-roumani-91468b1b0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Linkedin className="w-5 h-5" />
                Profil LinkedIn
              </a>
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200/50 font-mono">
            <p className="text-center text-gray-200 text-xs">Disponible pour nouveaux projets</p>
          </div>
        </div>
      </div>
    </div>
  )
}
