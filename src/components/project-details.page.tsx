import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import styles from "./project-details.module.css";
import { DataContext, ProjectData } from "./services/data.provider";

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
    <div className="body">
      <Header />
      <main>
        <h1 className={styles.title}>TEst</h1>
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
