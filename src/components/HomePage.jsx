import { useEffect, useRef } from "react";
import gsap from "gsap";
import myImage from "../assets/images/myImage.png";

import { FaFigma, FaSketch } from "react-icons/fa";
import { SiMiro, SiNotion } from "react-icons/si";

const SkillItem = ({ icon, name }) => (
  <div className="flex items-center gap-3">
    <div className="text-2xl">{icon}</div>
    <span className="font-semibold" style={{ fontFamily: "Duplet" }}>
      {name}
    </span>
  </div>
);

const HomePage = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const headingText = headingRef.current.textContent;
    const subheadingText = subheadingRef.current.textContent;

    headingRef.current.innerHTML = headingText
      .split("")
      .map((char) => `<span class="char">${char}</span>`)
      .join("");

    subheadingRef.current.innerHTML = subheadingText
      .split("")
      .map((char) => `<span class="char">${char}</span>`)
      .join("");

    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current.querySelectorAll(".char"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.out",
      }
    ).fromTo(
      subheadingRef.current.querySelectorAll(".char"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }, []);
  const projects = [
    {
      id: 1,
      title: "BookMyGround",
      description:
        "UX process highlights, wireframes, prototypes & design solutions.",
      image:
        "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://www.behance.net/gallery/195243479/Bookmyground-Online-Ground-and-turf-booking-website",
    },
    {
      id: 2,
      title: "Yashn Senai",
      description: "Project two description here.",
      image:
        "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://yashshenai.com/postman-search",
    },
    {
      id: 3,
      title: "Dashbaord",
      description: "Project three description here.",
      image:
        "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://telary.studio/work/everchron/",
    },
  ];

  return (
    <>
      <section
        className="relative bg-[#EFECE3] text-[#0000FF] min-h-[100vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-12 sm:pt-12 md:pt-16 lg:pt-20 pb-16 sm:pb-20 md:pb-24"
        // Increased bottom padding here (pb-16, pb-20, pb-24 for responsiveness)
      >
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:gap-10">
          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left pl-2 sm:pl-4 md:pl-6 pt-between-md-lg">
            <h1
              ref={headingRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight block py-1"
              style={{ fontFamily: "Duplet", fontWeight: 400 }}
            >
              Hello, I'm Saalim
            </h1>

            <h2
              ref={subheadingRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold block py-1 leading-tight"
              style={{ fontFamily: "Duplet", fontWeight: 700 }}
            >
              UX designer crafting delightful visuals & functional interfaces.
            </h2>

            {/* Design Tools box below text */}
            <div className="bg-white pt-6 pb-10 rounded-xl md:mx-0 flex gap-6 justify-center md:justify-start flex-wrap-below-440">
              {/* icons */}
              <SkillItem
                icon={<FaFigma className="w-6 h-6 text-purple-600" />}
                name="Figma"
              />
              <SkillItem
                icon={<FaSketch className="w-6 h-6 text-orange-500" />}
                name="Sketch"
              />
              <SkillItem
                icon={<SiMiro className="w-6 h-6 text-blue-600" />}
                name="Miro"
              />
              <SkillItem
                icon={<SiNotion className="w-6 h-6 text-black" />}
                name="Notion"
              />
            </div>
          </div>

          {/* Right Side - Image with Background Lines */}
          {/* Right Side - Image with Background Lines */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 relative">
            <svg
              className="absolute inset-0 w-full h-full -z-10 opacity-40"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              fill="none"
              viewBox="0 0 500 500"
            >
              <path
                d="M0,50 C150,100 350,0 500,50"
                stroke="#1E3A8A" // Tailwind blue-900
                strokeWidth="1"
                fill="transparent"
              />
              <path
                d="M0,150 C150,200 350,100 500,150"
                stroke="#1E3A8A"
                strokeWidth="1"
                fill="transparent"
              />
              <path
                d="M0,250 C150,300 350,200 500,250"
                stroke="#1E3A8A"
                strokeWidth="1"
                fill="transparent"
              />
            </svg>

            <img
              src={myImage}
              alt="Saalim Khan - Product Designer"
              className="w-60 sm:w-72 md:w-80 lg:w-[28rem] xl:w-[32rem] rounded-xl relative z-10"
            />
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="scroll-button-wrapper">
          <button
            onClick={() =>
              document
                .querySelector("#projects-section")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="scroll-button"
          >
            ↓ Scroll to Projects
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects-section"
        className="bg-[#F5F4EF] text-[#000] px-6 sm:px-10 md:px-16 lg:px-20 py-40"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Bebas Neue', cursive" }}
          >
            Projects / Case Studies
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, image, link }) => (
            <div
              key={id}
              className="relative group bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:bg-blue-50"
              // added hover:bg-blue-50 for a subtle light blue background on hover
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-72 sm:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110 z-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#0000FF] border border-[#0000FF] hover:bg-[#0000FF] hover:text-[#303062] px-5 py-2 rounded-full font-medium transition duration-300"
                    style={{ fontFamily: "Duplet" }}
                  >
                    View Project
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3
                  className="text-xl sm:text-2xl font-semibold mb-2 transition-colors duration-300 group-hover:text-[#0000FF]"
                  style={{ fontFamily: "Duplet" }}
                >
                  {title}
                </h3>
                <p
                  className="text-base text-gray-700 opacity-90 leading-relaxed"
                  style={{ fontFamily: "Duplet" }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
