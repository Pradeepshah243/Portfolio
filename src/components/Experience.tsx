// import { motion } from "motion/react";
// import { Briefcase, Building2 } from "lucide-react";
// import { Card } from "./ui/card";

// const experiences = [
//   {
//     role: "Founder & Frontend Developer",
//     company: "Solutions Path Technology Pvt. Ltd",
//     duration: "Feb 2023 – Present",
//     description: "Leading operations and development, building modern web solutions for clients.",
//     color: "from-blue-600 to-purple-600",
//   },
//   {
//     role: "Frontend Developer (Part-time)",
//     company: "Nepfinity Technologies Pvt. Ltd",
//     duration: "Dec 2025 – Present",
//     description: "Developing responsive web interfaces and collaborating on diverse projects.",
//     color: "from-purple-600 to-pink-600",
//   },
// ];

// export function Experience() {
//   return (
//     <section className="py-20 px-6 bg-white dark:bg-gray-900" id="experience">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
//             Experience
//           </h2>
//           <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
//             My professional journey
//           </p>

//           <div className="grid md:grid-cols-2 gap-6">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 whileHover={{ y: -8 }}
//               >
//                 <Card className="p-6 h-full hover:shadow-xl transition-shadow border-2 border-gray-100">
//                   <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4`}>
//                     {index === 0 ? (
//                       <Building2 className="w-7 h-7 text-white" />
//                     ) : (
//                       <Briefcase className="w-7 h-7 text-white" />
//                     )}
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                     {exp.role}
//                   </h3>
                  
//                   <p className="text-purple-700 font-semibold mb-2">
//                     {exp.company}
//                   </p>
                  
//                   <p className="text-sm text-gray-500 mb-4">
//                     {exp.duration}
//                   </p>
                  
//                   <p className="text-gray-700 dark:text-gray-300">
//                     {exp.description}
//                   </p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "motion/react";
import { Briefcase, Building2 } from "lucide-react";
import { Card } from "./ui/card";

const experiences = [
  {
    role: "Founder & Frontend Developer",
    company: "Solutions Path Technology Pvt. Ltd",
    link: "https://solutionspathtechnology.com.np", // replace with your actual company website
    duration: "Feb 2023 – Present",
    description: "Leading operations and development, building modern web solutions for clients.",
    color: "from-blue-600 to-purple-600",
  },
  {
    role: "Frontend Developer (Part-time)",
    company: "Nepfinity Technologies Pvt. Ltd",
    link: "https://nepfinitytechnologies.com/", // replace with actual company website
    duration: "Dec 2025 – Present",
    description: "Developing responsive web interfaces and collaborating on diverse projects.",
    color: "from-purple-600 to-pink-600",
  },
];

export function Experience() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            My professional journey
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow border-2 border-gray-100">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4`}
                  >
                    {index === 0 ? (
                      <Building2 className="w-7 h-7 text-white" />
                    ) : (
                      <Briefcase className="w-7 h-7 text-white" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>

                  <p className="text-purple-700 font-semibold mb-2">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-purple-800 transition-colors"
                    >
                      {exp.company}
                    </a>
                  </p>

                  <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>

                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
