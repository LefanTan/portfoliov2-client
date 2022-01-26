import styles from "./projects.module.css";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { DataContext, ProjectData } from "../services/data.provider";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import old_texture from "../../assets/old_texture.jpg";

const ProjectsSection = () => {
  const dataContext = useContext(DataContext);
  const projectsGrid = useRef<HTMLDivElement>(null);
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
