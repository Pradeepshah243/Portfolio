import { motion } from "motion/react";
import { Award, Star, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const certifications = [
  {
    name: "Problem solving and ideation for IOT application (Workshop)",
    issuer: "Nitte Meenakshi Institute of Technology",
    date: "Issued Jan 2022",
    description: "Participated in hands-on IoT problem-solving exercises and project development.",
    certificateLink: "https://drive.google.com/file/d/1pA-vdNQj_vVGiMBpVlKbjAfo6FFb0veR/view?usp=sharing", // Replace with your actual certificate link
  },
  {
    name: "Innovative tool in Network Security Monitoring (workshop)",
    issuer: "Nitte Meenakshi Institute of Technology",
    date: "Issued Jan 2022",
    description: "Learned network security fundamentals and monitoring techniques.",
    certificateLink: "https://drive.google.com/file/d/1pDuPflW6BAVReeAGU_uVflYSQPKMmwh0/view?usp=sharing", // Replace with your actual certificate link
  },
  {
    name: "Overview of Geoprocessing using python",
    issuer: "ISRO - Indian Space Research Organization",
    date: "Issued Feb 2022",
    description: "Comprehensive training on geoprocessing techniques and spatial data analysis using Python.",
    certificateLink: "https://drive.google.com/file/d/1p9rY4sqECnpgPwuj7yT3gb-4WtpssNaw/view?usp=sharing", // Replace with your actual certificate link
  },
  {
    name: "Leadership & Team Effectiveness - NPTEL",
    issuer: "Indian Institute of Technology, Roorkee",
    date: "Issued Feb 2022",
    description: "Advanced course on leadership principles, team dynamics, and organizational effectiveness.",
    certificateLink: "https://drive.google.com/file/d/1p9BWON3RlpJLSLD-I5JkcZe162AXEccw/view?usp=sharing", // Replace with your actual certificate link
  },
  {
    name: "Ethical Hacking - NPTEL",
    issuer: "Indian Institute of Technology, Kharagpur",
    date: "Issued Apr 2022",
    description: "In-depth training on cybersecurity, penetration testing, and ethical hacking methodologies.",
    certificateLink: "https://drive.google.com/file/d/1p8q29dZIxqqpcnLBUjXJTYIHeNQ8ATYC/view?usp=sharing", // Replace with your actual certificate link
  },
];

export function Certifications() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900" id="certifications">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Licenses & Certifications
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Professional certifications and achievements
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-600 bg-white dark:bg-gray-800 cursor-pointer relative overflow-hidden">
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2 gap-2">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                            {cert.name}
                          </h3>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        
                        <p className="text-purple-700 dark:text-purple-400 font-semibold text-sm mb-2">
                          {cert.issuer}
                        </p>
                        
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                          {cert.date}
                        </p>
                        
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {cert.description}
                        </p>

                        {/* View Certificate Badge */}
                        <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
                          <span>View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}