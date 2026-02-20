import { Github, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 dark:from-blue-900 dark:via-purple-900 dark:to-gray-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-blue-200 dark:text-blue-300 text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name with gradient */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Pradeep Raut
            </span>
          </motion.h1>

          {/* Title with typing effect */}
          <motion.h2
            className="text-2xl md:text-4xl text-white/90 dark:text-white/80 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent block">
  Founder & Front-End Developer
</span>

<a
  href="https://solutionspathtechnology.com.np"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm md:text-base text-white/90 dark:text-white/80 block font-bold mt-1"
>
  Solutions Path Technology Pvt. Ltd.
</a>



          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-white/80 dark:text-white/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Building modern web experiences with React, JavaScript, HTML & CSS
            
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-blue-50 font-semibold shadow-xl hover:shadow-2xl transition-all"
              onClick={() => window.open("https://github.com/Pradeepshah243", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-purple-700 font-semibold backdrop-blur-sm transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-sm">Scroll Down</span>
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </motion.div>
    </section>
  );
}