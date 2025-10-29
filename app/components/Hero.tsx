'use client';

import { motion } from 'motion/react';
import { Instagram, Palette, Share2 } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D0F1C] via-[#1a1d3a] to-[#A66CFF] px-4 sm:px-6 py-20 md:pt-32">
      {/* Animated background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0D0F1C] via-[#2a1d4a] to-[#A66CFF] opacity-80"
        animate={{
          background: [
            'linear-gradient(to bottom right, #0D0F1C, #2a1d4a, #A66CFF)',
            'linear-gradient(to bottom right, #A66CFF, #2a1d4a, #0D0F1C)',
            'linear-gradient(to bottom right, #0D0F1C, #2a1d4a, #A66CFF)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating icons - hidden on mobile for cleaner experience */}
      <motion.div
        className="hidden md:block absolute top-1/4 left-[15%] text-[#FF8BA0] opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Instagram size={64} />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-1/4 right-[20%] text-[#A66CFF] opacity-20"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Palette size={72} />
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-[40%] right-[15%] text-[#FF8BA0] opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, 20, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Share2 size={56} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#FFFFFF] mb-4 sm:mb-6 font-serif leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Turning Scrolls into Stories.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#FFFFFF] mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Hi, I'm <span className="text-[#FFB3C6]">Himavarshini Parvathreddy</span> — a digital marketing intern passionate about crafting campaigns that connect through Instagram, Facebook, and storytelling.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              onClick={scrollToWork}
              className="bg-[#A66CFF] hover:bg-[#9556ee] text-white px-8 py-6 w-full sm:w-auto transition-all duration-300 shadow-lg shadow-[#A66CFF]/30 hover:shadow-xl hover:shadow-[#A66CFF]/40"
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0D0F1C] px-8 py-6 w-full sm:w-auto transition-all duration-300"
            >
              Let's Collaborate
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
