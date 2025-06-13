import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { LuLayoutDashboard, LuMail, LuMapPin, LuPhone } from "react-icons/lu"; // Added LuPhone
import { FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";

const UXSaalimLogo = () => (
  <NavLink to="/work" className="flex items-center justify-center group">
    <motion.div
      className="w-14 h-14 flex items-center justify-center text-[#0000FF]"
      whileHover={{ rotate: 15 }}
    >
      <LuLayoutDashboard className="text-5xl" />
    </motion.div>
    <div className="flex flex-col ml-4 leading-tight">
      <motion.h1
        className="bg-gradient-to-r from-[#0000FF] to-[#0000FF] text-transparent bg-clip-text text-4xl md:text-5xl font-bold tracking-wide"
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

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
    color: "#0077B5",
  },
  {
    name: "Dribbble",
    href: "#",
    icon: FaDribbble,
    color: "#EA4C89",
  },
  {
    name: "Behance",
    href: "#",
    icon: FaBehance,
    color: "#1769FF",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white border-t-4 border-[#0000FF] text-[#000000] pt-12 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16 text-center">
          {/* Explore Section */}
          <div className="space-y-4">
            <h2
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: "Duplet" }}
            >
              Explore
            </h2>
            {["Work", "About", "Resume", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-base text-[#000] hover:text-[#0000FF] transition-colors mt-4"
                style={{ fontFamily: "Duplet" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h2
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: "Duplet" }}
            >
              Connect
            </h2>
            <a
              href="mailto:hello@example.com"
              className="flex items-center justify-center space-x-2 text-base text-[#000] hover:text-[#0000FF] transition-colors mt-4 mx-auto"
              style={{ fontFamily: "Duplet" }}
            >
              <LuMail size={20} />
              <span>saalimkhan02@gmail.com</span>
            </a>
            <p
              className="flex items-center justify-center space-x-2 text-base mt-4 mx-auto"
              style={{ fontFamily: "Duplet" }}
            >
              <LuMapPin size={20} />
              <span>Based in Nagpur</span>
            </p>
            {/* Phone number with phone icon, same line and horizontally centered */}
            <p
              className="flex items-center justify-center space-x-2 text-base mt-4 mx-auto"
              style={{ fontFamily: "Duplet", maxWidth: "250px" }}
            >
              <LuPhone size={20} />
              <span>+917507388777</span>
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4 flex flex-col items-center">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "Duplet" }}
            >
              Links
            </h2>
            <div className="flex flex-col space-y-4 w-full max-w-xs mx-auto">
              {socialLinks.map(({ name, href, icon: Icon, color }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-base hover:text-[#0000FF] transition-colors mt-4"
                  style={{ fontFamily: "Duplet", color: "#000000" }}
                >
                  <Icon size={28} style={{ color }} />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Logo at Bottom Center */}
        <div className="mt-10 flex justify-center">
          <UXSaalimLogo />
        </div>
      </div>
    </footer>
  );
}
