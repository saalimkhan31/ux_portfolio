// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-[#0B2432] text-white p-6 fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 relative">
//         {/* Logo */}
//         <NavLink to="/work">
//           <h1
//             className="bg-gradient-to-r from-[#FFEBCD] to-[#C9B59A] text-transparent bg-clip-text text-3xl sm:text-4xl font-bold tracking-wide cursor-pointer"
//             style={{
//               fontFamily: "Duplet",
//               fontWeight: "600",
//               fontSize: "1.5rem",
//             }}
//           >
//             Saalim Khan
//           </h1>
//         </NavLink>

//         {/* Hamburger & Close Icon */}
//         <div className="md:hidden z-50">
//           {isOpen ? (
//             <FiX
//               className="text-3xl cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           ) : (
//             <FiMenu
//               className="text-3xl cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           )}
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex space-x-6">
//           {[
//             { name: "Work", path: "/work" },
//             { name: "About Me", path: "/aboutme" },
//           ].map((link) => (
//             <li key={link.path}>
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `relative pb-2 text-lg tracking-wide ${
//                     isActive
//                       ? "text-yellow-100  after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-100"
//                       : "text-gray-300 hover:text-white"
//                   } transition`
//                 }
//                 style={{ fontFamily: "Duplet" }}
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-[#0B2432] flex flex-col items-center justify-center transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 md:hidden z-40`}
//       >
//         {/* Close Icon */}
//         <FiX
//           className="text-4xl absolute top-6 right-6 cursor-pointer text-white"
//           onClick={() => setIsOpen(false)}
//         />

//         {/* Mobile Menu Items */}
//         <ul className="flex flex-col space-y-6 text-center">
//           {[
//             { name: "Work", path: "/work" },
//             { name: "About Me", path: "/aboutme" },
//           ].map((link) => (
//             <li key={link.path}>
//               <NavLink
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `text-3xl tracking-wide ${
//                     isActive
//                       ? "text-yellow-100"
//                       : "text-gray-300 hover:text-white"
//                   } transition`
//                 }
//                 style={{ fontFamily: "Duplet" }}
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ------------------------------

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#EFECE3] p-6 fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center px-6 relative">
        {/* Logo with Icon */}
        <NavLink to="/work" className="flex items-center  group">
          <motion.div
            className="w-12 h-12  flex items-center justify-center"
            whileHover={{ rotate: 15 }}
          >
            <FaPaintBrush className="text-2xl text-gray-800" />
          </motion.div>
          <h1
            className="bg-gradient-to-r from-[#3d382f] to-[#5b5347] text-transparent bg-clip-text text-3xl font-bold tracking-wide cursor-pointer"
            style={{
              fontFamily: "Duplet",
              fontWeight: "600",
              fontSize: "1.5rem",
              letterSpacing: "-0.5px",
            }}
          >
            Saalim
          </h1>
        </NavLink>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          {!isOpen && (
            <FiMenu
              className="text-3xl cursor-pointer text-[#3d382f]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {[
            { name: "Work", path: "/work" },
            { name: "About", path: "/about" },
            { name: "Resume", path: "/resume" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative pb-2 text-lg tracking-wide group ${
                    isActive
                      ? "text-[#0000FF] font-semibold"
                      : "text-[#3d382f] hover:text-[#0000FF]"
                  } transition-all duration-300`
                }
                style={{ fontFamily: "Duplet" }}
              >
                {link.name}
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
          className="fixed top-0 left-0 w-full h-screen bg-[#EFECE3] flex flex-col items-center justify-center md:hidden z-40 px-8"
        >
          {/* Mobile Menu Header */}
          <div className="w-full flex items-center justify-between py-4 absolute top-0 px-6">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center">
                <FaPaintBrush className="text-2xl text-gray-800" />
              </div>
              <h1
                className="bg-gradient-to-r from-[#3d382f] to-[#5b5347] text-transparent bg-clip-text text-3xl font-bold tracking-wide"
                style={{
                  fontFamily: "Duplet",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                }}
              >
                Saalim
              </h1>
            </div>

            <FiX
              className="text-3xl cursor-pointer text-[#3d382f]"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col space-y-8 text-center w-full">
            {[
              { name: "Work", path: "/work" },
              { name: "About", path: "/about" },
              { name: "Resume", path: "/resume" },
              { name: "Contact", path: "/contact" },
            ].map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl tracking-wide block w-full py-3 px-6 rounded-lg mx-auto max-w-xs ${
                      isActive
                        ? "bg-[#0000FF] text-blue-600 font-bold"
                        : "text-[#3d382f] hover:bg-[#0000FF11]"
                    } transition-all duration-300`
                  }
                  style={{ fontFamily: "Duplet" }}
                >
                  {link.name}
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
