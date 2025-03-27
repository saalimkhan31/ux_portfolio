import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "UX Case Study",
    description: "Redesigning a mobile booking app with better UX.",
    image: "/images/project1.jpg",
    link: "/uxcase",
  },
  {
    title: "E-Commerce Website",
    description: "A modern e-commerce website with a seamless UI.",
    image: "/images/project2.jpg",
    link: "#",
  },
  {
    title: "AI Dashboard",
    description: "An intuitive dashboard for monitoring AI models.",
    image: "/images/project3.jpg",
    link: "#",
  },
  {
    title: "Hotel Booking App",
    description: "A hotel & tour booking platform with real-time search.",
    image: "/images/project4.jpg",
    link: "#",
  },
];

const WorkComp = () => {
  return (
    <div className="min-h-screen bg-[#0B2432] text-white py-16 px-6">
      <h1
        className="text-4xl font-bold text-center mb-12"
        style={{ fontFamily: "Duplet" }}
      >
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default WorkComp;
