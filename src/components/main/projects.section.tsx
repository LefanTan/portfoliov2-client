import styles from "./projects.module.css";
import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DataContext, ProjectData } from "../services/data.provider";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import old_texture from "../../assets/old_texture.jpg";
import InView from "react-intersection-observer";

const ProjectsSection = () => {
  const dataContext = useContext(DataContext);
  const [showMore, setShowMore] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>();
  const [extraProjects, setExtraProjects] = useState<ProjectData[]>();

  const mobileMediaHandler = useCallback(() => {
    if (window.matchMedia("(max-width: 835px)").matches) {
      setProjects(dataContext.projects?.slice(0, 2));
      setExtraProjects(dataContext.projects?.slice(2));
    } else {
      setProjects(dataContext.projects);
      setExtraProjects(undefined);
    }
  }, [dataContext.projects]);

  useEffect(() => {
    window
      .matchMedia("(max-width: 835px)")
      .addEventListener("change", mobileMediaHandler);

    return () =>
      window
        .matchMedia("(max-width: 835px)")
        .removeEventListener("change", mobileMediaHandler);
  }, [mobileMediaHandler]);

  useEffect(() => {
    setProjects(dataContext.projects);

    mobileMediaHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileMediaHandler]);

  return (
    <section id="projects" className={styles.section}>
      <img
        src={old_texture}
        className="old-texture"
        alt="old texture"
        style={{ opacity: 0.15 }}
      />
      <h1 className={styles.title}>PROJECTS</h1>
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => {
          return (
            <div ref={ref}>
              {projects?.map((project, i) => (
                <ProjectLink
                  key={project.id}
                  project={project}
                  className={inView ? styles.stagger_animation : ""}
                  style={{ "--animation-order": i } as CSSProperties}
                />
              ))}
              {showMore &&
                extraProjects?.map((project, i) => (
                  <ProjectLink
                    key={project.id}
                    project={project}
                    className={inView ? styles.stagger_animation : ""}
                    style={
                      {
                        "--animation-order": i,
                      } as CSSProperties
                    }
                  />
                ))}
            </div>
          );
        }}
      </InView>

      {extraProjects && extraProjects?.length > 0 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className={styles.show_more_button}
        >
          {showMore ? "SHOW LESS" : "SHOW MORE"}
        </button>
      )}
    </section>
  );
};

export default ProjectsSection;

interface ProjectLinkProps {
  project: ProjectData;
  style?: CSSProperties;
  className?: string;
}

const ProjectLink = (props: ProjectLinkProps) => {
  const [hover, setHover] = useState(false);
  const project = props.project;

  return (
    <div
      className={`${styles.project_container} ${props.className}`}
      style={props.style}
    >
      <Link
        to={`/project/${project.title
          .match(/\w+/g)
          ?.join("-")
          .toLocaleLowerCase()}`}
        aria-label={project.title}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={styles.image_button}
      >
        {hover && <h2>SEE MORE</h2>}
        <img src={project.mainMediaUrl} alt={`${project.title} demo`} />
        {/* <div>
        </div> */}
      </Link>
      <div className={styles.spread_row}>
        <h2>{project.title.toLocaleUpperCase()}</h2>
        <ReactMarkdown>{project.shortDescription}</ReactMarkdown>
      </div>
    </div>
  );
};
