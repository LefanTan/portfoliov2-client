import styles from "./footer.module.css";
import old_texture from "../assets/old_texture.jpg";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaRegFilePdf,
  FaEnvelope,
} from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "./services/data.provider";

const Footer = () => {
  const dataContext = useContext(DataContext);

  return (
    <footer className={styles.footer}>
      <img src={old_texture} className="old-texture" alt="old texture" />
      <div>
        <a
          href={dataContext.profile?.github}
          aria-label="github link"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt size={30} />
        </a>
        <a
          href={dataContext.profile?.linkedin}
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

      <p>MADE BY JIAHUI (LEFAN) TAN</p>
    </footer>
  );
};

export default Footer;
