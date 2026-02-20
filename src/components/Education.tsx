import { motion } from "motion/react";
import { GraduationCap, School, BookOpen } from "lucide-react";
import { Card } from "./ui/card";

const educationData = [
  {
    degree: "BE in Computer Science Engineering",
    institution: "Nitte Meenakshi Institute of Technology",
    location: "Bangalore, India",
    duration: "2019 – 2023",
    icon: GraduationCap,
    color: "from-blue-600 to-purple-600",
  },
  {
    degree: "Higher Secondary Education Board (HSEB) / +2",
    institution: "Mithila Institute of Technology - MIT, Janakpur", // Replace with your actual college name
    location: "Nepal",
    duration: "2017 – 2019", // Replace with your actual duration
    icon: BookOpen,
    color: "from-green-600 to-teal-600",
  },
  {
    degree: "Secondary Education Examination (SEE) / Class 10",
    institution: "Einstein Public School - EPS, Janakpur", // Replace with your actual school name
    location: "Nepal",
    duration: "2016", // Replace with your actual year
    icon: School,
    color: "from-orange-600 to-red-600",
  },
];

export function Education() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800" id="education">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Academic background and qualifications
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-blue-600 hover:border-purple-600">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0`}>
                      <edu.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-700 dark:text-purple-400 font-semibold text-base md:text-lg mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-2">
                        {edu.location}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        {edu.duration}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}