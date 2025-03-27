import PropTypes from "prop-types";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-[#0B2432] text-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2"
          style={{ fontFamily: "Duplet" }}
        >
          {title}
        </h3>
        <p className="text-gray-300 mb-4" style={{ fontFamily: "Duplet" }}>
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-100 text-black py-2 px-4 rounded-lg hover:bg-yellow-200 transition"
          style={{ fontFamily: "Duplet" }}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
