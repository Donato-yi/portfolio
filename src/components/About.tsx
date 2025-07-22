/**
 * About section component with fade-in animations
 * Displays personal information and professional summary
 */
import React from 'react';
import { GraduationCap, Target, Users, Zap, Award, Coffee } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useSound } from '../hooks/useSound';

const About: React.FC = () => {
  const { playHoverSound } = useSound();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400/20 to-blue-400/20 rounded-full transform translate-x-1/2 translate-y-1/2 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate software engineer with a proven track record of building scalable web applications and leading development teams
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Professional Card */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-600/20 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl mb-4">
                    <span className="text-4xl font-bold text-white">DY</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Donato Yi</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Senior Software Engineer</p>
                </div>
                
                {/* Education & Quick Stats */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <GraduationCap className="h-4 w-4" />
                    <span>The University of Tokyo</span>
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
                    Bachelor of Engineering - Computer Science
                    <br />
                    2008 - 2011
                  </div>

                  {/* Quick achievements */}
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300"
                      onMouseEnter={playHoverSound}
                    >
                      <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">Tech Lead</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">14+ Developers</div>
                    </div>
                    <div 
                      className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300"
                      onMouseEnter={playHoverSound}
                    >
                      <Coffee className="h-5 w-5 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">Full-Stack</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Frontend to DevOps</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Description and Highlights */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-left" delay={400}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
              <div className="prose prose-lg text-gray-700 dark:text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  Senior Web developer with expertise in modern JavaScript and its best patterns. 
                  As a manager and lead developer of front-end teams, I have professionally developed 
                  React SPAs and hybrid mobile solutions using React Native and Flutter. Most recently, 
                  I've been focusing on AI integration and cloud-native solutions.
                </p>
                
                <p className="leading-relaxed">
                  I can complete projects from start to finish - building infrastructure, writing documentation, 
                  planning milestones, and ensuring timely delivery. My experience spans both technical 
                  development and team leadership, with a strong focus on modern development practices 
                  and emerging technologies.
                </p>
              </div>
            </AnimatedSection>

            {/* Key Strengths Grid */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
                    title: "Full-Stack Expertise",
                    description: "End-to-end development from infrastructure to deployment",
                    bgColor: "bg-blue-100 dark:bg-blue-900/30"
                  },
                  {
                    icon: <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
                    title: "Team Leadership", 
                    description: "Led teams of 14+ senior developers with agile methodology",
                    bgColor: "bg-purple-100 dark:bg-purple-900/30"
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />,
                    title: "Modern Tech Stack",
                    description: "React, TypeScript, Node.js, AWS, AI integration",
                    bgColor: "bg-green-100 dark:bg-green-900/30"
                  },
                  {
                    icon: <GraduationCap className="h-5 w-5 text-orange-600 dark:text-orange-400" />,
                    title: "Continuous Learning",
                    description: "Always exploring cutting-edge technologies and best practices", 
                    bgColor: "bg-orange-100 dark:bg-orange-900/30"
                  }
                ].map((strength, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onMouseEnter={playHoverSound}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 ${strength.bgColor} rounded-lg flex items-center justify-center`}>
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{strength.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{strength.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;