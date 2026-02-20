// import { motion, AnimatePresence } from "motion/react";
// import { MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { useState, useEffect } from "react";

// // Define types
// interface TravelPhoto {
//   src: string;
//   caption?: string;
// }

// interface Highlight {
//   id: string;
//   title: string;
//   cover: string;
//   location: string;
//   date: string;
//   photos: TravelPhoto[];
// }

// // Sample data - Replace with your Vietnam trip photos
// const highlights: Highlight[] = [
//   {
//     id: "vietnam-2026",
//     title: "Vietnam",
//     cover: "https://images.unsplash.com/photo-1603414586884-c2ed7e8d325d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSGFub2klMjBzdHJlZXQlMjBzY2VuZXxlbnwxfHx8fDE3NzE0ODY4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//     location: "Vietnam",
//     date: "February 2026",
//     photos: [
//       {
//         src: "https://images.unsplash.com/photo-1603414586884-c2ed7e8d325d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSGFub2klMjBzdHJlZXQlMjBzY2VuZXxlbnwxfHx8fDE3NzE0ODY4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//         caption: "Hanoi Old Quarter - Exploring the historic streets",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1547024842-7c86b2226ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYSUyMExvbmclMjBCYXklMjBWaWV0bmFtJTIwc2NlbmljfGVufDF8fHx8MTc3MTQ4Njg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
//         caption: "Ha Long Bay - Stunning limestone karsts",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1677560545982-651fbb60cd4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb2klMjBBbiUyMGxhbnRlcm5zJTIwVmlldG5hbSUyMG5pZ2h0fGVufDF8fHx8MTc3MTQ4Njg2OXww&ixlib=rb-4.1.0&q=80&w=1080",
//         caption: "Hoi An Ancient Town - Beautiful lanterns at night",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1510637844160-b5b7b335f369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYWlnb24lMjBIbyUyMENoaSUyME1pbmglMjBDaXR5JTIwVmlldG5hbXxlbnwxfHx8fDE3NzE0ODY4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
//         caption: "Ho Chi Minh City - The vibrant streets of Saigon",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1770913161058-7522027673bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtZXNlJTIwcGhvJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3NzE0ODY4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
//         caption: "Local Street Food - Amazing Vietnamese cuisine",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1677552926138-f7dbb71b226f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZWtvbmclMjBEZWx0YSUyMFZpZXRuYW0lMjBib2F0fGVufDF8fHx8MTc3MTQyMjY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
//         caption: "Mekong Delta - Boat ride through floating markets",
//       },
//     ],
//   },
//   // Add more trips here - examples for future trips
//   {
//     id: "thailand-2025",
//     title: "Thailand",
//     cover: "https://images.unsplash.com/photo-1691488822390-0fd80c389953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGFpbGFuZCUyMEJhbmdrb2slMjB0ZW1wbGV8ZW58MXx8fHwxNzcxNDg3MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
//     location: "Thailand",
//     date: "Coming Soon",
//     photos: [
//       {
//         src: "https://images.unsplash.com/photo-1691488822390-0fd80c389953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGFpbGFuZCUyMEJhbmdrb2slMjB0ZW1wbGV8ZW58MXx8fHwxNzcxNDg3MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
//         caption: "Bangkok Temples - Golden Buddhist architecture",
//       },
//     ],
//   },
//   {
//     id: "nepal-2025",
//     title: "Nepal",
//     cover: "https://images.unsplash.com/photo-1634042405693-2d4170d138a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMEhpbWFsYXlhcyUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzE0ODcyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
//     location: "Nepal",
//     date: "Coming Soon",
//     photos: [
//       {
//         src: "https://images.unsplash.com/photo-1634042405693-2d4170d138a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMEhpbWFsYXlhcyUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzE0ODcyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
//         caption: "Himalayan Mountains - Breathtaking views",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1708407298307-7f598cde2532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXRobWFuZHUlMjBOZXBhbCUyMHRlbXBsZXxlbnwxfHx8fDE3NzE0ODcyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
//         caption: "Kathmandu Valley - Ancient temples and culture",
//       },
//     ],
//   },
// ];

// export function TravelHighlights() {
//   const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

//   // Reset photo index when highlight changes
//   useEffect(() => {
//     setCurrentPhotoIndex(0);
//   }, [selectedHighlight]);

//   // Keyboard navigation
//   useEffect(() => {
//     if (!selectedHighlight) return;

//     const handleKeyPress = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") {
//         goToPrevious();
//       } else if (e.key === "ArrowRight") {
//         goToNext();
//       } else if (e.key === "Escape") {
//         closeViewer();
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);
//     return () => window.removeEventListener("keydown", handleKeyPress);
//   }, [selectedHighlight, currentPhotoIndex]);

//   const openHighlight = (highlight: Highlight) => {
//     setSelectedHighlight(highlight);
//     setCurrentPhotoIndex(0);
//   };

//   const closeViewer = () => {
//     setSelectedHighlight(null);
//     setCurrentPhotoIndex(0);
//   };

//   const goToNext = () => {
//     if (!selectedHighlight) return;
//     setCurrentPhotoIndex((prev) =>
//       prev === selectedHighlight.photos.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToPrevious = () => {
//     if (!selectedHighlight) return;
//     setCurrentPhotoIndex((prev) =>
//       prev === 0 ? selectedHighlight.photos.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="travel">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Travel Highlights
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400 text-lg">
//               Adventures around the world 🌏
//             </p>
//           </div>

//           {/* Instagram-style Highlights */}
//           <div className="flex gap-6 justify-center flex-wrap">
//             {highlights.map((highlight, index) => (
//               <motion.div
//                 key={highlight.id}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="flex flex-col items-center cursor-pointer group"
//                 onClick={() => openHighlight(highlight)}
//               >
//                 {/* Circular Highlight */}
//                 <div className="relative mb-3">
//                   {/* Gradient Border */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 group-hover:scale-110 transition-transform duration-300">
//                     <div className="bg-white dark:bg-gray-900 rounded-full p-1">
//                       <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden">
//                         <ImageWithFallback
//                           src={highlight.cover}
//                           alt={highlight.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* Spacer for absolute positioning */}
//                   <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" />
//                 </div>

//                 {/* Title */}
//                 <div className="text-center">
//                   <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
//                     {highlight.title}
//                   </h3>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     {highlight.date}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Add More CTA */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-12 text-center"
//           >
//             <p className="text-gray-600 dark:text-gray-400 text-sm">
//               Click on a highlight to view photos from that trip
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Story-like Viewer Modal */}
//       <AnimatePresence>
//         {selectedHighlight && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black flex items-center justify-center"
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeViewer}
//               className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors"
//             >
//               <X className="h-6 w-6 text-white" />
//             </button>

//             {/* Progress Indicators */}
//             <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-1 px-4 w-full max-w-md">
//               {selectedHighlight.photos.map((_, index) => (
//                 <div
//                   key={index}
//                   className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
//                 >
//                   <motion.div
//                     className="h-full bg-white rounded-full"
//                     initial={{ width: index < currentPhotoIndex ? "100%" : "0%" }}
//                     animate={{
//                       width:
//                         index < currentPhotoIndex
//                           ? "100%"
//                           : index === currentPhotoIndex
//                           ? "100%"
//                           : "0%",
//                     }}
//                     transition={{
//                       duration: index === currentPhotoIndex ? 3 : 0.3,
//                       ease: "linear",
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Location & Info Header */}
//             <div className="absolute top-16 left-0 right-0 z-10 px-6 flex items-center gap-3">
//               <div className="flex items-center gap-2 text-white">
//                 <MapPin className="h-5 w-5" />
//                 <div>
//                   <h3 className="font-semibold text-lg">{selectedHighlight.title}</h3>
//                   <p className="text-sm text-white/80">{selectedHighlight.date}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Main Image */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentPhotoIndex}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.3 }}
//                 className="relative w-full h-full flex items-center justify-center px-4"
//               >
//                 <img
//                   src={selectedHighlight.photos[currentPhotoIndex].src}
//                   alt={selectedHighlight.photos[currentPhotoIndex].caption || ""}
//                   className="max-w-full max-h-[80vh] object-contain rounded-lg"
//                 />

//                 {/* Caption */}
//                 {selectedHighlight.photos[currentPhotoIndex].caption && (
//                   <div className="absolute bottom-20 left-0 right-0 px-6 text-center">
//                     <p className="text-white text-lg font-medium bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
//                       {selectedHighlight.photos[currentPhotoIndex].caption}
//                     </p>
//                   </div>
//                 )}
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation Buttons */}
//             {selectedHighlight.photos.length > 1 && (
//               <>
//                 <button
//                   onClick={goToPrevious}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-colors"
//                 >
//                   <ChevronLeft className="h-8 w-8 text-white" />
//                 </button>
//                 <button
//                   onClick={goToNext}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-colors"
//                 >
//                   <ChevronRight className="h-8 w-8 text-white" />
//                 </button>
//               </>
//             )}

//             {/* Photo Counter */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
//               <p className="text-white text-sm font-medium">
//                 {currentPhotoIndex + 1} / {selectedHighlight.photos.length}
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

// Define types
interface TravelPhoto {
  src: string;
  caption?: string;
}

interface Highlight {
  id: string;
  title: string;
  cover: string;
  location: string;
  date: string;
  photos: TravelPhoto[];
}

export function TravelHighlights() {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // 1. Fetch and Repair URLs
  useEffect(() => {
    async function loadTrips() {
      try {
        setLoading(true);
        
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/kv_store_b0d9ba53?select=*`,
          {
            headers: {
              'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json'
            },
          }
        );

        if (!response.ok) throw new Error("Failed to connect to Supabase");
        
        const rawData = await response.json();

        const freshData = rawData.map((row: any) => {
          const tripData = typeof row.value === 'string' ? JSON.parse(row.value) : row.value;
          
          // URL FIXER: Converts /sign/ URLs to /public/ URLs and removes expiring tokens
          const fixUrl = (path: string) => {
            if (!path) return "";
            
            let finalUrl = "";
            
            if (path.includes('/object/sign/')) {
              // Extract the file path after the bucket name
              const parts = path.split('make-b0d9ba53-travel/');
              const filenamePath = parts[1].split('?')[0];
              finalUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/make-b0d9ba53-travel/${filenamePath}`;
            } else if (path.startsWith('http')) {
              // Convert authenticated to public
              finalUrl = path.replace('/authenticated/', '/public/').split('?')[0];
            } else {
              // Build from raw path
              const cleanPath = path.startsWith('/') ? path.substring(1) : path;
              finalUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/make-b0d9ba53-travel/${cleanPath}`;
            }

            // Append timestamp to prevent browser caching issues
            return `${finalUrl}?t=${Date.now()}`;
          };

          return {
            ...tripData,
            id: row.key,
            cover: fixUrl(tripData.cover),
            photos: Array.isArray(tripData.photos) ? tripData.photos.map((p: any) => ({
              ...p,
              src: fixUrl(p.src || p.url),
            })) : [],
          };
        });

        setHighlights(freshData);
      } catch (error) {
        console.error("Supabase Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTrips();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedHighlight) return;
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      else if (e.key === "ArrowRight") goToNext();
      else if (e.key === "Escape") closeViewer();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedHighlight, currentPhotoIndex]);

  const openHighlight = (highlight: Highlight) => {
    setSelectedHighlight(highlight);
    setCurrentPhotoIndex(0);
  };

  const closeViewer = () => {
    setSelectedHighlight(null);
    setCurrentPhotoIndex(0);
  };

  const goToNext = () => {
    if (!selectedHighlight) return;
    setCurrentPhotoIndex((prev) =>
      prev === selectedHighlight.photos.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevious = () => {
    if (!selectedHighlight) return;
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? selectedHighlight.photos.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500 animate-pulse">
        Loading your adventures...
      </div>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="travel">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Travel Highlights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Adventures around the world 🌏
            </p>
          </div>

          <div className="flex gap-6 justify-center flex-wrap">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => openHighlight(highlight)}
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="bg-white dark:bg-gray-900 rounded-full p-1">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-50">
                        <ImageWithFallback
                          src={highlight.cover}
                          alt={highlight.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" />
                </div>

                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {highlight.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedHighlight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <button
              onClick={closeViewer}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="absolute top-16 left-0 right-0 z-10 px-6 flex items-center gap-3">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5" />
                <div>
                  <h3 className="font-semibold text-lg">{selectedHighlight.title}</h3>
                  <p className="text-sm text-white/80">{selectedHighlight.date}</p>
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhotoIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full h-full flex items-center justify-center px-4"
              >
                <img
                  src={selectedHighlight.photos[currentPhotoIndex]?.src}
                  alt="Gallery Item"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {selectedHighlight.photos.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-4 transition-colors"
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-4 transition-colors"
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}