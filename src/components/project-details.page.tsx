import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./project-details.module.css";
import { DataContext, ProjectData } from "./services/data.provider";
import old_texture from "../assets/old_texture.jpg";
import onToggleLoader from "./helpers/onToggleLoader";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import { CgArrowLeft } from "react-icons/cg";

const ProjectDetailsPage = () => {
  const params = useParams();
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
    window.scroll(300, 0);
  };

  useEffect(() => {
    setDetail(
      dataContext.projects?.find(
        (proj) =>
          proj.title.match(/\w+/g)?.join("-").toLocaleLowerCase() ===
          params.name
      )
    );
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
    <main onLoad={onLoad} className={styles.main}>
      <Modal
        isOpen={openModal}
        contentLabel="Gallery Image Modal"
        className={styles.modal}
        style={modalStyle}
      >
        <div className={styles.modal_content}>
          <button onClick={() => setOpenModal(false)}>
            <CgArrowLeft size={50} />
          </button>
          <img src={modalImage} alt="selected media" />
        </div>
      </Modal>
      <img src={old_texture} className={styles.old_texture} alt="old texture" />

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
      <br />
      <br />
      <section
        className={
          styles.row_space_between + " " + styles.stack_goals_container
        }
      >
        <div className={styles.stack_links_container}>
          <h2>TECH STACK</h2>
          <p>{projectDetail?.stack?.join(", ")}</p>

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

          {projectDetail?.mediaUrls?.at(0) && (
            <img src={projectDetail?.mediaUrls?.at(0)} alt="second media" />
          )}
        </div>
        <div className={styles.right_side}>
          {projectDetail?.purposeAndGoal && (
            <div className={styles.container}>
              <h2>PURPOSE & GOALS</h2>
              <span>
                {projectDetail?.mediaUrls?.at(1) && (
                  <img
                    src={projectDetail?.mediaUrls?.at(1)}
                    alt="first media"
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
                    style={{ float: "right" }}
                  />
                )}
                <ReactMarkdown>{projectDetail?.problems || ""}</ReactMarkdown>
              </span>
            </div>
          )}
        </div>
      </section>

      {projectDetail?.lessonsLearned && (
        <div className={styles.lessons_container}>
          <h2>LESSONS LEARNED</h2>
          <ReactMarkdown>{projectDetail?.lessonsLearned || ""}</ReactMarkdown>
        </div>
      )}

      {projectDetail?.mediaUrls && projectDetail?.mediaUrls.length > 0 && (
        <section className={styles.gallery}>
          <h3>GALLERY</h3>
          <div className={styles.gallery_images}>
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
  );
};

export default ProjectDetailsPage;
