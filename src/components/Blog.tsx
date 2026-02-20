import { motion } from "motion/react";
import { Video, Calendar, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const blogPosts = [
  {
    title: "Getting Started with React Hooks",
    excerpt: "Learn the fundamentals of React Hooks and how they can simplify your component logic.",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    type: "Article",
  },
  {
    title: "Building Responsive Layouts with CSS Grid",
    excerpt: "Master CSS Grid to create flexible and responsive web layouts with ease.",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800",
    type: "Video",
  },
  {
    title: "JavaScript ES6+ Features You Should Know",
    excerpt: "Explore modern JavaScript features that will boost your productivity as a developer.",
    date: "Jan 5, 2026",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
    type: "Article",
  },
];

export function Blog() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800" id="blog">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Blog & Vlogs
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Sharing knowledge and experiences through articles and videos
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow group bg-white dark:bg-gray-900">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      {post.type === "Video" ? (
                        <Video className="w-4 h-4 text-purple-600" />
                      ) : (
                        <Calendar className="w-4 h-4 text-blue-600" />
                      )}
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                        {post.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {post.date}
                    </p>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
