import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30" />
              <ImageWithFallback
                src="/images/profile/about.jpeg"
                alt="Pradeep Raut"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a <span className="font-semibold text-purple-700 dark:text-purple-400">Computer Science Engineering graduate</span> and Front-End Developer based in Janakpurdham, Nepal.
              </p>
              <p>
                Founder of <span className="font-semibold text-blue-700 dark:text-blue-400">Solutions Path Technology Pvt. Ltd.</span>, where I lead operations and development. I enjoy building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.
              </p>
              <p>
                Passionate about learning new technologies, solving problems, and creating practical digital solutions that make a difference.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}