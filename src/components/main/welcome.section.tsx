import styles from "./welcome.module.css";
import tv from "../../assets/tv.png";
import photo from "../../assets/tv_photo.jpg";
import noise from "../../assets/tv_noise.gif";
import nosie_gif from "../../assets/loading_anim.gif";
import dot from "../../assets/pattern.png";
import old_texture from "../../assets/old_texture.jpg";
import { useContext, useState } from "react";
import { DataContext } from "../services/data.provider";

const WelcomeSection = () => {
  const [tvOn, setTvOn] = useState(false);
  const dataContext = useContext(DataContext);

  return (
    <section id="home" className={styles.section}>
      <img src={old_texture} className="old-texture" alt="old texture" />

      <div className={styles.welcome_container}>
        <h1 className={styles.title}>WELCOME</h1>
        <h4>(website in progress)</h4>
        <p>
          Hey there! My name is Jia Hui (Lefan) Tan, and I like building
          websites/application that looks good, works well, and accessible for
          everyone!
        </p>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href="#about" className={styles.see_more} aria-label="see more" />
      </div>

      <div className={styles.tv_container}>
        <img src={dot} alt="dot background" className={styles.dot} />
        <button
          onClick={() => setTvOn(!tvOn)}
          aria-label="tv switch"
          aria-pressed={tvOn}
          className={tvOn ? styles.rotate : ""}
        />
        <img alt="tv" src={tv} className={styles.tv} />
        <img
          alt="face"
          src={dataContext.profile?.mainMediaUrl ?? photo}
          className={styles.photo}
        />
        <img
          alt="noise gif"
          src={noise}
          className={styles.photo}
          style={{ opacity: tvOn ? 0.45 : 1 }}
        />
        <img
          alt="noise gif"
          src={nosie_gif}
          className={styles.photo}
          style={{ opacity: tvOn ? 0 : 1 }}
        />
        <div className={styles.circle} />
      </div>
    </section>
  );
};

export default WelcomeSection;
