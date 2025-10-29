'use client';

import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Instagram, BarChart3, Video } from 'lucide-react';

const projects = [
  {
    title: 'Social Media Rebranding',
    subtitle: 'BBCC',
    description: 'Minimal redesign with cohesive color palette',
    metrics: '300% increase in engagement',
    icon: Instagram,
    gradient: 'from-[#A66CFF] via-[#8f5de6] to-[#7a48d4]',
  },
  {
    title: 'Campaign Analytics Dashboard',
    subtitle: 'Canva + Sheets',
    description: 'Data visualization for campaign performance',
    metrics: '15+ campaigns tracked',
    icon: BarChart3,
    gradient: 'from-[#FF8BA0] via-[#ff7090] to-[#ff5580]',
  },
  {
    title: 'Samskruthi Fest Campaigns',
    subtitle: 'Short-form Reels',
    description: 'Viral content creation for college festival',
    metrics: '15K+ organic views',
    icon: Video,
    gradient: 'from-[#FFB3C6] via-[#ff9eb3] to-[#ff8ba0]',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl text-[#0D0F1C] mb-12 md:mb-16 text-center font-serif"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full group cursor-pointer">
                  <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon size={64} className="text-white/90" strokeWidth={1.5} />
                    </motion.div>
                    
                    {/* Decorative circles */}
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                  </div>
                  <div className="p-6 space-y-3 bg-white">
                    <h3 className="text-xl md:text-2xl text-[#0D0F1C] font-serif">
                      {project.title}
                    </h3>
                    <p className="text-[#A66CFF]">
                      {project.subtitle}
                    </p>
                    <p className="text-[#2a2d4a]/80 text-sm md:text-base">
                      {project.description}
                    </p>
                    <motion.div
                      className="pt-2"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-[#FF8BA0]">
                        {project.metrics}
                      </p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
