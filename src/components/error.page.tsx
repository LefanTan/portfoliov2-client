import onToggleLoader from "./helpers/onToggleLoader";
import styles from "./errorpage.module.css";
import old_texture from "../assets/old_texture.jpg";

interface ErrorPageProps {
  errorCode: string;
  header: string;
  description: string;
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const onLoad = () => onToggleLoader(false);

  return (
    <main className={styles.main} onLoad={onLoad}>
      <img src={old_texture} className="old-texture" alt="old texture" />
      <h1>
        <strong>{props.errorCode + " "}</strong>
        {props.header}
      </h1>
      <p>{props.description}</p>
    </main>
  );
};

export default ErrorPage;
