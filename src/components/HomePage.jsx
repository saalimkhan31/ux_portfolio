import { useEffect, useRef } from "react";
import gsap from "gsap";
import myImage from "../assets/images/myImage.png";

const HomePage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      backgroundPositionX: "200%",
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const scrollToWork = () => {
    document
      .getElementById("work-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0B2432] text-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 pl-2 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-12">
          <h1
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight"
            style={{ fontFamily: "Duplet", fontWeight: 400 }}
          >
            <span className="bg-gradient-to-r from-[#F5F5DC] via-[#D4AF37] to-[#C9B59A] text-transparent bg-clip-text">
              I'm Saalim Khan
            </span>
          </h1>

          <h2
            ref={textRef}
            style={{
              fontFamily: "Duplet",
              fontWeight: 700,
              backgroundImage:
                "linear-gradient(90deg, #ff0000, #ff7300, #fffb00, #ffd700, #48ff00, #00ff7f, #87CEEB, #ff1493, #ff69b4, #ff4500, #ff0080",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-2 sm:mt-3"
          >
            A Product Designer
          </h2>

          <p
            style={{
              fontFamily: "Duplet",
              fontWeight: 400,
              letterSpacing: "0.5px",
            }}
            className="tracking-wide text-sm sm:text-base md:text-lg xl:text-xl text-yellow-100"
          >
            I design products for seamless experience you'll love.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={myImage}
            alt="Saalim Khan - Product Designer"
            className="w-40 sm:w-48 md:w-56 lg:w-[400px] xl:w-[480px] rounded-xl"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <button
          onClick={scrollToWork}
          className="flex flex-col items-center animate-bounce cursor-pointer px-4 py-2 rounded-lg transition-all duration-300"
        >
          <p className="text-yellow-100 text-xs sm:text-sm md:text-base mb-1 sm:mb-2 font-medium transition-all duration-300 hover:text-yellow-300">
            Scroll down to see my work
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-100 transition-all duration-300 hover:text-yellow-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HomePage;
