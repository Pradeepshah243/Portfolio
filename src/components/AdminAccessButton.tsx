import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Settings, X } from "lucide-react";

interface AdminAccessButtonProps {
  onAccessAdmin: () => void;
}

export function AdminAccessButton({ onAccessAdmin }: AdminAccessButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      {/* Floating Admin Button - Bottom Left */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setShowConfirm(true)}
        className="fixed bottom-24 left-6 z-40 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        title="Admin Access"
      >
        <Settings className="w-5 h-5" />
      </motion.button>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Access Admin Panel
                </h3>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                You're about to access the Travel Highlights Admin Panel where you can manage your travel photos and videos.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowConfirm(false);
                    onAccessAdmin();
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium"
                >
                  Open Admin Panel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
