import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pradeepraut48801@gmail.com",
    href: "mailto:pradeepraut48801@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9812148801",
    href: "tel:+9779812148801",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pradeepraut",
    href: "https://www.linkedin.com/in/pradeepraut",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Pradeepshah243",
    href: "https://github.com/Pradeepshah243",
    color: "from-gray-700 to-gray-900",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Janakpurdham, Nepal",
    href: null,
    color: "from-purple-500 to-pink-600",
  },
];

export function Contact() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 dark:from-blue-900 dark:via-purple-900 dark:to-gray-900" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-blue-200 text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20 p-6 h-full">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 mx-auto`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        {info.label}
                      </h3>
                      <p className="text-blue-200 text-sm break-all">
                        {info.value}
                      </p>
                    </Card>
                  </a>
                ) : (
                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 h-full">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 mx-auto`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white text-lg mb-2">
                      {info.label}
                    </h3>
                    <p className="text-blue-200 text-sm">
                      {info.value}
                    </p>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-blue-50 font-semibold shadow-xl hover:shadow-2xl"
              onClick={() => window.location.href = "mailto:pradeepraut48801@gmail.com"}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send me an Email
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
