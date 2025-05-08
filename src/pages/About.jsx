import React from "react";
import { FaFigma, FaSketch, FaReact } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { SiMiro, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import image from "../assets/images/myImage.png";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-[100px]">
      <div className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image & Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Simplified Image Container */}
          <div className="w-32 h-32 md:w-48 md:h-48">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"
              style={{ fontFamily: "Duplet", fontWeight: 700 }}
            >
              Product Designer
            </h1>

            {/* Location with dot icon */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <FaMapMarker className="text-blue-500 text-lg relative">
                {/* Add dot inside the icon */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-1 h-1 bg-blue-500 rounded-full"></span>
              </FaMapMarker>
              <p
                className="text-base md:text-lg text-blue-800"
                style={{ fontFamily: "Duplet", fontWeight: 500 }}
              >
                Based in Nagpur, India
              </p>
            </div>

            <p
              className="text-gray-800 text-sm md:text-base leading-relaxed max-w-prose mx-auto md:mx-0"
              style={{ fontFamily: "Duplet", fontWeight: 400 }}
            >
              Industrial designer turned digital product specialist, passionate
              about creating AI-powered experiences that solve real user
              problems. I believe in blending aesthetic sensibility with
              functional design to build products people love to use.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - About & Experience */}
          <div className="md:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "Duplet", fontWeight: 700 }}
              >
                About Me
              </h2>
              <p
                className="leading-relaxed text-gray-800"
                style={{ fontFamily: "Duplet", fontWeight: 400 }}
              >
                I'm a product designer specializing in 0→1 and Gen-AI
                experiences. With a background in Industrial Design, I bring a
                unique perspective to digital product creation. Always eager to
                learn and adapt, I thrive in dynamic environments where I can
                solve complex problems.
              </p>
            </div>

            {/* Experience Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "Duplet", fontWeight: 700 }}
              >
                Experience
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-200 pl-4">
                  <h3
                    className="text-lg"
                    style={{ fontFamily: "Duplet", fontWeight: 700 }}
                  >
                    Product Designer 1 @ XYZ.com
                  </h3>
                  <p
                    className="text-sm text-blue-600"
                    style={{ fontFamily: "Duplet", fontWeight: 400 }}
                  >
                    Jan 2024 - Present
                  </p>
                  <p
                    className="mt-1 text-gray-800"
                    style={{ fontFamily: "Duplet", fontWeight: 400 }}
                  >
                    Leading AI-powered feature development and user experience
                    innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Differentiation Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "Duplet", fontWeight: 700 }}
              >
                What Differentiates Me
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    💬
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "Duplet", fontWeight: 700 }}>
                      Proactive Feedback Seeker
                    </h3>
                    <p
                      className="text-sm text-gray-800"
                      style={{ fontFamily: "Duplet", fontWeight: 400 }}
                    >
                      Regular stakeholder retrospectives and continuous
                      improvement mindset
                    </p>
                  </div>
                </div>
                {/* Add other differentiation points similarly */}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Design Tools */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3
                className="text-xl mb-4"
                style={{ fontFamily: "Duplet", fontWeight: 700 }}
              >
                Design Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
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
              </div>
            </div>

            {/* Development Skills */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3
                className="text-xl mb-4"
                style={{ fontFamily: "Duplet", fontWeight: 700 }}
              >
                Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <SkillItem
                  icon={<SiHtml5 className="w-6 h-6 text-orange-500" />}
                  name="HTML5"
                />
                <SkillItem
                  icon={<SiCss3 className="w-6 h-6 text-blue-600" />}
                  name="CSS3"
                />
                <SkillItem
                  icon={<FaReact className="w-6 h-6 text-blue-400" />}
                  name="React"
                />
                <SkillItem
                  icon={<SiJavascript className="w-6 h-6 text-yellow-500" />}
                  name="JavaScript"
                />
              </div>
            </div>
          </div>
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
      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
      style={{ fontFamily: "Duplet", fontWeight: 400 }}
    >
      {icon}
      <span className="text-gray-700">{name}</span>
    </div>
  );
}
