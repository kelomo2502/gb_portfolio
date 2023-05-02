import React from "react";
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from "react-icons/fi";

export default function SocialIcons() {
  return (
    <>
      <a
        href="mailto:kelvinoye@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send me an email"
      >
        <FiMail className="text-teal-300 text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://github.com/kelomo2502"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Github profile"
      >
        <FiGithub className="text-teal-300 text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://www.linkedin.com/in/oyewunmi-gbenga/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Linkedin profile"
      >
        <FiLinkedin className="text-teal-300 text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
      <a
        href="https://twitter.com/kelomoJs"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Twitter profile"
      >
        <FiTwitter className="text-teal-300 text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
      </a>
    </>
  );
}
