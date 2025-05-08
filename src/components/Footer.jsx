import { useState, useEffect } from "react";
import myImage from "../assets/images/myImage.png";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <footer className="min-h-[300px] bg-gradient-to-br from-[#EFECE3]  border-t-1 border-[#0000FF] text-[#3D382F]">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <NavLink to="/work" className="flex items-center group">
                <motion.div
                  className="w-10 h-10 flex items-center justify-center"
                  whileHover={{ rotate: 15 }}
                >
                  <FaPaintBrush className="text-xl text-gray-800" />
                </motion.div>
                <h1
                  className="bg-gradient-to-r from-[#3d382f] to-[#5b5347] text-transparent bg-clip-text text-2xl font-bold tracking-wide cursor-pointer"
                  style={{
                    fontFamily: "Duplet",
                    fontWeight: "600",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Saalim
                </h1>
              </NavLink>
            </div>
            <p className="text-sm opacity-80" style={{ fontFamily: "Duplet" }}>
              Creating digital experiences that merge aesthetics with
              functionality.
            </p>
          </div>

          {/* Explore Section */}
          <div className="flex flex-col space-y-3">
            <h2
              className="text-lg font-semibold mb-2"
              style={{ fontFamily: "Duplet" }}
            >
              Explore
            </h2>
            {["Projects", "About", "Resume"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-[#0000FF] transition-colors text-sm"
                style={{ fontFamily: "Duplet" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Connect Section */}
          <div className="flex flex-col space-y-3">
            <h2
              className="text-lg font-semibold mb-2"
              style={{ fontFamily: "Duplet" }}
            >
              Connect
            </h2>
            <a
              href="mailto:hello@example.com"
              className="text-sm hover:text-[#0000FF] transition-colors"
              style={{ fontFamily: "Duplet" }}
            >
              ✉️ hello@example.com
            </a>
            <p className="text-sm" style={{ fontFamily: "Duplet" }}>
              📍 Based in Nagpur
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col space-y-3">
            <h2
              className="text-lg font-semibold mb-2"
              style={{ fontFamily: "Duplet" }}
            >
              Links
            </h2>
            {["LinkedIn", "Dribbble", "Behance"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-sm hover:text-[#0000FF] transition-colors"
                style={{ fontFamily: "Duplet" }}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0000FF] pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <p className="text-sm" style={{ fontFamily: "Duplet" }}>
              Copyright © 2025 Saalim Khan
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs" style={{ fontFamily: "Duplet" }}>
              Developed with ❤️ using React & Tailwind
            </span>
            <div className="w-4 h-4 bg-[#0000FF] rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
