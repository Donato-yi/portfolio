/**
 * Projects section component with advanced animations  
 * Showcases portfolio projects with fade-in effects and interactive elements
 */
import React from 'react';
import { ExternalLink, Github, Calendar, Users, Zap, FolderOpen } from 'lucide-react';
import { Button } from './ui/button';
import AnimatedSection from './AnimatedSection';
import { useSound } from '../hooks/useSound';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string[];
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  duration: string;
  teamSize?: string;
  highlights: string[];
}

const Projects: React.FC = () => {
  const { playHoverSound, playClickSound } = useSound();

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Trading Platform",
      description: "Advanced cryptocurrency trading platform with AI-driven market analysis and automated trading strategies.",
      longDescription: [
        "Developed a comprehensive crypto trading platform with real-time market data integration",
        "Implemented AI-powered market analysis using machine learning algorithms for price prediction",
        "Built responsive dashboard with advanced charting capabilities using TradingView",
        "Integrated with multiple cryptocurrency exchanges for seamless trading execution"
      ],
      image: "https://pub-cdn.sider.ai/u/U0GVH7E4YYZ/web-coder/687e94c91acf42c15ca44b15/resource/9b5e1173-fd35-4cfc-aef7-ea913107e030.jpg",
      technologies: ["React", "TypeScript", "Node.js", "TensorFlow", "WebSocket", "TradingView", "AWS"],
      duration: "6 months",
      teamSize: "8 developers",
      highlights: ["Real-time data processing", "AI market analysis", "Multi-exchange integration"]
    },
    {
      id: 2,
      title: "Enterprise B2B Portal",
      description: "Comprehensive business portal with complex role-based access control and workflow management system.",
      longDescription: [
        "Built scalable B2B portal serving over 10,000 enterprise users",
        "Implemented sophisticated role-based access control with granular permissions",
        "Developed workflow management system for complex business processes",
        "Created responsive admin dashboard with advanced reporting capabilities"
      ],
      image: "https://pub-cdn.sider.ai/u/U0GVH7E4YYZ/web-coder/687e94c91acf42c15ca44b15/resource/6cbac079-e29a-4d4d-8589-0aa6a7ff6a2f.jpg",
      technologies: ["React", "TypeScript", "Redux", "Node.js", "PostgreSQL", "AWS", "Docker"],
      duration: "10 months", 
      teamSize: "6 developers",
      highlights: ["Complex user roles", "Workflow automation", "Enterprise scale"]
    },
    {
      id: 3,
      title: "AI-Enhanced Food Delivery App",
      description: "Modern food delivery platform with AI-powered recommendations and real-time order tracking.",
      longDescription: [
        "Developed full-stack food delivery application with intelligent restaurant recommendations",
        "Implemented AI-powered recommendation engine based on user preferences and order history",
        "Built real-time order tracking with GPS integration and push notifications",
        "Created restaurant management dashboard with analytics and inventory tracking"
      ],
      image: "https://pub-cdn.sider.ai/u/U0GVH7E4YYZ/web-coder/687e94c91acf42c15ca44b15/resource/35ec31c0-ac50-4269-89e0-7ae6b12123ba.jpg",
      technologies: ["React Native", "Node.js", "Express", "MongoDB", "OpenAI API", "Google Maps API", "Stripe"],
      duration: "4 months",
      teamSize: "5 developers", 
      highlights: ["AI recommendations", "Real-time tracking", "Mobile-first design"]
    },
    {
      id: 4,
      title: "Cloud-Native Monitoring Dashboard",
      description: "Real-time monitoring and alerting system for enterprise infrastructure with intelligent anomaly detection.",
      longDescription: [
        "Architected cloud-native monitoring solution handling millions of data points daily",
        "Implemented intelligent alerting system with ML-based anomaly detection",
        "Built responsive dashboard with customizable widgets and real-time data visualization",
        "Integrated with popular cloud providers and container orchestration platforms"
      ],
      image: "https://pub-cdn.sider.ai/u/U0GVH7E4YYZ/web-coder/687e94c91acf42c15ca44b15/resource/b5b896c9-7c59-418d-a744-4d40a70f5456.jpg",
      technologies: ["React", "Next.js", "AWS Lambda", "DynamoDB", "Elasticsearch", "Kubernetes", "Grafana"],
      duration: "5 months",
      highlights: ["ML anomaly detection", "Real-time processing", "Cloud-native architecture"]
    },
    {
      id: 5,
      title: "Cross-Platform Scheduling App",
      description: "Hybrid mobile application for appointment scheduling with calendar integration and automated reminders.",
      longDescription: [
        "Developed cross-platform scheduling application using React Native",
        "Integrated with popular calendar services (Google Calendar, Outlook, Apple Calendar)",
        "Implemented automated SMS and email reminder system",
        "Built admin panel for business owners to manage appointments and staff"
      ],
      image: "https://pub-cdn.sider.ai/u/U0GVH7E4YYZ/web-coder/687e94c91acf42c15ca44b15/resource/7a88b563-faba-4735-afff-1aa64017e639.jpg",
      technologies: ["React Native", "Django", "GraphQL", "PostgreSQL", "Expo", "Firebase"],
      duration: "3 months",
      teamSize: "4 developers",
      highlights: ["Cross-platform compatibility", "Calendar integration", "Automated reminders"]
    },
    {
      id: 6,
      title: "Smart Email Template Builder",
      description: "Drag-and-drop email template builder with AI-powered content suggestions and A/B testing capabilities.",
      longDescription: [
        "Created intuitive drag-and-drop email template builder with live preview",
        "Implemented AI-powered content suggestions for improved engagement rates",
        "Built A/B testing framework with statistical significance reporting",
        "Developed template library with responsive design templates"
      ],
      image: "https://pub-cdn.sider.ai/u/U0GVH7E4YYZ/web-coder/687e94c91acf42c15ca44b15/resource/20a9396e-2d1d-45e7-b9d8-950acb79e5fa.jpg",
      technologies: ["React", "TypeScript", "Node.js", "OpenAI API", "SendGrid", "MongoDB"],
      duration: "4 months",
      highlights: ["Drag-and-drop builder", "AI content suggestions", "A/B testing framework"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-green-500 via-blue-500 to-purple-500 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 rounded-full animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/50 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-4">
            <FolderOpen className="h-4 w-4" />
            Portfolio Showcase
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of recent projects demonstrating expertise in modern web development, AI integration, and scalable architecture
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              delay={index * 150}
            >
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20 dark:border-gray-700/20 hover:scale-105"
                onMouseEnter={playHoverSound}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          className="bg-white/90 text-gray-900 hover:bg-white"
                          onClick={playClickSound}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          className="bg-white/90 text-gray-900 hover:bg-white"
                          onClick={playClickSound}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                  {/* Project Details */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    {project.teamSize && (
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{project.teamSize}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Features:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="fade-up" delay={1000} className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in seeing more projects or discussing a potential collaboration?
          </p>
          <Button
            onClick={() => {
              playClickSound();
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onMouseEnter={playHoverSound}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </AnimatedSection>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Projects;