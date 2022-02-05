import styles from "./welcome.module.css";
import tv from "../../assets/tv.png";
import photo from "../../assets/tv_photo.jpg";
import noise from "../../assets/tv_noise.gif";
import nosie_gif from "../../assets/loading_anim.gif";
import dot from "../../assets/pattern.png";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../services/data.provider";
import random_video from "../services/random-video";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaRegFilePdf,
  FaEnvelope,
} from "react-icons/fa";

const WelcomeSection = () => {
  const [showProfilePic, setShowProfilePic] = useState(false);
  const [playRandomVideo, setPlayRandomVideo] = useState(false);
  const [randomVideoIndex, setRandVidIndex] = useState(0);
  const dataContext = useContext(DataContext);

  useEffect(() => {
    alert(
      "This website uses an API that needs access to IPV6, if projects doesn't display normally, it might be that your router doesn't allow IPv6"
    );
  }, []);

  useEffect(() => {
    let newIndex = Math.floor(Math.random() * random_video.length);
    // Try again if same video is loaded
    if (newIndex === randomVideoIndex)
      newIndex = Math.floor(Math.random() * random_video.length);
    setRandVidIndex(Math.floor(Math.random() * random_video.length));
  }, [playRandomVideo, randomVideoIndex]);

  return (
    <section id="home" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.welcome_container}>
          <h1 className={styles.title}>WELCOME</h1>
          <address className={styles.address}>
            <a
              href={dataContext.profile?.github}
              aria-label="github link"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubAlt size={25} />
            </a>
            <a
              href={dataContext.profile?.linkedin}
              aria-label="linkedin link"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href={dataContext.profile?.resumeUrl}
              aria-label="linkedin link"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegFilePdf size={25} />
            </a>
            <a
              href={`mailto:${dataContext.user?.email}`}
              aria-label="linkedin link"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope size={25} />
            </a>
          </address>
          <p>
            Hey there! My name is Jia Hui (Lefan) Tan, and I like building
            websites/application that looks good, works well, and accessible for
            everyone!
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.body
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={styles.see_more}
            aria-label="see more"
          />
        </div>

        <div className={styles.tv_container}>
          <img src={dot} alt="dot background" className={styles.dot} />
          <button
            onClick={() => {
              setShowProfilePic(!showProfilePic);
              setPlayRandomVideo(false);
            }}
            aria-label="first tv switch"
            aria-pressed={showProfilePic}
            className={`${styles.switch} ${
              showProfilePic ? styles.rotate : ""
            }`}
          />
          <button
            onClick={() => {
              setPlayRandomVideo(!playRandomVideo);
              setShowProfilePic(false);
            }}
            aria-label="second tv switch"
            aria-pressed={playRandomVideo}
            className={`${styles.switch_2} ${
              playRandomVideo ? styles.rotate : ""
            }`}
          />
          <img alt="tv" src={tv} className={styles.tv} />
          <img
            alt="face"
            src={dataContext.profile?.mainMediaUrl ?? photo}
            className={styles.photo}
            style={{ visibility: showProfilePic ? "visible" : "hidden" }}
          />
          <div>
            <iframe
              src={random_video[randomVideoIndex].link}
              className={styles.photo}
              title="YouTube video player"
              allow="accelerometer; autoplay; picture-in-picture"
              allowFullScreen
              style={{
                visibility: playRandomVideo ? "visible" : "hidden",
                pointerEvents: "auto",
              }}
            ></iframe>
          </div>
          {dataContext.error && (
            <div className={styles.error_container}>
              <h2>408 ERROR</h2>
              <p>Error connecting to portfolio API</p>
              <p>(perhaps your device doesn't support IPV6)</p>
            </div>
          )}

          <img
            alt="noise gif"
            src={noise}
            className={styles.photo}
            style={{
              opacity:
                showProfilePic || playRandomVideo || dataContext.error
                  ? 0.45
                  : 1,
            }}
          />
          <img
            alt="noise gif"
            src={nosie_gif}
            className={styles.photo}
            style={{
              opacity:
                showProfilePic || playRandomVideo || dataContext.error
                  ? 0.1
                  : 1,
            }}
          />
          <div className={styles.tv_floor} />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
