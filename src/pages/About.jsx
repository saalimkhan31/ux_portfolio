import React from "react";
import { FaFigma, FaSketch, FaReact, FaMapMarkerAlt } from "react-icons/fa";
import { SiMiro, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import image from "../assets/images/myImage.png";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-[100px]">
      <div className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-16 pb-54">
        {/* Image & Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          {/* Image */}
          <div className="w-36 h-36 md:w-52 md:h-52">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full rounded-full object-cover "
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left px-4">
            <h1
              className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent tracking-wide"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Product Designer
            </h1>

            {/* Location */}
            <div
              className="flex items-center justify-center md:justify-start gap-2 mb-3 text-indigo-700 text-lg font-medium"
              style={{ fontFamily: "Duplet" }}
            >
              <FaMapMarkerAlt className="text-indigo-500 text-xl" />
              <span>Based in Nagpur, India</span>
            </div>

            <p
              className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
              style={{ fontFamily: "Duplet" }}
            >
              Former industrial designer, now crafting intuitive, AI-driven
              digital products. I blend visual elegance with user-centered
              functionality to build tools people truly enjoy using.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-12">
            {/* About Section */}

            {/* Experience Section */}
            {/* Experience Section */}
            {/* Experience Section */}
            <section className="bg-white pt-10 pb-10 px-8 rounded-xl ">
              <h2
                className="text-3xl mb-6"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                Experience
              </h2>

              <div className="border-l-4 border-blue-300 pl-6">
                <h3
                  className="text-xl"
                  style={{ fontFamily: "Duplet", fontWeight: 700 }}
                >
                  Frontend Developer Intern & UI/UX Designer
                </h3>
                <p
                  className="text-sm text-blue-600 mb-2"
                  style={{ fontFamily: "Duplet" }}
                >
                  Jan 2023 – Dec 2023
                </p>
                <p className="text-gray-800" style={{ fontFamily: "Duplet" }}>
                  Completed a one-year internship where I worked on building
                  responsive user interfaces using React and Material UI. I also
                  contributed to UI/UX design by creating wireframes,
                  prototypes, and improving usability. Collaborated with
                  developers and stakeholders to design clean, accessible, and
                  user-friendly web experiences.
                </p>
              </div>
            </section>

            {/* Differentiation Section */}
            <section className="bg-white p-8 rounded-xl">
              <h2
                className="text-3xl mb-6"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                What Differentiates Me
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    {/* Sparkles Icon from Heroicons */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.364-6.364l-1.06 1.06M6.696 17.304l-1.06 1.06m12.728 0l-1.06-1.06M6.696 6.696L5.636 5.636M12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-xl mb-1"
                      style={{ fontFamily: "Duplet", fontWeight: 700 }}
                    >
                      Proactive Feedback Seeker
                    </h3>
                    <p
                      className="text-gray-800"
                      style={{ fontFamily: "Duplet" }}
                    >
                      Regular stakeholder retrospectives and a continuous
                      improvement mindset.
                    </p>
                  </div>
                </div>
                {/* Add more points here if needed */}
              </div>
            </section>
          </div>

          {/* Right Column - Skills */}
          <aside className="space-y-12">
            {/* Design Tools */}
            <section className="bg-white p-8 rounded-xl ">
              <h3
                className="text-2xl mb-6"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                Design Tools
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <SkillItem
                  icon={<FaFigma className="w-7 h-7 text-purple-600" />}
                  name="Figma"
                />
                <SkillItem
                  icon={<FaSketch className="w-7 h-7 text-orange-500" />}
                  name="Sketch"
                />
                <SkillItem
                  icon={<SiMiro className="w-7 h-7 text-blue-600" />}
                  name="Miro"
                />
              </div>
            </section>

            {/* Development Skills */}
            <section className="bg-white p-8 rounded-xl ">
              <h3
                className="text-2xl mb-6"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                Development
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <SkillItem
                  icon={<SiHtml5 className="w-7 h-7 text-orange-500" />}
                  name="HTML5"
                />
                <SkillItem
                  icon={<SiCss3 className="w-7 h-7 text-blue-600" />}
                  name="CSS3"
                />
                <SkillItem
                  icon={<FaReact className="w-7 h-7 text-blue-400" />}
                  name="React"
                />
                <SkillItem
                  icon={<SiJavascript className="w-7 h-7 text-yellow-500" />}
                  name="JavaScript"
                />
              </div>
            </section>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function SkillItem({ icon, name }) {
  return (
    <div
      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
      style={{ fontFamily: "Duplet" }}
    >
      {icon}
      <span className="text-gray-700 text-lg">{name}</span>
    </div>
  );
}
