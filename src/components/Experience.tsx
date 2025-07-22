/**
 * Experience section component with stacking cards effect
 * Displays work history with innovative card stacking animation
 */
import React from 'react';
import { Calendar, MapPin, Users, Code, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
  teamSize?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "TechAI Solutions",
      position: "Senior Software Engineer & AI Lead",
      location: "Tokyo, Japan",
      duration: "Oct 2021 – Present",
      description: [
        "Leading AI integration initiatives for enterprise applications, implementing ChatGPT and custom ML models",
        "Architected and developed cloud-native solutions using AWS services (Lambda, ECS, S3, DynamoDB)",
        "Built modern React applications with TypeScript, Next.js, and serverless architecture",
        "Mentored junior developers and established best practices for AI-powered application development"
      ],
      technologies: ["React", "TypeScript", "Next.js", "AWS", "Python", "TensorFlow", "OpenAI API"],
      teamSize: "8 developers"
    },
    {
      company: "Embrace",
      position: "Full-Stack Developer",
      location: "Tokyo, Japan", 
      duration: "Apr 2021 – Sep 2021",
      description: [
        "Developed dashboard alerts and notification system for enterprise monitoring platform",
        "Created dynamic email templates with customizable layouts and real-time data integration",
        "Implemented advanced search and filter functionality with elasticsearch backend",
        "Optimized application performance resulting in 40% faster load times"
      ],
      technologies: ["React", "Node.js", "Express", "Elasticsearch", "PostgreSQL"]
    },
    {
      company: "DES REVES",
      position: "Frontend Developer",
      location: "Tokyo, Japan",
      duration: "Feb 2021 – Mar 2021",
      description: [
        "Developed food delivery platform frontend with real-time order tracking",
        "Implemented responsive design for mobile-first user experience",
        "Integrated payment processing and geolocation services",
        "Created admin dashboard for restaurant management"
      ],
      technologies: ["React", "Redux", "Google Maps API", "Stripe API"]
    },
    {
      company: "Surefront", 
      position: "Senior React Developer",
      location: "Tokyo, Japan",
      duration: "Mar 2020 – Dec 2020",
      description: [
        "Participated in B2B Portal development with complex user role and permission system",
        "Built scalable React applications with TypeScript and Redux state management",
        "Implemented sophisticated access control with different user privileges and workflows",
        "Collaborated with UX team to create intuitive interfaces for complex business processes"
      ],
      technologies: ["React", "TypeScript", "Redux", "SCSS", "Node.js"],
      teamSize: "6 developers"
    },
    {
      company: "Estey-Hoover",
      position: "Lead Frontend Developer",
      location: "Tokyo, Japan", 
      duration: "Mar 2019 – Jan 2020",
      description: [
        "Led team of 14 senior developers to design and develop trading platform frontend",
        "Implemented real-time data visualization using TradingView and ChartJS libraries", 
        "Built responsive interface with React, MobX, and Styled-components",
        "Established development workflows and code review processes for large team"
      ],
      technologies: ["React", "MobX", "Styled-components", "TradingView", "ChartJS"],
      teamSize: "14 senior developers"
    },
    {
      company: "Superteam",
      position: "Mobile Developer",
      location: "Tokyo, Japan",
      duration: "Jun 2018 – Apr 2019", 
      description: [
        "Delivered React Native hybrid solutions for ride-sharing and scheduling applications",
        "Integrated with Django REST API and GraphQL backends for seamless data flow",
        "Implemented real-time features using WebSocket connections",
        "Optimized app performance and reduced bundle size by 30%"
      ],
      technologies: ["React Native", "Django", "GraphQL", "WebSocket"]
    },
    {
      company: "Pivotal",
      position: "Software Engineer", 
      location: "Tokyo, Japan",
      duration: "Apr 2013 – Dec 2017",
      description: [
        "Developed and maintained web applications using HTML, CSS, React, and PHP",
        "Collaborated with design and backend teams to deliver complete solutions",
        "Implemented responsive designs and cross-browser compatibility",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["HTML", "CSS", "React", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-green-500 to-blue-500 rounded-full transform translate-x-1/2 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse animation-delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" />
            Career Journey
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Over 10 years of professional software development experience, from individual contributor to technical lead
          </p>
        </AnimatedSection>

        {/* Alternating Timeline */}
        <div className="relative flex flex-col gap-16 before:absolute before:inset-0 before:left-1/2 before:w-1 before:bg-blue-200 dark:before:bg-blue-900/40 before:-translate-x-1/2 before:z-0">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            // Dummy image URL (replace with your own asset if desired)
            const imageUrl =
              'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80';
            return (
              <div key={index} className="relative flex flex-col md:flex-row items-center z-10">
                {/* Timeline Dot */}
                <span className="hidden md:block absolute left-1/2 top-8 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 shadow -translate-x-1/2 z-20"></span>
                {/* Card and Image Row */}
                {isLeft ? (
                  <>
                    <div className="flex-1 md:pr-12 flex md:justify-end">
                      <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20 backdrop-blur-sm w-full md:w-[520px]"
                      >
                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.position}</h3>
                          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            {exp.teamSize && (
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>{exp.teamSize}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Description */}
                        <ul className="space-y-3 mb-6">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-2 text-xs">▪</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {/* Technologies */}
                        {exp.technologies && (
                          <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Code className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                              <span className="font-medium text-gray-700 dark:text-gray-300">Technologies:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                    {/* Image on the right */}
                    <div className="flex-1 md:pl-12 flex justify-start w-full md:w-auto mt-6 md:mt-0">
                      <motion.img
                        src={imageUrl}
                        alt="Project visual"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm h-48 object-cover object-center bg-gray-200 dark:bg-gray-800"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image on the left */}
                    <div className="flex-1 md:pr-12 flex justify-end w-full md:w-auto mt-6 md:mt-0 order-2 md:order-1">
                      <motion.img
                        src={imageUrl}
                        alt="Project visual"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm h-48 object-cover object-center bg-gray-200 dark:bg-gray-800"
                      />
                    </div>
                    <div className="flex-1 md:pl-12 flex md:justify-start order-1 md:order-2">
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20 backdrop-blur-sm w-full md:w-[520px]"
                      >
                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.position}</h3>
                          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            {exp.teamSize && (
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>{exp.teamSize}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Description */}
                        <ul className="space-y-3 mb-6">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-2 text-xs">▪</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {/* Technologies */}
                        {exp.technologies && (
                          <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Code className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                              <span className="font-medium text-gray-700 dark:text-gray-300">Technologies:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </>
                )}
                {/* Spacer for timeline on mobile */}
                <div className="block md:hidden h-8"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default Experience;