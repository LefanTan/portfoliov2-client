import { useEffect, useRef, useState } from "react";
import styles from "./about.module.css";
import dot from "../assets/pattern.png";
import noise from "../assets/noise.png";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [tooLong, setIsTooLong] = useState(false);
  const [expand, setExpand] = useState(true);
  const [extraContent, setExtraContent] = useState(
    "As each day goes by, my experience as a developer grow stronger and stronger as I try to improve myself by learning from peers, mentors and other online resources. I love coding, but I also like many other things too! You can catch me boxing, playing badminton, brewing coffee or playing music :)"
  );

  const resizeHandler = () => {
    if (!ref.current) return;

    const tooLong = ref.current?.clientWidth / ref.current?.clientHeight <= 1.5;
    setIsTooLong(tooLong);
    setExpand(!tooLong);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <section ref={ref} id="about" className={styles.section}>
      <img src={dot} alt="dot background" className={styles.dot_background} />
      <div className={styles.picture_container}>
        <div className={styles.photo}>
          <img src={photo1} alt="profile 1" />
          <img src={noise} alt="noise filter" />
        </div>
        <div className={styles.photo}>
          <img src={photo2} alt="profile 2" />
          <img src={noise} alt="noise filter" />
        </div>
      </div>
      <div className={styles.info_container}>
        <h1 className={styles.title}>About Me</h1>
        <p>
          Ladies and gentleman, let me introduce myself, *clear throat*. My name
          is Lefan and I’m currently in the last semester of my computer science
          degree at University of Alberta.
          <br />
          <br />I started my programming journey with Unity3D during highschool,
          wanting make the next big game that everyone will play. Even though I
          couldn’t make that happen, I’m still grateful for the experience and
          have since found a footing and passion for web development.
        </p>
        {expand && (
          <p>
            <br />
            {extraContent}
          </p>
        )}
        <br />
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
            href="https://www.linkedin.com/in/lefantan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            href="https://github.com/LefanTan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubAlt size={30} />
          </a>
          <a
            href="https://storage.googleapis.com/profile-bucket/1/resume_cv.pdf?GoogleAccessId=lefan-798%40portfoliov2-336008.iam.gserviceaccount.com&Expires=4814985600&Signature=ttrL7zJYnbNmRlkLJVdLIppfPaLhWayF4WW9bedb9fmboLIxkMHpUnnkMlFAYx0xDfCT%2Fj5fmNvDzWFq4QhTnvDQQNoRhhrf1UNvMxabPJKFFioIqNuq0RzN7iXdJZvZSmj6s0SzcPuVpI7a9uYJxWkW5FLLlA3K6YSyiO3hVS21%2FS1kuXkN3tLA8coWVDqYzAdvk2rb44nJs9Wcji154QJXhzF5GPRQFvFu0Tfgv1r5ixTgQZ2rCBYPcqjBDRii5vx6PfewYyaiUYU8cewYyGduJaYMrFV%2BvYKvjCu7rYD4xjJsAPO%2FH215aQdzynmpZ7mJWqUThW7pjLSsLv5Z5Q%3D%3D"
            target="_blank"
            rel="noreferrer"
            className={styles.id}
          >
            Resume
          </a>
        </div>
        <h2 className={styles.skills}>Skills</h2>
        <div className={styles.skills_container}>
          <h3>REACT</h3>
          <h3>REACT NATIVE</h3>
          <h3>TYPESCRIPT</h3>
          <h3>HTML/CSS</h3>
          <h3>EXPRESS.JS</h3>
          <h3>GIT</h3>
          <h3>DOCKER</h3>
          <h3>UNITY3D</h3>
          <h3>FIGMA</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
