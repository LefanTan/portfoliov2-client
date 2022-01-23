import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./project-details.module.css";
import { DataContext, ProjectData } from "./services/data.provider";
import old_texture from "../assets/old_texture.jpg";
import onToggleLoader from "./helpers/onToggleLoader";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import { CgArrowLeft } from "react-icons/cg";
import Header from "./header";
import Footer from "./footer";

const ProjectDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dataContext = useContext(DataContext);
  const [projectDetail, setDetail] = useState<ProjectData>();
  const [modalImage, setImage] = useState<string>();
  const [openModal, setOpenModal] = useState(false);

  const modalStyle = {
    overlay: {
      zIndex: 7,
      backgroundColor: "#363636d5",
    },
    content: {
      backgroundColor: "transparent",
      border: "none",
    },
  };

  const onLoad = () => {
    onToggleLoader(false);
    window.scroll(0, 0);
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

  const ImageButton = (props: {
    url: string;
    alt: string;
    onClick: () => void;
  }) => {
    const [hover, setHover] = useState(false);

    return (
      <button
        className={styles.image_button}
        onClick={props.onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && <h2>EXPAND</h2>}
        <img src={props.url} alt={props.alt} />
      </button>
    );
  };

  return (
    <div className="body">
      <Header />
      <main onLoad={onLoad} className={styles.main}>
        <Modal
          preventScroll={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          isOpen={openModal}
          contentLabel="Gallery Image Modal"
          className={styles.modal}
          style={modalStyle}
        >
          <div className={styles.modal_content}>
            <button onClick={() => setOpenModal(false)}>
              <CgArrowLeft size={30} />
            </button>
            <img src={modalImage} alt="selected media" />
          </div>
        </Modal>
        <img
          src={old_texture}
          className={styles.old_texture}
          alt="old texture"
        />

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
        <span className={styles.description}>
          {projectDetail?.mainMediaUrl && (
            <img src={projectDetail?.mainMediaUrl} alt="main media" />
          )}
          <ReactMarkdown components={{ p: "h1" }}>
            {projectDetail?.description?.at(0) || ""}
          </ReactMarkdown>
          <ReactMarkdown>
            {projectDetail?.description?.slice(1) || ""}
          </ReactMarkdown>
        </span>
        <section className={styles.stack_links_container}>
          <div>
            <h2>TECH STACK</h2>
            <p>{projectDetail?.stack?.join(", ")}</p>
          </div>

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
        </section>
        <section>
          {projectDetail?.purposeAndGoal && (
            <div className={styles.container}>
              <h2>PURPOSE & GOALS</h2>
              <span>
                {projectDetail?.mediaUrls?.at(1) && (
                  <img
                    src={projectDetail?.mediaUrls?.at(1)}
                    alt="first media"
                    style={{ float: "right" }}
                  />
                )}
                <ReactMarkdown>
                  {projectDetail?.purposeAndGoal || ""}
                </ReactMarkdown>
              </span>
            </div>
          )}
          {projectDetail?.problems && (
            <div className={styles.container}>
              <h2>PROBLEMS FACED</h2>
              <span>
                {projectDetail?.mediaUrls?.at(2) && (
                  <img
                    src={projectDetail?.mediaUrls?.at(2)}
                    alt="first media"
                  />
                )}
                <ReactMarkdown>{projectDetail?.problems || ""}</ReactMarkdown>
              </span>
            </div>
          )}
        </section>

        {projectDetail?.lessonsLearned && (
          <div className={styles.lessons_container}>
            <h2>LESSONS LEARNED</h2>
            <ReactMarkdown>{projectDetail?.lessonsLearned || ""}</ReactMarkdown>
          </div>
        )}

        {projectDetail?.mediaUrls && projectDetail?.mediaUrls.length > 0 && (
          <section className={styles.gallery}>
            <div className={styles.gallery_images}>
              <div>
                <h3>GALLERY</h3>
              </div>
              {projectDetail.mainMediaUrl && (
                <ImageButton
                  onClick={() => {
                    setOpenModal(true);
                    setImage(projectDetail.mainMediaUrl);
                  }}
                  url={projectDetail.mainMediaUrl}
                  alt="main media"
                />
              )}
              {projectDetail?.mediaUrls.map((url, i) => (
                <ImageButton
                  key={url}
                  onClick={() => {
                    setOpenModal(true);
                    setImage(url);
                  }}
                  url={url}
                  alt={i + " media"}
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer disableTexture />
    </div>
  );
};

export default ProjectDetailsPage;
