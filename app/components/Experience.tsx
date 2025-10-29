'use client';

import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Instagram } from 'lucide-react';
import { Button } from './ui/button';

const experiences = [
  {
    title: 'Digital Marketing Lead',
    company: 'BBCC CBIT',
    description: 'Built visual identity, managed campaigns, and increased engagement by 300%.',
    instagram: 'https://instagram.com/bbcccbit',
  },
  {
    title: 'Marketing Intern',
    company: 'StreetCause CBIT',
    description: 'Led awareness campaigns for 15+ student chapters, optimizing impact visuals.',
    instagram: 'https://instagram.com/streetcausecbit',
  },
  {
    title: 'Content Coordinator',
    company: 'Chaitanya Samskruthi',
    description: 'Directed festival branding and managed live updates for 5K+ attendees.',
    instagram: 'https://instagram.com/chaitanyasamskruthi',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#0D0F1C]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] mb-12 md:mb-16 text-center font-serif"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="bg-[#1a1d3a] border-none p-6 md:p-8 h-full flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#A66CFF]/30 transition-all duration-300">
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl text-[#FFB3C6] font-serif">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg md:text-xl text-[#B88EFF]">
                    {exp.company}
                  </h4>
                  <p className="text-[#FFFFFF]/90 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="ghost"
                    className="mt-6 w-full text-[#B88EFF] hover:text-[#FFFFFF] hover:bg-[#A66CFF] transition-all duration-300 min-h-[44px]"
                    onClick={() => window.open(exp.instagram, '_blank')}
                  >
                    <Instagram className="mr-2" size={18} />
                    View Portfolio
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
