'use client';

import { motion } from 'motion/react';
import { Palette, BarChart3, Facebook, Figma, Film, TrendingUp } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const skills = [
  { name: 'Meta Business Suite', icon: Facebook },
  { name: 'Canva', icon: Palette },
  { name: 'CapCut', icon: Film },
  { name: 'Figma', icon: Figma },
  { name: 'Hootsuite', icon: TrendingUp },
  { name: 'Google Analytics', icon: BarChart3 },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#0D0F1C]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] mb-4 sm:mb-6 font-serif"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-[#B88EFF] mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Creative Strategy | Analytics | Storytelling
        </motion.p>

        <TooltipProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="flex flex-col items-center justify-center aspect-square p-4 sm:p-6 rounded-2xl bg-[#1a1d3a] border border-[#A66CFF]/20 cursor-pointer group"
                        whileHover={{ 
                          scale: 1.05, 
                          y: -4,
                          backgroundColor: '#A66CFF',
                          borderColor: '#A66CFF',
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={32} className="text-[#B88EFF] group-hover:text-white transition-colors duration-300" />
                        </motion.div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1a1d3a] border-[#A66CFF]/30 text-white">
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
