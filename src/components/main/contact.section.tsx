import { FormEvent, useContext, useRef, useState } from "react";
import styles from "./contact.module.css";
import letter from "../../assets/letter.png";
import { FaLinkedinIn, FaGithubAlt, FaRegFilePdf } from "react-icons/fa";
import { DataContext } from "../services/data.provider";
import emailjs from "@emailjs/browser";
import { RiCloseFill } from "react-icons/ri";
import useMediaChange from "../helpers/useMediaChange";
import old_texture from "../../assets/old_texture.jpg";
import Modal from "../modal";
import InView from "react-intersection-observer";

const ContactSection = () => {
  const dataContext = useContext(DataContext);
  const mobile = useMediaChange("(max-width: 700px)");
  const form = useRef<HTMLFormElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID || "",
          process.env.REACT_APP_EMAIL_TEMPLATE_ID || "",
          form.current,
          process.env.REACT_APP_EMAIL_USER_ID || ""
        )
        .then(() => {
          setOpenModal(true);
          form.current?.reset();
        })
        .catch((err) => console.error("Send email failed...", err));
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <Modal
        isOpen={openModal}
        onCloseClick={() => setOpenModal(false)}
        ariaModalLabel="Email Confirmation Modal"
        ariaModalDescription="A modal to confirm your email being sent"
      >
        <div className={styles.modal_content}>
          <button onClick={() => setOpenModal(false)}>
            <RiCloseFill size={20} />
          </button>
          <h1>Thank you for the email!</h1>
          <p>I'll be sure to get back to you as soon as possible</p>
        </div>
      </Modal>
      <img src={old_texture} className="old-texture" alt="old texture" />
      <InView triggerOnce threshold={0.3}>
        {({ inView, ref }) => (
          <div
            className={`${styles.content} ${
              inView ? "visual-show" : "visual-hide"
            }`}
            ref={ref}
          >
            <div className={styles.links_container}>
              <h1 className={styles.title}>Let's Talk</h1>
              <address>
                <a
                  href={dataContext.profile?.linkedin}
                  className={styles.link}
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn
                    style={{ marginBottom: "2px" }}
                    size={`2.5rem`}
                  />
                  {mobile ? "" : "LinkedIn"}
                </a>
                <a
                  href={dataContext.profile?.github}
                  className={styles.link}
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubAlt size={`2.5rem`} /> {mobile ? "" : "Github"}
                </a>
                <a
                  href={dataContext.profile?.resumeUrl}
                  className={styles.link}
                  aria-label="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaRegFilePdf
                    size={`2.5rem`}
                    style={{ marginBottom: "5px" }}
                  />
                  {mobile ? "" : "Resume"}
                </a>
              </address>
            </div>
            <form ref={form} onSubmit={onSubmit} className={styles.forms}>
              <img src={letter} alt="letter" />
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />

              <label htmlFor="content">Content</label>
              <textarea name="message" id="content" required />

              <button type="submit" className={styles.submit}>
                SEND
              </button>
            </form>
          </div>
        )}
      </InView>
    </section>
  );
};
export default ContactSection;
