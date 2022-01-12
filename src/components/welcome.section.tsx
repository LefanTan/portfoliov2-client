import styles from "./welcome.module.css";
import tv from "../assets/tv.png";
import photo from "../assets/tv_photo.jpg";
import noise from "../assets/tv_noise.gif";
import { useState } from "react";

const WelcomeSection = () => {
  const [tvOn, setTvOn] = useState(false);

  return (
    <section id="home" className={styles.section}>
      <div className={styles.welcome_container}>
        <h1 className={styles.title}>WELCOME</h1>
        <p>
          Hey there! My name is Jia Hui (Lefan) Tan, and I like building
          websites/application that looks good, works well, and accessible for
          everyone!
        </p>
        <button className={styles.see_more} />
      </div>

      <div className={styles.tv_container}>
        <button
          onClick={() => setTvOn(!tvOn)}
          aria-label="tv switch"
          aria-pressed={tvOn}
          className={tvOn ? styles.rotate : ""}
        />
        <img alt="tv" src={tv} className={styles.tv} />
        <img alt="face" src={photo} className={styles.photo} />
        <img
          alt="noise gif"
          src={noise}
          className={styles.photo}
          style={{ opacity: tvOn ? 0.55 : 1 }}
        />
        <div className={styles.circle} />
      </div>
    </section>
  );
};

export default WelcomeSection;
