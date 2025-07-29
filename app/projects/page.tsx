import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data pour les projets - vous pourrez facilement ajouter de nouveaux projets ici
const projects = [
  {
    id: "ecommerce-app",
    title: "E-commerce Platform",
    description: "Plateforme e-commerce moderne avec panier, paiements et gestion des commandes.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "Prisma"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce-app",
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec temps réel et notifications.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://demo-tasks.example.com",
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Dashboard météo avec prévisions détaillées et cartes interactives.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "D3.js", "OpenWeather API", "Tailwind"],
    demoUrl: "https://demo-weather.example.com",
    githubUrl: "https://github.com/username/weather-dashboard",
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description: "Système de gestion de contenu pour blog avec éditeur riche et SEO optimisé.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    demoUrl: "https://demo-blog.example.com",
    githubUrl: "https://github.com/username/blog-cms",
  },
  {
    id: "crypto-tracker",
    title: "Crypto Tracker",
    description: "Suivi des cryptomonnaies en temps réel avec graphiques et alertes de prix.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Chart.js", "CoinGecko API", "Redux"],
    demoUrl: "https://demo-crypto.example.com",
    githubUrl: "https://github.com/username/crypto-tracker",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Site portfolio responsive avec animations et optimisations de performance.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    demoUrl: "https://demo-portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio-website",
  },
]

// Fonction pour obtenir l'icône de technologie (vous pouvez l'étendre)
const getTechIcon = (tech: string) => {
  const icons: { [key: string]: string } = {
    React: "⚛️",
    "Next.js": "▲",
    "Vue.js": "💚",
    TypeScript: "🔷",
    "Node.js": "🟢",
    Tailwind: "🎨",
    Prisma: "🔺",
    MongoDB: "🍃",
    Stripe: "💳",
    "Socket.io": "🔌",
    "D3.js": "📊",
    Sanity: "📝",
    Vercel: "▲",
    "Chart.js": "📈",
    Redux: "🔄",
    "Framer Motion": "🎭",
    "OpenWeather API": "🌤️",
    "CoinGecko API": "🪙",
  }
  return icons[tech] || "🔧"
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden p-4 font-mono">
      {/* Animated Background with Waves - Identique à la page principale */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1763cb] to-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-gradient-to-br from-[#2563eb]/40 to-[#1763cb]/60 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/3 right-0 w-[700px] h-[500px] bg-gradient-to-bl from-[#3b82f6]/50 to-[#1e40af]/40 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite_reverse] transform translate-x-1/3"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-[#60a5fa]/30 to-[#2563eb]/50 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] transform translate-y-1/3"></div>
          <div className="absolute top-2/3 right-1/4 w-[500px] h-[350px] bg-gradient-to-tl from-[#1d4ed8]/40 to-[#3730a3]/30 rounded-full blur-2xl animate-[float_7s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[300px] bg-gradient-to-r from-[#4f46e5]/35 to-[#6366f1]/25 rounded-full blur-xl animate-[float_9s_ease-in-out_infinite] transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_4s_ease-in-out_infinite]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-gray-500/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <Button
                asChild
                variant="outline"
                className="bg-gray-800/50 border-white/30 text-white hover:bg-gray-700/50"
              >
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-lg">S</span>
                </div>
                <h1 className="text-white text-2xl font-bold">Mes Projets</h1>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Découvrez une sélection de mes réalisations en développement web. Chaque projet reflète mon expertise
              technique et ma passion pour créer des solutions innovantes.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-500/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-300 border border-white/20"
                    >
                      <span>{getTechIcon(tech)}</span>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-blue-500/70 hover:bg-blue-600/70 text-white border border-white/10"
                  >
                    <Link href={`/projects/${project.id}`} className="flex items-center justify-center gap-2">
                      Voir le projet
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12">
          <div className="bg-gray-500/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 text-center">
            <p className="text-gray-300 text-sm mb-4">Vous avez un projet en tête ? Discutons-en !</p>
            <Button asChild className="bg-blue-500/70 hover:bg-blue-600/70 text-white border border-white/10">
              <Link href="mailto:contact@s4h.online">Me contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
