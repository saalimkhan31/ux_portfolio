import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu"; // Updated icon
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const UXSaalimLogo = () => (
    <NavLink to="/work" className="flex items-center group">
      <motion.div
        className="w-10 h-10 flex items-center justify-center text-[#0000FF]"
        whileHover={{ rotate: 15 }}
      >
        <LuLayoutDashboard className="text-3xl" />
      </motion.div>
      <div className="flex flex-col ml-2 leading-tight">
        <motion.h1
          className="bg-gradient-to-r from-[#0000FF] to-[#0000FF] text-transparent bg-clip-text text-2xl md:text-3xl font-bold tracking-wide"
          style={{
            fontFamily: "'Anton', sans-serif",
            letterSpacing: "1px",
          }}
          whileHover={{ scale: 1.05 }}
        >
          Saalim
        </motion.h1>
      </div>
    </NavLink>
  );

  return (
    <nav className="bg-[#EFECE3] p-4 fixed top-0 left-0 w-full z-50">
      <div
        className={`container mx-auto flex justify-between items-center ${
          isOpen ? "px-6" : "px-4"
        } relative`}
      >
        {/* Logo */}
        <UXSaalimLogo />

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          {!isOpen && (
            <FiMenu
              className="text-2xl cursor-pointer text-[#0000FF]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {["Work", "About", "Resume", "Contact"].map((name) => (
            <li key={name}>
              <NavLink
                to={`/${name.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative pb-2 text-lg tracking-wide group ${
                    isActive
                      ? "text-[#0000FF] font-semibold"
                      : "text-black font-semibold"
                  } transition-all duration-300`
                }
                style={{ fontFamily: "'Duplet', sans-serif" }}
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000FF] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 w-full h-full bg-[#EFECE3] flex flex-col items-center justify-start pt-20 md:hidden z-40 px-6"
        >
          {/* Mobile Header */}
          <div className="w-full flex items-center justify-between absolute top-4 px-6">
            <UXSaalimLogo />
            <FiX
              className="text-2xl cursor-pointer text-[#0000FF]"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col space-y-6 text-center w-full mt-8">
            {["Work", "About", "Resume", "Contact"].map((name, index) => (
              <motion.li
                key={name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <NavLink
                  to={`/${name.toLowerCase()}`}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-xl tracking-wide block w-full py-2 px-4 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-[#0000FF] text-white font-bold"
                        : "text-black font-normal hover:bg-[#0000FF11]"
                    }`
                  }
                  style={{ fontFamily: "'Duplet', sans-serif" }}
                >
                  {name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
