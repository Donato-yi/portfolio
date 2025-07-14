"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Star,
  Code,
  Database,
  Cloud,
  Cpu,
  Brain,
  Briefcase,
  GraduationCap,
  User,
  MessageSquare,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SCSS/Sass",
      "Tailwind CSS",
      "Styled Components",
      "Material-UI",
      "Chakra UI",
      "Bootstrap",
      "React Native",
      "Flutter",
      "Gatsby.js",
      "Nuxt.js",
      "Svelte",
      "Redux",
      "MobX",
      "Zustand",
      "React Query",
      "SWR",
      "Framer Motion",
      "Three.js",
      "D3.js",
      "Chart.js",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "PHP",
      "Laravel",
      "Python",
      "Django",
      "FastAPI",
      "Java",
      "Spring Boot",
      "C#",
      ".NET Core",
      "Ruby on Rails",
      "Go",
      "Rust",
      "GraphQL",
      "REST APIs",
      "Socket.io",
      "Microservices",
      "Serverless",
      "WebSockets",
      "JWT",
      "OAuth",
    ],
    database: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "CouchDB",
      "SQLite",
      "MariaDB",
      "Cassandra",
      "Neo4j",
      "InfluxDB",
      "Elasticsearch",
      "Firebase Firestore",
      "Supabase",
      "PlanetScale",
      "Prisma",
      "TypeORM",
      "Mongoose",
      "Sequelize",
      "Knex.js",
    ],
    cloud: [
      "AWS (EC2, S3, Lambda, ECS, RDS)",
      "Google Cloud Platform",
      "Azure",
      "Vercel",
      "Netlify",
      "Heroku",
      "DigitalOcean",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CloudFormation",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "GitLab CI",
      "Nginx",
      "Apache",
      "Load Balancing",
      "CDN",
    ],
    thirdParty: [
      "Stripe",
      "PayPal",
      "Twilio",
      "SendGrid",
      "Mailgun",
      "Auth0",
      "Firebase Auth",
      "Google Analytics",
      "Mixpanel",
      "Sentry",
      "LogRocket",
      "Intercom",
      "Zendesk",
      "Slack API",
      "Discord API",
      "Twitter API",
      "Google Maps API",
      "Mapbox",
      "Cloudinary",
      "Algolia",
    ],
    ai: [
      "OpenAI GPT",
      "Claude",
      "Gemini",
      "Hugging Face",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter",
      "LangChain",
      "Vector Databases",
      "RAG",
      "Fine-tuning",
      "Computer Vision",
      "NLP",
      "Machine Learning",
      "Deep Learning",
    ],
  }

  const experiences = [
    {
      company: "Embrace",
      role: "Senior Full Stack Developer",
      period: "Apr 2021 – Sep 2021",
      description:
        "Built comprehensive dashboard with real-time alerts, dynamic email templates, and advanced search/filter functionality.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      company: "DES REVES, Tokyo",
      role: "Lead Mobile Developer",
      period: "Feb 2021 – Mar 2021",
      description:
        "Developed food delivery platform with real-time tracking, payment integration, and multi-vendor support.",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
    },
    {
      company: "Surefront",
      role: "Senior Frontend Engineer",
      period: "Mar 2020 – Dec 2020",
      description:
        "Built complex B2B portal with sophisticated role-based access control and multi-tenant architecture.",
      technologies: ["React", "TypeScript", "Redux", "SCSS"],
    },
    {
      company: "Estey-Hoover",
      role: "Technical Lead",
      period: "Mar 2019 – Jan 2020",
      description:
        "Led team of 14 developers building crypto trading platform with real-time data visualization and advanced charting.",
      technologies: ["React", "MobX", "Styled Components", "TradingView", "WebSockets"],
    },
    {
      company: "Superteam, Tokyo",
      role: "Mobile Solutions Architect",
      period: "Jun 2018 – Apr 2019",
      description:
        "Delivered hybrid mobile solutions including ride-sharing and scheduling apps with GraphQL integration.",
      technologies: ["React Native", "Django", "GraphQL", "PostgreSQL"],
    },
    {
      company: "Pivotal, Tokyo",
      role: "Full Stack Engineer",
      period: "Apr 2013 – Dec 2017",
      description: "Developed scalable web applications and maintained legacy systems while modernizing tech stack.",
      technologies: ["React", "PHP", "MySQL", "HTML5", "CSS3"],
    },
  ]

  const projects = [
    {
      title: "Crypto Trading Platform",
      description:
        "Real-time cryptocurrency trading platform with advanced charting, portfolio management, and automated trading strategies.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "MobX", "WebSockets", "TradingView", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Food Delivery App",
      description:
        "Multi-vendor food delivery platform with real-time tracking, payment processing, and restaurant management system.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
      github: "#",
      live: "#",
    },
    {
      title: "B2B Enterprise Portal",
      description:
        "Complex enterprise portal with role-based access control, document management, and workflow automation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "Redux", "Node.js", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Intelligent dashboard with predictive analytics, automated insights, and natural language querying capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "OpenAI", "Python", "TensorFlow", "D3.js"],
      github: "#",
      live: "#",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content:
        "Donato delivered exceptional results on our trading platform. His technical expertise and leadership skills made him invaluable to our team.",
      rating: 5,
    },
    {
      name: "Hiroshi Tanaka",
      role: "Product Manager at DES REVES",
      content:
        "Working with Donato was a game-changer. He transformed our food delivery concept into a robust, scalable platform that exceeded expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO at Surefront",
      content:
        "Donato's ability to handle complex B2B requirements while maintaining clean, maintainable code is remarkable. Highly recommended.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Donato Yi
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "experience", "projects", "testimonials", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <div className="px-4 py-2 space-y-2">
              {["hero", "about", "experience", "projects", "testimonials", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-white"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Senior Full Stack
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}
                + AI Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Building innovative web and mobile solutions since 2009. Specializing in modern JavaScript, AI
              integration, and scalable architectures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* About & Education Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate full-stack developer with over 14 years of experience building cutting-edge web and mobile
              applications. I specialize in modern JavaScript frameworks, AI integration, and leading high-performing
              development teams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <User className="mr-2 h-5 w-5 text-purple-400" />
                    Professional Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>
                    Started my development journey in 2009, building websites and hybrid mobile solutions. Over the
                    years, I've evolved from a junior developer to a technical leader, managing teams of up to 14 senior
                    developers.
                  </p>
                  <p>
                    My expertise spans the entire development lifecycle - from infrastructure setup and architecture
                    design to deployment and maintenance. I'm passionate about clean code, scalable solutions, and
                    staying current with emerging technologies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-purple-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">University of Tokyo</h3>
                      <p className="text-purple-400">Bachelor of Engineering</p>
                      <p className="text-sm">Computer Science • 2008 - 2011</p>
                    </div>
                    <p>
                      Graduated from one of Japan's most prestigious universities with a strong foundation in computer
                      science fundamentals, algorithms, and software engineering principles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">Technical Skills</h3>

            <div className="grid gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center capitalize">
                        {category === "frontend" && <Code className="mr-2 h-5 w-5 text-purple-400" />}
                        {category === "backend" && <Cpu className="mr-2 h-5 w-5 text-blue-400" />}
                        {category === "database" && <Database className="mr-2 h-5 w-5 text-green-400" />}
                        {category === "cloud" && <Cloud className="mr-2 h-5 w-5 text-yellow-400" />}
                        {category === "thirdParty" && <ExternalLink className="mr-2 h-5 w-5 text-orange-400" />}
                        {category === "ai" && <Brain className="mr-2 h-5 w-5 text-pink-400" />}
                        {category === "thirdParty"
                          ? "3rd Party Services"
                          : category.charAt(0).toUpperCase() + category.slice(1)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work Experience</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              14+ years of professional experience across various industries and technologies
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-white flex items-center">
                          <Briefcase className="mr-2 h-5 w-5 text-purple-400" />
                          {exp.role}
                        </CardTitle>
                        <CardDescription className="text-purple-400 text-lg">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-purple-400 text-purple-400 mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-purple-600/20 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work spanning web applications, mobile solutions, and AI-powered platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-white/10 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What clients and colleagues say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-gray-300 text-base">"{testimonial.content}"</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-purple-400" />
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your next project to life? Let's discuss how I can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Get In Touch</CardTitle>
                  <CardDescription className="text-gray-300">
                    I'm always open to discussing new opportunities and interesting projects.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="mr-3 h-5 w-5 text-purple-400" />
                    <span>Donatoyi8853@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-3 h-5 w-5 text-purple-400" />
                    <span>346 Itsukaichi, Akiruno, Tokyo 190-0164, Japan</span>
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                      <Input
                        placeholder="Last Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Input
                      placeholder="Subject"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Textarea
                      placeholder="Your message..."
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Donato Yi. All rights reserved.</p>
            <p className="mt-2">Senior Full Stack + AI Engineer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
