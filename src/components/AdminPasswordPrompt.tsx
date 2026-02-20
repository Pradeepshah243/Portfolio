import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, X, Eye, EyeOff } from "lucide-react";

interface AdminPasswordPromptProps {
  onAuthenticated: () => void;
  onCancel?: () => void;
}

export function AdminPasswordPrompt({ onAuthenticated, onCancel }: AdminPasswordPromptProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Set your admin password here (change this to your own secure password!)
  const ADMIN_PASSWORD = "Pradeep@3650"; // CHANGE THIS TO YOUR OWN PASSWORD!

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a small delay for security
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        // Store authentication in session (valid until browser closes)
        sessionStorage.setItem("admin_authenticated", "true");
        sessionStorage.setItem("admin_auth_time", Date.now().toString());
        onAuthenticated();
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8"
      >
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Access
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Enter password to access the admin panel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-red-600 dark:text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                <span>Access Admin Panel</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
          <p className="text-xs text-yellow-800 dark:text-yellow-200">
            <strong>Security Note:</strong> Keep your admin password private and don't share it with anyone.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}