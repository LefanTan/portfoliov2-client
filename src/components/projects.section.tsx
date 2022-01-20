import styles from "./projects.module.css";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
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
    setExtraProjects(undefined);

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
    checkIfProjectsOverflow();
    return () => window.removeEventListener("resize", checkIfProjectsOverflow);
  }, [checkIfProjectsOverflow]);

  const Project = (project: ProjectData) => {
    const [hover, setHover] = useState(false);

    return (
      <div className={styles.project_container}>
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
        </Link>
        <div className={styles.spread_row}>
          <h2>{project.title.toLocaleUpperCase()}</h2>
          <ReactMarkdown>{project.shortDescription}</ReactMarkdown>
        </div>
        <Link
          to={`/project/${project.title
            .match(/\w+/g)
            ?.join("-")
            .toLocaleLowerCase()}`}
          aria-label={project.title}
        />
      </div>
    );
  };

  return (
    <section id="projects" className={styles.section}>
      <img
        src={old_texture}
        className="old-texture"
        alt="old texture"
        style={{ opacity: 0.15 }}
      />
      <h1 className={styles.title}>PROJECTS</h1>
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
          {showMore ? "SHOW LESS" : "SHOW MORE"}
        </button>
      )}
    </section>
  );
};

export default ProjectsSection;
