import styles from "./welcome.module.css";
import tv from "../../assets/tv.png";
import photo from "../../assets/tv_photo.jpg";
import noise from "../../assets/tv_noise.gif";
import nosie_gif from "../../assets/loading_anim.gif";
import dot from "../../assets/pattern.png";
import old_texture from "../../assets/old_texture.jpg";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../services/data.provider";
import random_video from "../services/random-video";

const WelcomeSection = () => {
  const [showProfilePic, setShowProfilePic] = useState(false);
  const [playRandomVideo, setPlayRandomVideo] = useState(false);
  const [randomVideoIndex, setRandVidIndex] = useState(0);
  const dataContext = useContext(DataContext);

  useEffect(() => {
    let newIndex = Math.floor(Math.random() * random_video.length);
    // Try again if same video is loaded
    if (newIndex === randomVideoIndex)
      newIndex = Math.floor(Math.random() * random_video.length);
    setRandVidIndex(Math.floor(Math.random() * random_video.length));
  }, [playRandomVideo, randomVideoIndex]);

  return (
    <section id="home" className={styles.section}>
      <img src={old_texture} className="old-texture" alt="old texture" />

      <div className={styles.content}>
        <div className={styles.welcome_container}>
          <h1 className={styles.title}>WELCOME</h1>
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

          <img
            alt="noise gif"
            src={noise}
            className={styles.photo}
            style={{ opacity: showProfilePic || playRandomVideo ? 0.45 : 1 }}
          />
          <img
            alt="noise gif"
            src={nosie_gif}
            className={styles.photo}
            style={{ opacity: showProfilePic || playRandomVideo ? 0 : 1 }}
          />
          <div className={styles.tv_floor} />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
