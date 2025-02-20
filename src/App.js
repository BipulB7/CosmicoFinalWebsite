import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  // Array of gradient colors
  const gradientColors = [
    "from-orange-500 via-yellow-400 to-red-500",
    "from-red-500 via-orange-400 to-yellow-300",
    "from-yellow-500 via-orange-500 to-red-400",
  ];

  return (
    <div className="relative bg-black min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-75"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3], // Twinkle effect
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Top Left: GitHub & Twitter Icons */}
      <div className="absolute top-4 left-4 flex space-x-3">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-4 h-4 text-white" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Top Right: Login Button */}
      <button className="absolute top-4 right-4 px-6 py-2 text-lg font-semibold rounded-md bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 text-black hover:opacity-90">
        Login
      </button>

      {/* Main Content */}
      <div className="text-center">
        {/* Animated Cosmico AI Title */}
        <motion.h1
          className="text-6xl font-extrabold bg-clip-text text-transparent animate-gradient"
          animate={{
            backgroundImage: [
              "linear-gradient(to right, orange, yellow, red)",
              "linear-gradient(to right, red, orange, yellow)",
              "linear-gradient(to right, yellow, orange, red)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(to right, orange, yellow, red)",
          }}
        >
          Cosmico AI
        </motion.h1>

        {/* Subtitle */}
        <p className="text-lg text-orange-200 mt-2">
          Your one-stop hub for all scientific research, powered by AI
        </p>
      </div>
    </div>
  );
}

export default App;
