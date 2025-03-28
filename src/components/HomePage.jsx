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

  return (
    <section className="relative bg-[#EFECE3] text-[#0000FF] min-h-[100vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-12 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:gap-10">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left pl-2 sm:pl-4 md:pl-6">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight block py-1"
            style={{ fontFamily: "Duplet", fontWeight: 400 }}
          >
            <span className="bg-gradient-to-r from-[#1E3A8A] via-[#0066CC] to-[#003366] text-transparent bg-clip-text">
              I'm Mohd Saalim
            </span>
          </h1>

          <h2
            ref={textRef}
            style={{
              fontFamily: "Duplet",
              fontWeight: 700,
              backgroundImage:
                "linear-gradient(90deg, #1E40AF, #2563EB, #3B82F6, #60A5FA, #93C5FD)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold block py-1 leading-tight"
          >
            A Product Designer
          </h2>

          <p
            className="tracking-wide text-base sm:text-lg md:text-xl xl:text-2xl text-[#1E3A8A] block py-1 leading-snug"
            style={{
              fontFamily: "Duplet",
              fontWeight: 400,
              letterSpacing: "0.3px",
            }}
          >
            I design products for seamless experiences you'll love.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <img
            src={myImage}
            alt="Saalim Khan - Product Designer"
            className="w-60 sm:w-72 md:w-80 lg:w-[28rem] xl:w-[32rem] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
