'use client';

import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Award, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

const achievements = [
  {
    icon: Award,
    title: 'Outstanding Contribution to Campus Brand Identity',
    year: '2022',
    color: '#A66CFF',
  },
  {
    icon: TrendingUp,
    title: 'Samskruthi Promo Video',
    description: '15K+ Views in 48 Hours',
    color: '#FF8BA0',
  },
  {
    icon: Users,
    title: 'StreetCause Hyderabad Drive',
    description: '1000+ Volunteers Managed',
    color: '#A66CFF',
  },
];

export function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl text-[#0D0F1C] mb-12 md:mb-16 text-center font-serif"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        {/* Desktop & Tablet: Grid View */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="p-6 md:p-8 h-full flex flex-col items-center text-center border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative overflow-hidden"
                    style={{ backgroundColor: achievement.color }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={32} className="text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2, opacity: 0.2 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                  <h3 className="text-lg md:text-xl text-[#0D0F1C] mb-3">
                    {achievement.title}
                  </h3>
                  {achievement.year && (
                    <p className="text-[#A66CFF]">
                      {achievement.year}
                    </p>
                  )}
                  {achievement.description && (
                    <p className="text-[#2a2d4a]/70 text-sm md:text-base">
                      {achievement.description}
                    </p>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Carousel View */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="p-8 flex flex-col items-center text-center border-none shadow-lg bg-white">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                        style={{ backgroundColor: achievement.color }}
                      >
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-lg text-[#0D0F1C] mb-3">
                        {achievement.title}
                      </h3>
                      {achievement.year && (
                        <p className="text-[#A66CFF]">
                          {achievement.year}
                        </p>
                      )}
                      {achievement.description && (
                        <p className="text-[#2a2d4a]/70">
                          {achievement.description}
                        </p>
                      )}
                    </Card>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {achievements.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-[#A66CFF] w-8' : 'bg-[#0D0F1C]/20 w-3'
                }`}
                whileTap={{ scale: 0.9 }}
                aria-label={`View achievement ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
