export default function Footer() {
  return (
    <footer className="bg-[#0B2432] border-t-[1px] border-yellow-500 h-[200px] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-6 text-center w-full relative">
      <div className="flex items-center space-x-4">
        <h1
          className="bg-gradient-to-r from-[#FFEBCD] to-[#C9B59A] text-transparent bg-clip-text text-2xl sm:text-3xl font-bold transition-all duration-300"
          style={{
            fontFamily: "Duplet",
            fontWeight: "600",
            fontSize: "1.5rem",
          }}
        >
          Saalim Khan
        </h1>
      </div>
      <p
        style={{
          fontFamily: "Duplet",
          fontWeight: 400,
          letterSpacing: "1px",
        }}
        className="tracking-wide text-sm sm:text-base md:text-lg xl:text-xl text-yellow-100"
      >
        "Designing digital experiences that inspire and empower."
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          style={{ fontFamily: "Duplet" }}
          className="text-yellow-100 text-sm sm:text-base md:text-lg font-medium px-6 py-3 border border-yellow-100 rounded-lg transition-all transform hover:scale-105 hover:bg-yellow-100 hover:text-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
        >
          LinkedIn
        </button>
        <button
          style={{ fontFamily: "Duplet" }}
          className="text-yellow-100 text-sm sm:text-base md:text-lg font-medium px-6 py-3 border border-yellow-100 rounded-lg transition-all transform hover:scale-105 hover:bg-yellow-100 hover:text-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
        >
          GitHub
        </button>
        <button
          style={{ fontFamily: "Duplet" }}
          className="text-yellow-100 text-sm sm:text-base md:text-lg font-medium px-6 py-3 border border-yellow-100 rounded-lg transition-all transform hover:scale-105 hover:bg-yellow-100 hover:text-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
        >
          Behance
        </button>
      </div>
    </footer>
  );
}
