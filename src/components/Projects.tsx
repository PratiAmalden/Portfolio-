import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const project = projects[activeProjectIndex];

  function showPreviousProject() {
    setActiveProjectIndex(
      (index) => (index - 1 + projects.length) % projects.length,
    );
  }

  function showNextProject() {
    setActiveProjectIndex((index) => (index + 1) % projects.length);
  }

  return (
    <section className="projects section-shell" id="projects">
      <SectionHeading eyebrow="03 /">Projects</SectionHeading>
      <p className="projects-intro">
        Explore a few useful little tools, made with care.
      </p>
      <article className="project-showcase" aria-live="polite">
        <div className="project-preview">
          {project.embeddable ? (
            <iframe
              key={project.url}
              className="project-demo"
              src={project.url}
              title={`${project.name} live demo`}
              loading="lazy"
              allow="fullscreen"
            />
          ) : (
            <div className="project-embed-fallback">
              <img
                className="project-screenshot"
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                loading="lazy"
              />
            </div>
          )}
          
          <div className="project-open-links">
            {project.url && (
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} live demo in a new tab`}
              >
                Live demo <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            )}
            {project.github && (
              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub in a new tab`}
              >
                GitHub <Github aria-hidden="true" size={16} />
              </a>
            )}
          </div>
        </div>
        <div className="project-showcase-info">
          <div className="project-details">
            <span className="project-number">
              {project.number} / {String(projects.length).padStart(2, "0")}
            </span>
            <h3>{project.name}</h3>
            <p className="project-type">{project.type}</p>
            <p className="project-description">{project.description}</p>
            <ul aria-label={`${project.name} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="project-controls" aria-label="Project navigation">
            <button
              className="project-arrow project-arrow-previous"
              type="button"
              onClick={showPreviousProject}
              aria-label="Show previous project"
            >
              <ArrowLeft aria-hidden="true" size={20} />
            </button>
            <span className="project-count">
              {String(activeProjectIndex + 1).padStart(2, "0")}{" "}
              <span aria-hidden="true">/</span>{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <button
              className="project-arrow project-arrow-next"
              type="button"
              onClick={showNextProject}
              aria-label="Show next project"
            >
              <span aria-hidden="true">➤</span>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;
