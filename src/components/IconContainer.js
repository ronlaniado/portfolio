import React from "react";
import styles from "./IconContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const IconContainer = () => {
  return (
    <div class={styles.container}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faGithubAlt}
        onClick={() => window.open("https://github.com/ronlaniado/", "_blank")}
      />
      <FontAwesomeIcon
        className={styles.icon}
        icon={faLinkedin}
        onClick={() =>
          window.open("https://www.linkedin.com/in/ronlaniado/", "_blank")
        }
      />
      <FontAwesomeIcon
        className={styles.icon}
        icon={faEnvelopeSquare}
        onClick={() => window.open("mailto:laniado.ron@gmail.com", "_blank")}
      />
    </div>
  );
};

export default IconContainer;
