/**
 * Skills section component with animated progress bars
 * Displays technical skills with fade-in animations and interactive elements
 */
import React from 'react';
import { Code, Server, Cloud, Database, Smartphone, Brain, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useSound } from '../hooks/useSound';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: { name: string; level: number }[];
}

const Skills: React.FC = () => {
  const { playHoverSound } = useSound();

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "blue",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Gatsby.js", level: 80 },
        { name: "Tailwind CSS", level: 92 },
      ]
    },
    {
      title: "Backend Development", 
      icon: <Server className="h-6 w-6" />,
      color: "green",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 82 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 95 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "purple", 
      skills: [
        { name: "AWS EC2", level: 88 },
        { name: "AWS Lambda", level: 85 },
        { name: "AWS S3", level: 90 },
        { name: "AWS ECS", level: 82 },
        { name: "Kubernetes", level: 78 },
        { name: "Firebase", level: 85 },
      ]
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-6 w-6" />,
      color: "orange",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 92 },
        { name: "DynamoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "CouchDB", level: 75 },
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      color: "indigo",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Flutter", level: 82 },
        { name: "iOS Development", level: 75 },
        { name: "Android Development", level: 78 },
        { name: "Expo", level: 85 },
        { name: "Hybrid Apps", level: 90 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      color: "pink",
      skills: [
        { name: "OpenAI API", level: 85 },
        { name: "TensorFlow", level: 78 },
        { name: "Python", level: 82 },
        { name: "Machine Learning", level: 80 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Computer Vision", level: 72 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800', bar: 'bg-blue-600 dark:bg-blue-400' },
      green: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800', bar: 'bg-green-600 dark:bg-green-400' },
      purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800', bar: 'bg-purple-600 dark:bg-purple-400' },
      orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800', bar: 'bg-orange-600 dark:bg-orange-400' },
      indigo: { bg: 'bg-indigo-50 dark:bg-indigo-900/20', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-800', bar: 'bg-indigo-600 dark:bg-indigo-400' },
      pink: { bg: 'bg-pink-50 dark:bg-pink-900/20', text: 'text-pink-600 dark:text-pink-400', border: 'border-pink-200 dark:border-pink-800', bar: 'bg-pink-600 dark:bg-pink-400' },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/50 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Technical Expertise
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack, from frontend frameworks to cloud infrastructure and AI integration
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <AnimatedSection 
                key={categoryIndex}
                animation="fade-up"
                delay={categoryIndex * 100}
              >
                <div
                  className={`${colorClasses.bg} ${colorClasses.border} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm hover:scale-105`}
                  onMouseEnter={playHoverSound}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center mr-4 shadow-sm border ${colorClasses.border}`}>
                      <div className={colorClasses.text}>{category.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`${colorClasses.bar} h-2 rounded-full transition-all duration-1000 ease-out hover:opacity-80`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Additional Skills */}
        <AnimatedSection animation="fade-up" delay={800} className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile Methodology", "Team Leadership", "Code Review", "System Architecture", 
              "Performance Optimization", "Unit Testing", "CI/CD", "Docker", "Git", 
              "Technical Documentation", "Mentoring", "Project Management"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:scale-105 cursor-default"
                onMouseEnter={playHoverSound}
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;