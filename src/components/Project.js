import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DemoLink from "./DemoLink";

const Project = ({ project, number }) => {
  return (
    <div className="website">
      <div className="website-info">
        <h4 className="website-title">
          {number}
          {project.title}
        </h4>
        <div className="website-links">
          {project.isCurrent ? (
            <DemoLink project={project} website="hidden" />
          ) : project.repositoryName.includes("game") ? (
            <DemoLink website="itch" project={project} />
          ) : (
            <DemoLink website="github" project={project} />
          )}

          <a
            href={"https://github.com/talalzeini/" + project.repositoryName}
            target="_blank"
            rel="noreferrer"
            className="website-code-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
