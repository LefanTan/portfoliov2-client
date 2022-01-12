import styles from "./about.module.css";

const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <div>pictures</div>
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
          <br />
          <br />
          As each day goes by, my experience as a developer grow stronger and
          stronger as I try to improve myself by learning from peers, mentors
          and other online resources. I love coding, but I also like many other
          things too! You can catch me boxing, playing badminton, brewing coffee
          or playing music :)
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
