import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B2432] text-white p-6  fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 relative">
        {/* Logo */}
        <NavLink to="/work">
          <h1
            className="bg-gradient-to-r from-[#FFEBCD] to-[#C9B59A] text-transparent bg-clip-text text-2xl sm:text-3xl font-bold transition-all duration-300 cursor-pointer"
            style={{ fontFamily: "Duplet" }}
          >
            Saalim Khan
          </h1>
        </NavLink>

        {/* Hamburger & Close Icon - Only One Visible at a Time */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {[
            { name: "Work", path: "/work" },
            { name: "About Me", path: "/aboutme" },
            { name: "Fun Time", path: "/funtime" },
            { name: "Contact Me", path: "/contact" },
            { name: "Resume", path: "/resume" },
          ].map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative pb-2 ${
                    isActive
                      ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                      : "text-gray-300 hover:text-white"
                  } transition`
                }
                style={{ fontFamily: "Duplet" }}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation (Full Screen) */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#0B2432] flex flex-col items-center justify-center transition-all duration-300 md:hidden z-40">
          {/* Mobile Menu Items */}
          <ul className="flex flex-col space-y-6 text-center">
            {[
              { name: "Work", path: "/work" },
              { name: "About Me", path: "/aboutme" },
              { name: "Fun Time", path: "/funtime" },
              { name: "Contact Me", path: "/contact" },
              { name: "Resume", path: "/resume" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl ${
                      isActive
                        ? "text-white font-bold"
                        : "text-gray-300 hover:text-white"
                    } transition`
                  }
                  style={{ fontFamily: "Duplet" }}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
