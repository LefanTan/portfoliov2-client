import styles from "./projects.module.css";
import title from "../assets/projects_title.png";
import board from "../assets/board.png";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { DataContext, ProjectData } from "./services/data.provider";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import old_texture from "../assets/old_texture.jpg";

const ProjectsSection = () => {
  const dataContext = useContext(DataContext);
  const projectsGrid = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>();
  const [extraProjects, setExtraProjects] = useState<ProjectData[]>();

  const checkIfProjectsOverflow = useCallback(() => {
    setProjects(dataContext.projects);

    if (!projectsGrid.current) {
      return;
    }

    const itemHeight =
      document.querySelector(`.${styles.project_container}`)?.clientHeight || 0;
    const itemWidth =
      document.querySelector(`.${styles.project_container}`)?.clientWidth || 0;
    const gridHeight = projectsGrid.current.clientHeight;
    const gridWidth = projectsGrid.current.clientWidth;

    const col = Math.round(gridWidth / itemWidth);

    if (gridHeight > itemHeight * 2) {
      setProjects(dataContext.projects?.slice(0, 2 * col));
      setExtraProjects(dataContext.projects?.slice(2 * col));
      setShowMore(false);
    }
  }, [dataContext.projects]);

  useEffect(() => {
    window.addEventListener("resize", checkIfProjectsOverflow);

    return () => window.removeEventListener("resize", checkIfProjectsOverflow);
  }, [checkIfProjectsOverflow]);

  useLayoutEffect(() => {
    setTimeout(() => {
      checkIfProjectsOverflow();
    }, 200);
  }, [checkIfProjectsOverflow]);

  const Project = (project: ProjectData) => (
    <div className={styles.project_container}>
      <img src={project.mainMediaUrl} alt={`${project.title} demo`} />
      <div className={styles.spread_row}>
        <img src={board} alt="board background" />
        <h2>{project.title.toLocaleUpperCase()}</h2>
        <ReactMarkdown>{project.shortDescription}</ReactMarkdown>
      </div>
      <Link
        to={`/project/${project.title
          .match(/\w+/g)
          ?.join("-")
          .toLocaleLowerCase()}`}
      />
    </div>
  );

  return (
    <section id="projects" className={styles.section}>
      <img
        src={old_texture}
        className="old-texture"
        alt="old texture"
        style={{ opacity: 0.25 }}
      />
      <img src={title} alt="Project Title" className={styles.title} />
      <div ref={projectsGrid}>
        {projects?.map((project) => (
          <Project key={project.id} {...project} />
        ))}
        {showMore &&
          extraProjects?.map((project) => (
            <Project key={project.id} {...project} />
          ))}
      </div>
      {extraProjects && extraProjects?.length > 0 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className={styles.show_more_button}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
};

export default ProjectsSection;
