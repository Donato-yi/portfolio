/**
 * Hero section component with advanced parallax effects
 * Main landing area with introduction and call-to-action
 */
import React from 'react';
import { ArrowRight, Download, MapPin, Mail, Code, Zap, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useParallaxOffset } from '../hooks/useScrollAnimation';
import AnimatedSection from './AnimatedSection';
import { useSound } from '../hooks/useSound';

const Hero: React.FC = () => {
  const parallaxOffset1 = useParallaxOffset(0.2);
  const parallaxOffset2 = useParallaxOffset(0.3);
  const parallaxOffset3 = useParallaxOffset(0.1);
  const { playHoverSound, playClickSound } = useSound();

  const scrollToContact = () => {
    playClickSound();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    playClickSound();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Advanced Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
        {/* Parallax Floating particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400/20 dark:bg-blue-600/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                transform: `translateY(${parallaxOffset3 * 0.5}px)`,
              }}
            />
          ))}
        </div>
        
        {/* Parallax Cloud-like shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-32 bg-white/10 dark:bg-white/5 rounded-full transform rotate-12 animate-pulse"
          style={{ transform: `translateY(${parallaxOffset1}px) rotate(12deg)` }}
        ></div>
        <div 
          className="absolute top-3/4 right-1/4 w-48 h-24 bg-blue-200/20 dark:bg-blue-800/20 rounded-full transform -rotate-12 animate-pulse animation-delay-1000"
          style={{ transform: `translateY(${parallaxOffset2}px) rotate(-12deg)` }}
        ></div>
        
        {/* Gradient orbs with parallax */}
        <div 
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-pulse animation-delay-2000"
          style={{ transform: `translateY(${parallaxOffset1 * 1.5}px)` }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Animated greeting */}
          <AnimatedSection animation="fade-down" delay={200}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              <Code className="h-4 w-4" />
              Available for new opportunities
            </div>
          </AnimatedSection>

          {/* Main Content */}
          <AnimatedSection animation="fade-up" delay={400}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Donato Yi</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
              Senior Software Engineer & Tech Lead
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={800}>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experienced full-stack developer with expertise in modern JavaScript, React ecosystem, 
              AI integration, and cloud infrastructure. Leading teams to build scalable solutions 
              from concept to deployment.
            </p>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Donatoyi8853@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Tokyo, Japan</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action Buttons */}
          <AnimatedSection animation="fade-up" delay={1200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={scrollToProjects}
                onMouseEnter={playHoverSound}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
              >
                View My Work
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                onMouseEnter={playHoverSound}
                variant="outline"
                className="px-8 py-3 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transform hover:scale-105"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="scale" delay={1400}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { icon: <Zap className="h-6 w-6" />, number: "10+", label: "Years Experience" },
                { icon: <Code className="h-6 w-6" />, number: "50+", label: "Projects Completed" },
                { icon: <Users className="h-6 w-6" />, number: "15+", label: "Team Members Led" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-white/30 dark:bg-gray-900/30 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-800/20 hover:bg-white/40 dark:hover:bg-gray-900/40 transition-all duration-300 hover:scale-105"
                  onMouseEnter={playHoverSound}
                >
                  <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;