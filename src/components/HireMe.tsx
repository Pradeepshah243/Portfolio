import { motion } from "motion/react";
import { Sparkles, CheckCircle, Download, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  "Clean, maintainable, and scalable code",
  "Responsive design for all devices",
  "Modern UI/UX with smooth animations",
  "SEO-friendly and performance optimized",
  "Timely delivery and clear communication",
  "Post-launch support and maintenance",
];

export function HireMe() {
  const handleDownloadResume = () => {
    // Replace with your actual resume Google Drive link
    window.open("https://drive.google.com/file/d/1bIZvicKak1SKmuknECBOzXKpLgQMNitp/view?usp=sharing", "_blank");
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            I'm available for freelance projects and full-time opportunities. 
            Let's collaborate to bring your ideas to life with modern, 
            high-quality web solutions.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left hover:bg-white/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                  <p className="text-white text-sm md:text-base">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-blue-50 font-semibold shadow-2xl hover:shadow-3xl transition-all group"
              onClick={handleContactClick}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-purple-700 font-semibold backdrop-blur-sm transition-all"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2+</div>
              <div className="text-white/80 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}