import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styles from "./about.module.css";
import dot from "../assets/pattern.png";
import noise from "../assets/noise.png";
import photo1 from "../assets/backup_photo1.jpg";
import photo2 from "../assets/backup_photo2.jpg";
import { FaLinkedinIn, FaGithubAlt, FaRegFilePdf } from "react-icons/fa";
import { DataContext } from "./services/data.provider";
import ReactMarkdown from "react-markdown";
const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);

  const dataContext = useContext(DataContext);
  const [tooLong, setIsTooLong] = useState(false);
  const [expand, setExpand] = useState(true);
  const [mainContent, setMainContent] = useState("");
  const [extraContent, setExtraContent] = useState("");

  const resizeHandler = useCallback(() => {
    if (!ref.current) return;

    const tooLong = ref.current?.clientWidth / ref.current?.clientHeight <= 1.5;
    setIsTooLong(tooLong && extraContent !== "");
    setExpand(!tooLong);
  }, [extraContent]);

  useEffect(() => {
    if (!dataContext.profile?.aboutMe) return;

    const maxChar =
      dataContext.profile?.aboutMe.length < 500
        ? dataContext.profile?.aboutMe.length
        : 500;

    setMainContent(dataContext.profile?.aboutMe.slice(0, maxChar));
    setExtraContent(
      dataContext.profile?.aboutMe.slice(
        maxChar,
        dataContext.profile?.aboutMe.length
      )
    );
  }, [dataContext.profile]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  }, [resizeHandler]);

  return (
    <section ref={ref} id="about" className={styles.section}>
      <img src={dot} alt="dot background" className={styles.dot_background} />
      <div className={styles.picture_container}>
        <div className={styles.photo}>
          <img
            src={dataContext.profile?.mediaUrls?.at(0) ?? photo1}
            alt="profile 1"
          />
          <img src={noise} alt="noise filter" />
        </div>
        <div className={styles.photo}>
          <img
            src={dataContext.profile?.mediaUrls?.at(1) ?? photo2}
            alt="profile 2"
          />
          <img src={noise} alt="noise filter" />
        </div>
      </div>
      <div className={styles.info_container}>
        <h1 className={styles.title}>About Me</h1>
        <ReactMarkdown>
          {mainContent +
            (tooLong && !expand ? "..." : "") +
            (expand ? extraContent : "")}
        </ReactMarkdown>
        {tooLong && (
          <button
            onClick={() => setExpand(!expand)}
            className={styles.read_more}
          >
            {expand ? "Read less >" : "Read more >"}
          </button>
        )}
        <div className={styles.links_container}>
          <a
            href={dataContext.profile?.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            href={dataContext.profile?.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubAlt size={30} />
          </a>
          <a
            href={dataContext.profile?.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <FaRegFilePdf size={30} />
          </a>
        </div>
        <h2 className={styles.skills}>Skills</h2>
        <div className={styles.skills_container}>
          {dataContext.profile?.skills?.map((skill) => (
            <h3 key={skill}>{skill}</h3>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
