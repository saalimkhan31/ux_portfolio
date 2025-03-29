import React from "react";
import {
  FaLinkedin,
  FaDribbble,
  FaBehance,
  FaPaperPlane,
} from "react-icons/fa";
import { Plane } from "lucide-react";

export default function ContactForm() {
  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-20"
      style={{ fontFamily: "Duplet, sans-serif" }}
    >
      <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Panel - Contact Info */}
        <div className="bg-gradient-to-br p-8 md:p-12 text-gray-800">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Let's Build Something Great
              </h2>
              <p className="text-gray-800 opacity-90 leading-relaxed">
                Innovation starts with a conversation. Share your vision and
                let's create exceptional digital experiences together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <FaPaperPlane className="text-xl text-gray-800" />
                </div>
                <div>
                  <p className="text-sm font-medium opacity-90">
                    Average Response Time
                  </p>
                  <p className="text-xl font-bold">12 Hours</p>
                </div>
              </div>

              <div className="pt-6 border-t border-blue-500">
                <h3 className="text-lg font-semibold mb-4">Connect Directly</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-2 hover:bg-blue-600 rounded-lg transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-2 hover:bg-blue-600 rounded-lg transition-colors"
                    aria-label="Dribbble profile"
                  >
                    <FaDribbble className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-2 hover:bg-blue-600 rounded-lg transition-colors"
                    aria-label="Behance profile"
                  >
                    <FaBehance className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="p-8 md:p-12">
          <form className="space-y-6" aria-labelledby="form-heading">
            <h2
              id="form-heading"
              className="text-2xl font-bold text-gray-900 sr-only"
            >
              Contact Form
            </h2>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                  <span className="text-red-600 ml-1" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg
                    focus:border-blue-600 focus:ring-2 focus:ring-blue-200
                    transition-all duration-200"
                  placeholder="Alex Johnson"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                  <span className="text-red-600 ml-1" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg
                    focus:border-blue-600 focus:ring-2 focus:ring-blue-200
                    transition-all duration-200"
                  placeholder="hello@example.com"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg
                    focus:border-blue-600 focus:ring-2 focus:ring-blue-200
                    transition-all duration-200"
                >
                  <option>UI/UX Design</option>
                  <option>Product Strategy</option>
                  <option>Design System</option>
                  <option>AI Innovation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details
                  <span className="text-red-600 ml-1" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg
                    focus:border-blue-600 focus:ring-2 focus:ring-blue-200
                    transition-all duration-200"
                  placeholder="Describe your project vision..."
                  required
                  aria-required="true"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-700 to-indigo-600
                text-white rounded-lg hover:opacity-90 transition-opacity
                font-semibold flex items-center justify-center gap-2"
            >
              Send Message
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              We respect your privacy. No spam, ever.
              <span className="sr-only">Form submission confirmation</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
