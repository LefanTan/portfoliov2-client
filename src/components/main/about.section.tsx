import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styles from "./about.module.css";
import { DataContext } from "../services/data.provider";
import rotate_bg from "../../assets/rotating.jpg";
import ReactMarkdown from "react-markdown";
import cutout from "../../assets/cutout.png";
import old_texture from "../../assets/old_texture.jpg";
import { CSSTransition } from "react-transition-group";
import { CgArrowRight } from "react-icons/cg";

const AboutSection = () => {
  const dataContext = useContext(DataContext);
  const ref = useRef<HTMLElement>(null);

  const [openMore, setOpen] = useState(false);
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
      <img src={old_texture} className="old-texture flipX" alt="old texture" />
      <CSSTransition
        appear
        in={!openMore}
        unmountOnExit
        timeout={200}
        classNames={{
          enter: styles.opacity_enter,
          enterDone: styles.opacity_enter_active,
          exit: styles.opacity_exit,
          exitActive: styles.opacity_exit_active,
        }}
      >
        <div className={styles.main_container}>
          <img
            src={rotate_bg}
            alt="rotating background"
            className={styles.rotate_background}
          />
          <button
            className={styles.cutout_button}
            onClick={() => setOpen(true)}
          >
            <img
              src={dataContext.profile?.mediaUrls?.at(0) || cutout}
              alt="lefan's cool cutout"
            />
          </button>
        </div>
      </CSSTransition>
      <CSSTransition
        appear
        in={openMore}
        unmountOnExit
        timeout={400}
        classNames={{
          enter: styles.opacity_enter,
          enterDone: styles.opacity_enter_active,
          exit: styles.opacity_exit,
          exitActive: styles.opacity_exit_active,
        }}
      >
        <div className={styles.news_container}>
          <div className={styles.line_top} />
          <div className={styles.line_right} />
          <div className={styles.line_bottom} />
          <div className={styles.line_left} />

          <div className={styles.left_article}>
            <h1>ABOUT ME</h1>
            <span className={styles.paragraph}>
              <img src={dataContext.profile?.mediaUrls?.at(1)} alt="profile" />
              <ReactMarkdown components={{ p: "h1" }}>
                {mainContent[0]}
              </ReactMarkdown>
              <ReactMarkdown>
                {mainContent.slice(1) +
                  (tooLong && !expand ? "..." : "") +
                  (expand ? extraContent : "")}
              </ReactMarkdown>
              {tooLong && (
                <button
                  onClick={() => setExpand(!expand)}
                  className={styles.read_more}
                >
                  {expand ? "< Read less" : "Read more >"}
                </button>
              )}
            </span>
          </div>
          <div className={styles.right_article}>
            <h2>SKILLS</h2>
            <p>{dataContext.profile?.skills?.join(", ")}</p>
            <img src={dataContext.profile?.mediaUrls?.at(2)} alt="profile 2" />
            <button onClick={() => setOpen(false)}>
              EXIT <CgArrowRight size={35} />
            </button>
          </div>
        </div>
      </CSSTransition>
    </section>
  );
};

export default AboutSection;
