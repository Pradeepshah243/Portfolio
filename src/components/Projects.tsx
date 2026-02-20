// import { motion } from "motion/react";
// import { ExternalLink, Github } from "lucide-react";
// import { Card } from "./ui/card";
// import { Button } from "./ui/button";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// const projects = [
//   {
//     title: "Portfolio Website",
//     description: "A modern, responsive portfolio website showcasing projects and skills with clean UI design.",
//     image: "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAwNDI4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
//     github: "https://github.com/Pradeepshah243/Portfolio-Pradeep",
//     tags: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     title: "Super Market Billing System",
//     description: "A C++ console application for managing supermarket billing operations with inventory management.",
//     image: "https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc3MDA4ODI3MHww&ixlib=rb-4.1.0&q=80&w=1080",
//     github: "https://github.com/Pradeepshah243/Super-Market-Billing-System",
//     tags: ["C++", "Console App"],
//   },
//   {
//     title: "XYZ Shoes Store Website",
//     description: "An e-commerce website template for a shoe store with product showcase and responsive design.",
//     image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njk5NzYwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//     github: "https://github.com/Pradeepshah243/XYZShoesStores",
//     tags: ["HTML", "CSS"],
//   },
// ];

// export function Projects() {
//   return (
//     <section className="py-20 px-6 bg-white dark:bg-gray-900" id="projects">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
//             A showcase of my recent work
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow group">
//                   {/* Project Image */}
//                   <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
//                     <ImageWithFallback
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </div>

//                   {/* Project Info */}
//                   <div className="p-6 flex-1 flex flex-col">
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                       {project.title}
//                     </h3>
                    
//                     <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
//                       {project.description}
//                     </p>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tags.map((tag, tagIndex) => (
//                         <span
//                           key={tagIndex}
//                           className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 text-sm rounded-full font-medium"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Links */}
//                     <div className="flex gap-3">
//                       <Button
//                         variant="default"
//                         size="sm"
//                         className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
//                         onClick={() => window.open(project.github, "_blank")}
//                       >
//                         <Github className="mr-2 h-4 w-4" />
//                         Code
//                       </Button>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => window.open(project.github, "_blank")}
//                       >
//                         <ExternalLink className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
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
import { Github, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Solutions Path Technology Website",
      description: "Company website showcasing services and modern UI built with TypeScript.",
      image: "https://images.unsplash.com/photo-1581090700227-4c4f3b3b7f3a?ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Pradeepshah243/solutionspathtech",
      tags: ["TypeScript", "React"],
    },
    {
      title: "Nrjph Website",
      description: "Website for New Ram Janaki Paint House with responsive design.",
      image: "https://images.unsplash.com/photo-1607082349566-187342f7d9d7?ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Pradeepshah243/Nrjph",
      tags: ["TypeScript", "React"],
    },
    {
      title: "Hotel Management System",
      description: "A hotel management system built with JavaScript for handling bookings and operations.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Pradeepshah243/Hotel-Management-system",
      tags: ["JavaScript"],
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Pradeepshah243/Website",
      tags: ["CSS"],
    },
    {
      title: "XYZ Shoes Store Website",
      description: "An e-commerce website template for a shoe store with product showcase and responsive design.",
      image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Pradeepshah243/XYZShoesStores",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Super Market Billing System",
      description: "A billing system for supermarkets built with C++.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Pradeepshah243/Super-Market-Billing-System",
      tags: ["C++"],
    },
    {
      title: "CLR Parser Compiler Design",
      description: "Compiler design project implementing CLR parser.",
      image: "https://images.unsplash.com/photo-1581090700227-4c4f3b3b7f3a?ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Pradeepshah243/CLR-Parser-Compiler-Design",
      tags: ["Compiler", "Parser"],
    },
    {
      title: "Smart Irrigation Using IoT",
      description: "IoT project using sensors to automate irrigation based on soil conditions.",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Pradeepshah243/Smart-Irrigation-Using-IOT",
      tags: ["IoT", "Sensors"],
    },
    {
      title: "Image Steganography",
      description: "Encryption and decryption of images to hide secret messages securely.",
      image: "https://images.unsplash.com/photo-1526378722484-cc5c0c8d6b9a?ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Pradeepshah243/Image-Steganography",
      tags: ["Security", "Encryption"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            A showcase of my work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow group">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 text-sm rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                        GitHub
                      </Button>
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
