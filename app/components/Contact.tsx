'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Himavarshini will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', color: '#B88EFF', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', color: '#FFB3C6', label: 'Instagram' },
    { icon: Mail, href: 'mailto:himavarshini@example.com', color: '#B88EFF', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#0D0F1C]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] mb-4 sm:mb-6 text-center font-serif"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Let's Build Something That Connects.
        </motion.h2>

        <motion.p
          className="text-[#FFFFFF]/80 text-center mb-10 sm:mb-12 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind? Let's collaborate and create something meaningful together.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 sm:space-y-6 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-[#1a1d3a] border-[#A66CFF]/30 text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 focus:border-[#A66CFF] focus:ring-2 focus:ring-[#A66CFF]/20 px-4 sm:px-6 py-5 sm:py-6 min-h-[48px] transition-all duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-[#1a1d3a] border-[#A66CFF]/30 text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 focus:border-[#A66CFF] focus:ring-2 focus:ring-[#A66CFF]/20 px-4 sm:px-6 py-5 sm:py-6 min-h-[48px] transition-all duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="bg-[#1a1d3a] border-[#A66CFF]/30 text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 focus:border-[#A66CFF] focus:ring-2 focus:ring-[#A66CFF]/20 px-4 sm:px-6 py-4 resize-none transition-all duration-300"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#A66CFF] hover:bg-[#9556ee] text-white py-5 sm:py-6 min-h-[48px] transition-all duration-300 shadow-lg shadow-[#A66CFF]/30 hover:shadow-xl hover:shadow-[#A66CFF]/40"
            >
              Send Message
            </Button>
          </motion.div>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1a1d3a] flex items-center justify-center hover:text-[#FFFFFF] transition-all duration-300"
                style={{ color: social.color }}
                whileHover={{ 
                  scale: 1.15, 
                  backgroundColor: social.color,
                  boxShadow: `0 0 25px ${social.color}80`,
                  rotate: 5
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                aria-label={social.label}
              >
                <Icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-center text-[#FFFFFF]/50 mt-12 sm:mt-16 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          © 2025 Himavarshini Parvathreddy | Designed with 💜 in Figma Make
        </motion.p>
      </div>
    </section>
  );
}
