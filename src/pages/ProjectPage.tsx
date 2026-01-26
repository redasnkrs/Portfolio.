import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useEffect } from "react";
import { Carousel } from "../components/Carousel";

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="text-gray-400 hover:text-white underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container-6xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-8 text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl sm:text-7xl font-bold mb-10 text-white font-custom">
          {project.title}
        </h1>

        {/* Carousel Section */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <Carousel images={project.images} />
          </div>
        )}

        {/* Details Section - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Description */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 font-custom">About the Project</h2>
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>
          </div>

          {/* Right Column: Technologies & Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Links</h3>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-md bg-white px-4 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-200 transition-colors"
                >
                  Visit Website ↗
                </a>
              ) : (
                <p className="text-gray-400 text-sm">No live link available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
