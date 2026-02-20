import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Youtube, Twitter, Facebook, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Pradeepshah243",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pradeepraut",
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/pradeepraut3650",
    color: "hover:text-pink-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@pradeepshah243",
    color: "hover:text-red-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/pradeep09523626",
    color: "hover:text-sky-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/PradeepRaut3650",
    color: "hover:text-blue-700",
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 dark:from-gray-950 dark:via-purple-950 dark:to-blue-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Name */}
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
            Pradeep Raut
          </h3>
          
          <p className="text-blue-200 mb-8 max-w-md mx-auto">
            Building modern web experiences with passion and dedication
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all ${social.color} hover:bg-white/20 hover:scale-110`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="text-blue-200 hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="text-blue-200 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-blue-200 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#blog" className="text-blue-200 hover:text-white transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 mb-6" />

          {/* Copyright */}
          <p className="text-blue-200/80 text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>© 2026 Pradeep Raut. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Crafted with care <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Solutions Path Technology Pvt. Ltd.
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}