'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Badge } from './ui/badge';
import portraitImage from '../assets/494735f182e2b4dd281eb044918b4abd82cc203f.png';

export function About() {
  const badges = [
    { text: '4+ Years of Marketing', color: 'bg-[#A66CFF]', hoverColor: 'hover:bg-[#9556ee]' },
    { text: '300% Growth in Engagement', color: 'bg-[#FF8BA0]', hoverColor: 'hover:bg-[#ff7090]' },
    { text: 'Storytelling through Design', color: 'bg-[#0D0F1C]', hoverColor: 'hover:bg-[#2a2d4a]' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Portrait Image */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={portraitImage}
                alt="Himavarshini Parvathreddy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F1C]/30 via-transparent to-transparent" />
              <motion.div
                className="absolute inset-0 border-4 border-[#A66CFF]/20 rounded-3xl"
                whileHover={{ borderColor: 'rgba(166, 108, 255, 0.4)' }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="space-y-6 order-1 md:order-2">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl text-[#0D0F1C] font-serif"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me.
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-[#2a2d4a] leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From leading campus marketing at CBIT to building brand identities across social media, I've learned how design, analytics, and timing create meaningful impact.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Badge className={`${badge.color} ${badge.hoverColor} text-white px-4 py-2 transition-all duration-300 shadow-md hover:shadow-lg cursor-default`}>
                    {badge.text}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
