import { useState, useEffect } from "react";

export function AdminDebug() {
  const [info, setInfo] = useState({
    href: "",
    pathname: "",
    hash: "",
    search: "",
  });

  useEffect(() => {
    setInfo({
      href: window.location.href,
      pathname: window.location.pathname,
      hash: window.location.hash,
      search: window.location.search,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          🔧 Admin Debug Info
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Current URL Info
          </h2>
          <div className="space-y-2 font-mono text-sm">
            <div>
              <span className="text-gray-500">Full URL:</span>
              <br />
              <span className="text-blue-600 dark:text-blue-400">{info.href}</span>
            </div>
            <div>
              <span className="text-gray-500">Pathname:</span>
              <br />
              <span className="text-green-600 dark:text-green-400">{info.pathname}</span>
            </div>
            <div>
              <span className="text-gray-500">Hash:</span>
              <br />
              <span className="text-purple-600 dark:text-purple-400">{info.hash || "(none)"}</span>
            </div>
            <div>
              <span className="text-gray-500">Search:</span>
              <br />
              <span className="text-orange-600 dark:text-orange-400">{info.search || "(none)"}</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Navigation Tests
          </h2>
          <div className="space-y-4">
            <button
              onClick={() => {
                console.log("Navigating to /admin");
                window.location.href = "/admin";
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Go to /admin (window.location.href)
            </button>

            <button
              onClick={() => {
                console.log("Navigating to /admin via pathname");
                window.location.pathname = "/admin";
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Go to /admin (window.location.pathname)
            </button>

            <a
              href="/admin"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium text-center"
            >
              Go to /admin (Link)
            </a>

            <button
              onClick={() => {
                console.log("Navigating to home");
                window.location.href = "/";
              }}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Go to Home (/)
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6">
          <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">
            📝 Expected Behavior
          </h3>
          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• When pathname is <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">/admin</code> → Shows Admin Panel</li>
            <li>• When pathname is <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">/</code> → Shows Main Portfolio</li>
            <li>• Check browser console for any errors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
