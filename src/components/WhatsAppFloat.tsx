import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = "9779812148801"; // Example: Nepal number
    const message = encodeURIComponent("Hello Pradeep! I'd like to connect with you.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      
      {/* Tooltip */}
      <div className="absolute right-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat on WhatsApp
      </div>
    </motion.button>
  );
}
