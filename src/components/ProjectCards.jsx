import groundImage from "../assets/images/project-img-2.jpg";

export default function WorkSection() {
  const projects = [
    {
      title: "Sporloc – Turf Booking App",
      description:
        "An online platform for booking sports grounds and turfs in real-time.",
      image: groundImage,
    },
    {
      title: "Pixonix AI – AI & IoT Solutions",
      description:
        "A cutting-edge AI and IoT company website showcasing services and projects.",
      image: groundImage,
    },
    {
      title: "Hotel & Tours Booking Website",
      description:
        "A travel booking website offering various holiday packages and destinations.",
      image: groundImage,
    },
  ];

  return (
    <section
      id="work-section"
      className="bg-[#0B2432] pt-8 pb-24 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="relative text-4xl font-bold text-yellow-100 text-center mb-16 before:content-[''] before:absolute before:left-1/2 before:bottom-[-10px] before:w-24 before:h-[3px] before:bg-yellow-100 before:-translate-x-1/2 after:content-[''] after:absolute after:left-1/2 after:bottom-[-18px] after:w-12 after:h-[3px] after:bg-yellow-100 after:-translate-x-1/2"
          style={{ fontFamily: "Duplet", fontWeight: 700 }}
        >
          My Work
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Smooth Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

              {/* Text & Button Section */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <div>
                  <h3
                    className="text-2xl font-semibold text-yellow-100"
                    style={{
                      fontFamily: "Duplet",
                      fontWeight: 600,
                      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-md text-yellow-100 mt-1"
                    style={{
                      fontFamily: "Duplet",
                      fontWeight: 400,
                      textShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* See Portfolio Button */}
                <a
                  href="/portfolio"
                  className="text-yellow-100 text-md md:text-lg font-semibold underline decoration-yellow-100 transition-all duration-300 hover:text-white hover:decoration-white"
                  style={{
                    fontFamily: "Duplet",
                    fontWeight: 600,
                    textShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  See Portfolio →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
