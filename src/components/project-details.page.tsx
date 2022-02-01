import {
  CSSProperties,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./project-details.module.css";
import { DataContext, ProjectData } from "./services/data.provider";
import old_texture from "../assets/old_texture.jpg";
import onToggleLoader from "./helpers/onToggleLoader";
import ReactMarkdown from "react-markdown";
import Header from "./header";
import Footer from "./footer";
import Modal from "./modal";
import InView from "react-intersection-observer";
import useMediaChange from "./helpers/useMediaChange";

const ProjectDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dataContext = useContext(DataContext);
  const [projectDetail, setDetail] = useState<ProjectData>();
  const matched = useMediaChange("(max-width: 700px)");
  const [modalImage, setImage] = useState<string>();
  const [openModal, setOpenModal] = useState(false);
  const [isInitLoad, setInitLoad] = useState(true);

  const firstMedia = projectDetail?.mediaUrls?.[0];
  const secondMedia = projectDetail?.mediaUrls?.[1];

  const onLoad = () => {
    onToggleLoader(false);
    if (isInitLoad) window.scroll(0, 0);

    // so window on scrolls to top on start
    // Modal trigger this when opened
    if (isInitLoad) setInitLoad(false);
  };

  useEffect(() => {
    if (!dataContext.projects) return;

    const project = dataContext.projects?.find(
      (proj) =>
        proj.title.match(/\w+/g)?.join("-").toLocaleLowerCase() === params.name
    );

    if (project) {
      setDetail(project);
    } else {
      navigate("/404", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, dataContext.projects]);

  const imageButtonClickHandler = useCallback((url: string) => {
    setOpenModal(true);
    setImage(url);
  }, []);

  const ImageButton = memo(
    (props: {
      url: string;
      alt: string;
      onClick: (url: string) => void;
      style?: CSSProperties;
    }) => {
      const [hover, setHover] = useState(false);

      return (
        <button
          className={styles.image_button}
          onClick={() => props.onClick(props.url)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={props.style}
        >
          {hover && <h2>EXPAND</h2>}
          <img src={props.url} alt={props.alt} />
        </button>
      );
    }
  );

  return (
    <div onLoad={onLoad} className="body">
      <Header />
      <Modal
        isOpen={openModal}
        ariaModalLabel="Gallery Image Modal"
        ariaModalDescription="Clear view of an Image"
        onCloseClick={() => setOpenModal(false)}
      >
        <div className={styles.modal_content}>
          <img src={modalImage} alt="selected media" />
        </div>
      </Modal>

      <main className={styles.main}>
        <img
          src={old_texture}
          className="old-texture"
          alt="old texture"
          style={{ opacity: 0.3 }}
        />

        <div className={styles.content}>
          <h1 className={styles.heading}>GOOD OL' PROJECT NEWS</h1>
          <div className={styles.line} aria-label="line" />
          <div className={styles.row_space_between + " " + styles.line_box}>
            <h3>{projectDetail?.inProgress ? "IN PROGRESS" : ""}</h3>
            <h3>PERSONAL</h3>
          </div>
          <div className={styles.line} aria-label="line" />

          <h2 className={styles.title}>
            {projectDetail?.title.toLocaleUpperCase()}
          </h2>

          <section className={styles.description_container}>
            <span className={styles.description}>
              {projectDetail?.mainMediaUrl && (
                <ImageButton
                  key={projectDetail?.mainMediaUrl}
                  onClick={imageButtonClickHandler}
                  url={projectDetail?.mainMediaUrl}
                  alt="main media"
                />
              )}
              <ReactMarkdown components={{ p: "h1" }}>
                {projectDetail?.description?.[0] || ""}
              </ReactMarkdown>
              <ReactMarkdown>
                {projectDetail?.description?.slice(1) || ""}
              </ReactMarkdown>
            </span>

            <div className={styles.stack_links_container}>
              <h2>TECH STACK</h2>
              <p>{projectDetail?.stack?.join(", ")}</p>

              <div>
                {projectDetail?.repo && (
                  <a href={projectDetail.repo} target="_blank" rel="noreferrer">
                    REPO
                  </a>
                )}
                {projectDetail?.link && (
                  <a href={projectDetail.link} target="_blank" rel="noreferrer">
                    WEBSITE
                  </a>
                )}
              </div>
            </div>
          </section>

          <section>
            {projectDetail?.purposeAndGoal && (
              <InView triggerOnce threshold={0.25}>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`${styles.container} ${
                      inView ? "visual-show" : "visual-hide"
                    }`}
                  >
                    <span>
                      <h2 className={styles.container_title}>
                        PURPOSE & GOALS
                      </h2>
                      {firstMedia && (
                        <ImageButton
                          key={firstMedia}
                          onClick={imageButtonClickHandler}
                          url={firstMedia}
                          alt="second media"
                          style={{ float: "right" }}
                        />
                      )}
                      <ReactMarkdown>
                        {projectDetail?.purposeAndGoal || ""}
                      </ReactMarkdown>
                    </span>
                  </div>
                )}
              </InView>
            )}
            {projectDetail?.problems && (
              <InView triggerOnce threshold={0.25}>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`${styles.container} ${
                      inView ? "visual-show" : "visual-hide"
                    }`}
                  >
                    <span>
                      <h2 className={styles.container_title}>PROBLEMS FACED</h2>
                      {!projectDetail.purposeAndGoal
                        ? firstMedia && (
                            <ImageButton
                              key={firstMedia}
                              onClick={imageButtonClickHandler}
                              url={firstMedia}
                              alt="second media"
                              style={{ marginRight: matched ? "0rem" : "2rem" }}
                            />
                          )
                        : secondMedia && (
                            <ImageButton
                              key={secondMedia}
                              onClick={imageButtonClickHandler}
                              url={secondMedia}
                              alt="third media"
                              style={{ marginRight: matched ? "0rem" : "2rem" }}
                            />
                          )}
                      <ReactMarkdown>
                        {projectDetail?.problems || ""}
                      </ReactMarkdown>
                    </span>
                  </div>
                )}
              </InView>
            )}
          </section>
          {projectDetail?.lessonsLearned && (
            <InView triggerOnce threshold={0.25}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`${styles.lessons_container} ${
                    inView ? "visual-show" : "visual-hide"
                  }`}
                >
                  <h2>LESSONS LEARNED</h2>
                  <ReactMarkdown>
                    {projectDetail?.lessonsLearned || ""}
                  </ReactMarkdown>
                </div>
              )}
            </InView>
          )}

          {projectDetail?.mediaUrls && projectDetail?.mediaUrls.length > 0 && (
            <section className={styles.gallery}>
              <div>
                <h3>GALLERY</h3>
              </div>
              <InView triggerOnce threshold={0.15}>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`${styles.gallery_images} ${
                      inView ? "visual-show" : "visual-hide"
                    }`}
                  >
                    {projectDetail.mainMediaUrl && (
                      <ImageButton
                        onClick={imageButtonClickHandler}
                        url={projectDetail.mainMediaUrl}
                        alt="main gallery media"
                      />
                    )}
                    {projectDetail?.mediaUrls?.map((url, i) => (
                      <ImageButton
                        key={url}
                        onClick={imageButtonClickHandler}
                        url={url}
                        alt={i + " gallery media"}
                      />
                    ))}
                  </div>
                )}
              </InView>
            </section>
          )}
        </div>
      </main>
      <Footer disableTexture />
    </div>
  );
};

export default ProjectDetailsPage;
