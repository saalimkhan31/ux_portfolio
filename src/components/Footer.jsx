import { useState, useEffect } from "react";
import myImage from "../assets/images/myImage.png";

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowContact(screenWidth >= 200 && screenWidth <= 767); // Show between 200px - 767px
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-[#EFECE3] border-t-[1px] border-[#0000FF] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 text-center w-full space-y-4 sm:space-y-0">
      {/* Left Side - Image & Name */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 p-[3px] rounded-[100px] bg-gradient-to-r from-[#3d382f] to-[#c5b59d]">
          <img
            src={myImage}
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

      {/* Right Side - Social Buttons + Contact Button */}
      <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
        {["LinkedIn", "GitHub", "Behance"].map((platform) => (
          <button
            key={platform}
            style={{ fontFamily: "Duplet" }}
            className="text-[#0000FF] text-xs sm:text-sm md:text-base font-medium px-3 sm:px-4 md:px-5 py-1 sm:py-2 border border-[#0000FF] rounded-lg transition-all transform hover:scale-105 hover:bg-[#C5B59D] hover:text-[#3D382F] focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {platform}
          </button>
        ))}

        {/* Contact Button (Only Visible Between 200px - 767px) */}
        {showContact && (
          <button
            style={{ fontFamily: "Duplet" }}
            className="text-[#0000FF] text-xs sm:text-sm md:text-base font-medium px-3 sm:px-4 md:px-5 py-1 sm:py-2 border border-[#0000FF] rounded-lg transition-all transform hover:scale-105 hover:bg-[#0000FF] hover:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Contact
          </button>
        )}
      </div>
    </footer>
  );
}
