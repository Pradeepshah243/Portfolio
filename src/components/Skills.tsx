import { motion } from "motion/react";
import {
  Code2,
  FileCode,
  Palette,
  Terminal,
  Braces,
  Database,
  Lightbulb,
  Bug,
  MessageSquare,
} from "lucide-react";

const skills = [
  { name: "React.js", icon: Code2, color: "from-blue-500 to-cyan-500" },
  { name: "HTML5", icon: FileCode, color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: Palette, color: "from-blue-600 to-purple-600" },
  { name: "JavaScript", icon: Terminal, color: "from-yellow-400 to-orange-500" },
  { name: "C / C++", icon: Braces, color: "from-purple-500 to-pink-500" },
  { name: "Data Structures", icon: Database, color: "from-green-500 to-teal-500" },
  { name: "Problem Solving", icon: Lightbulb, color: "from-amber-500 to-yellow-500" },
  { name: "Debugging & Testing", icon: Bug, color: "from-red-500 to-rose-500" },
  { name: "Communication", icon: MessageSquare, color: "from-indigo-500 to-blue-500" },
];

export function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Technologies and competencies I work with
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}