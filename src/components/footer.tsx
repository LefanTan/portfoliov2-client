import styles from "./footer.module.css";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaRegFilePdf,
  FaEnvelope,
} from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "./services/data.provider";

/**
 * Old texture will be disabled in Projects Detail
 * Having a prop will be the most ideal but react router v6 doesn't have
 * support for history pathname change events
 */
const Footer = () => {
  const dataContext = useContext(DataContext);

  return (
    <footer className={styles.footer}>
      <div>
        <a
          href="https://github.com/LefanTan"
          aria-label="github link"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/lefantan/"
          aria-label="linkedin link"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={30} />
        </a>
        <a
          href={dataContext.profile?.resumeUrl}
          aria-label="linkedin link"
          target="_blank"
          rel="noreferrer"
        >
          <FaRegFilePdf size={30} />
        </a>
        <a
          href={`mailto:${dataContext.user?.email}`}
          aria-label="linkedin link"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope size={30} />
        </a>
      </div>

      <p>JIAHUI (LEFAN) TAN © 2021</p>
    </footer>
  );
};

export default Footer;
