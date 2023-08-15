import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://instagram.com/talalzeini">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
      <a href="https://github.com/talalzeini">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a href="https://linkedin.com.com/in/talalzeini">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}