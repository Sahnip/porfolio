import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Mock data pour les projets - même structure que la page listing
const projects = [
  {
    id: "ecommerce-app",
    title: "E-commerce Platform",
    description:
      "Une plateforme e-commerce complète développée avec les dernières technologies web. Cette application offre une expérience utilisateur fluide avec un système de panier avancé, intégration de paiements sécurisés via Stripe, gestion complète des commandes et interface d'administration. L'architecture modulaire permet une scalabilité optimale et des performances élevées.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce-app",
    features: [
      "Système de panier et checkout sécurisé",
      "Gestion des utilisateurs et authentification",
      "Interface d'administration complète",
      "Intégration de paiements Stripe",
      "Gestion des stocks en temps réel",
      "Responsive design optimisé",
    ],
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description:
      "Application collaborative de gestion de tâches conçue pour optimiser la productivité des équipes. Intègre des fonctionnalités de temps réel grâce à Socket.io, permettant une synchronisation instantanée entre tous les utilisateurs. L'interface intuitive facilite la création, l'assignation et le suivi des tâches avec un système de notifications push.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
    demoUrl: "https://demo-tasks.example.com",
    githubUrl: "https://github.com/username/task-manager",
    features: [
      "Collaboration en temps réel",
      "Système de notifications push",
      "Gestion des équipes et permissions",
      "Tableaux Kanban interactifs",
      "Suivi du temps et rapports",
      "API REST complète",
    ],
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Dashboard météorologique avancé offrant des prévisions détaillées et des visualisations interactives. Utilise l'API OpenWeather pour des données en temps réel et D3.js pour créer des graphiques dynamiques. L'interface responsive s'adapte parfaitement à tous les appareils avec des cartes interactives et des animations fluides.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "D3.js", "OpenWeather API", "Tailwind CSS", "Leaflet", "Chart.js"],
    demoUrl: "https://demo-weather.example.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    features: [
      "Prévisions météo détaillées",
      "Cartes interactives avec Leaflet",
      "Graphiques animés avec D3.js",
      "Géolocalisation automatique",
      "Historique des données météo",
      "Alertes météorologiques",
    ],
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description:
      "Système de gestion de contenu moderne spécialement conçu pour les blogs. Intègre un éditeur riche WYSIWYG, optimisation SEO automatique et gestion des médias. L'architecture headless avec Sanity permet une flexibilité maximale et des performances optimales. Interface d'administration intuitive pour une gestion de contenu simplifiée.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Sanity", "TypeScript", "Vercel", "React Hook Form"],
    demoUrl: "https://demo-blog.example.com",
    githubUrl: "https://github.com/username/blog-cms",
    features: [
      "Éditeur WYSIWYG avancé",
      "Optimisation SEO automatique",
      "Gestion des médias intégrée",
      "Prévisualisation en temps réel",
      "Système de commentaires",
      "Analytics intégrés",
    ],
  },
  {
    id: "crypto-tracker",
    title: "Crypto Tracker",
    description:
      "Application de suivi des cryptomonnaies en temps réel avec des fonctionnalités avancées d'analyse technique. Intègre l'API CoinGecko pour des données de marché précises et Chart.js pour des visualisations interactives. Système d'alertes personnalisables et portfolio tracking pour un suivi complet des investissements.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Chart.js", "CoinGecko API", "Redux", "Material-UI", "WebSocket"],
    demoUrl: "https://demo-crypto.example.com",
    githubUrl: "https://github.com/username/crypto-tracker",
    features: [
      "Données en temps réel",
      "Graphiques techniques avancés",
      "Système d'alertes de prix",
      "Suivi de portfolio",
      "Analyse de tendances",
      "Interface responsive",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Site portfolio moderne et responsive mettant en valeur les compétences et réalisations. Utilise Framer Motion pour des animations fluides et engageantes. Optimisé pour les performances avec Next.js et déployé sur Vercel. Design minimaliste et élégant avec une attention particulière à l'expérience utilisateur.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
    demoUrl: "https://demo-portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio-website",
    features: [
      "Animations Framer Motion",
      "Design responsive élégant",
      "Optimisation des performances",
      "SEO optimisé",
      "Formulaire de contact",
      "Mode sombre/clair",
    ],
  },
]

// Fonction pour obtenir l'icône de technologie
const getTechIcon = (tech: string) => {
  const icons: { [key: string]: string } = {
    React: "⚛️",
    "Next.js": "▲",
    "Vue.js": "💚",
    TypeScript: "🔷",
    "Node.js": "🟢",
    "Tailwind CSS": "🎨",
    Prisma: "🔺",
    MongoDB: "🍃",
    PostgreSQL: "🐘",
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
    Express: "🚀",
    JWT: "🔐",
    Leaflet: "🗺️",
    "React Hook Form": "📝",
    "Material-UI": "🎨",
    WebSocket: "🔌",
  }
  return icons[tech] || "🔧"
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen relative overflow-hidden p-4 font-mono">
      {/* Animated Background with Waves - Identique aux autres pages */}
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
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-6">
          <Button asChild variant="outline" className="bg-gray-800/50 border-white/30 text-white hover:bg-gray-700/50">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux projets
            </Link>
          </Button>
        </div>

        {/* Project Details */}
        <div className="bg-gray-500/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Project Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Project Content */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed mb-6">{project.description}</p>

            {/* Technologies */}
            <div className="mb-8">
              <h2 className="text-white text-xl font-semibold mb-4">Technologies utilisées</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg text-sm text-gray-300 border border-white/20"
                  >
                    <span className="text-lg">{getTechIcon(tech)}</span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div className="mb-8">
                <h2 className="text-white text-xl font-semibold mb-4">Fonctionnalités principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-white/10"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="flex-1 bg-blue-500/70 hover:bg-blue-600/70 text-white border border-white/10 h-12"
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <ExternalLink className="w-5 h-5" />
                  Voir la démo live
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 bg-gray-800/50 border-white/30 text-white hover:bg-gray-700/50 h-12"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  Code source GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8">
          <div className="bg-gray-500/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 text-center">
            <p className="text-gray-300 text-sm mb-4">
              Intéressé par un projet similaire ? Contactez-moi pour discuter de vos besoins.
            </p>
            <Button asChild className="bg-blue-500/70 hover:bg-blue-600/70 text-white border border-white/10">
              <Link href="mailto:contact@s4h.online">Démarrer un projet</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
