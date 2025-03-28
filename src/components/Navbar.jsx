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
import image from "../assets/images/myImage.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white p-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 relative">
        {/* Logo */}
        <NavLink to="/work" className="flex items-center space-x-3">
          <div className="w-12 h-12 p-[3px] rounded-[100px] bg-gradient-to-r from-[#3d382f] to-[#c5b59d]">
            <img
              src={image}
              alt="Saalim Khan"
              className="w-full h-full rounded-[100px] object-cover p-1"
            />
          </div>
          <h1
            className="bg-gradient-to-r from-[#3d382f] to-[#5b5347] text-transparent bg-clip-text text-3xl font-bold tracking-wide cursor-pointer"
            style={{
              fontFamily: "Duplet",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            Saalim
          </h1>
        </NavLink>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          {!isOpen && (
            <FiMenu
              color="000"
              className="text-3xl cursor-pointer"
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
                  `relative pb-2 text-lg tracking-wide ${
                    isActive
                      ? "text-[#0000FF]  after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#0000FF]"
                      : "text-gray-900 hover:text-[#0000FF]"
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#0B2432] flex flex-col items-center justify-center md:hidden z-40 px-8">
          {/* Header inside Mobile Menu */}
          <div className="w-full flex items-center justify-between py-4">
            {/* Logo on Left */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 p-[3px] rounded-[100px] bg-gradient-to-r from-[#3d382f] to-[#c5b59d]">
                <img
                  src={image}
                  alt="Saalim Khan"
                  className="w-full h-full rounded-[100px] object-cover p-1"
                />
              </div>
              <h1
                className="bg-gradient-to-r from-[#3d382f] to-[#5b5347] text-transparent bg-clip-text text-3xl font-bold tracking-wide cursor-pointer"
                style={{
                  fontFamily: "Duplet",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                }}
              >
                Saalim
              </h1>
            </div>

            {/* Close Icon on Right */}
            <FiX
              className="text-4xl cursor-pointer text-black"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <ul className="flex flex-col space-y-6 text-center mt-10 w-full">
            {[
              { name: "Work", path: "/work" },
              { name: "About", path: "/about" },
              { name: "Resume", path: "/resume" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path} className="w-full">
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl tracking-wide block w-full text-center py-2 ${
                      isActive
                        ? "text-[#0000FF] font-bold" // Bold font for active tab
                        : "text-gray-900 hover:text-[#0000FF] font-normal"
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
