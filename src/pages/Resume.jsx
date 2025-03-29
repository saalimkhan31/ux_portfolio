import React from "react";
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-gray-700 hover:text-black transition"
      >
        <FaArrowLeft className="w-6 h-6" />
      </button>

      <h2 className="text-2xl font-bold mb-4">My Resume</h2>

      {/* Embedded PDF Viewer */}
      <iframe
        src="/resume.pdf"
        className="w-full max-w-3xl h-[500px] border shadow-lg rounded-lg"
        title="Resume"
      ></iframe>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download="My_Resume.pdf"
        className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        <FaDownload />
        Download Resume
      </a>
    </div>
  );
}
