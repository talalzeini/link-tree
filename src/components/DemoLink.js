import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function DemoLink({ project, website }) {
  return (
    <>
      {website === "hidden" ? (
        <span className="website-demo-link hidden">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
      ) : (
        <a
          href={
            project.demoLink
              ? project.demoLink
              : "https://talalzeini." +
                website +
                ".io/" +
                project.repositoryName
          }
          target="_blank"
          rel="noreferrer"
          className="website-demo-link"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      )}
    </>
  );
}
