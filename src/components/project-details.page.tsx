import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./project-details.module.css";
import { DataContext, ProjectData } from "./services/data.provider";
import old_texture from "../assets/old_texture_vert.jpg";
import onToggleLoader from "./helpers/onToggleLoader";

const ProjectDetailsPage = () => {
  const params = useParams();
  const dataContext = useContext(DataContext);
  const [projectDetail, setDetail] = useState<ProjectData>();

  useEffect(() => {
    setDetail(
      dataContext.projects?.find(
        (proj) =>
          proj.title.match(/\w+/g)?.join("-").toLocaleLowerCase() ===
          params.name
      )
    );
  }, [params, dataContext.projects]);

  return (
    <main onLoad={() => onToggleLoader(false)} className={styles.main}>
      <img src={old_texture} className={styles.old_texture} alt="old texture" />
      <img
        src={old_texture}
        className={styles.old_texture_2}
        alt="old texture"
      />
      <h1 className={styles.heading}>GOOD OL' PROJECT NEWS</h1>
    </main>
  );
};

export default ProjectDetailsPage;
