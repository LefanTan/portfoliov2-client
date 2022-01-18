import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
import { FaLinkedinIn, FaGithubAlt, FaRegFilePdf } from "react-icons/fa";
import { DataContext } from "./services/data.provider";
import emailjs from "@emailjs/browser";
import useMediaChange from "./helpers/useMediaChange";

const ContactSection = () => {
  const dataContext = useContext(DataContext);
  const mobile = useMediaChange("(max-width: 800px)");
  const form = useRef<HTMLFormElement>(null);

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
          alert("Thanks for the email, I'll get back to you soon!");
          form.current?.reset();
        })
        .catch((err) => console.error("Send email failed...", err));
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.links_container}>
        <h1 className={styles.title}>Let's Talk</h1>
        <div>
          <a
            href={dataContext.profile?.github}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubAlt size={`3rem`} /> {mobile ? "" : "Github"}
          </a>
          <a
            href={dataContext.profile?.linkedin}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn style={{ marginBottom: "2px" }} size={`3rem`} />
            {mobile ? "" : "Linkedin"}
          </a>
          <a
            href={dataContext.profile?.resumeUrl}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FaRegFilePdf size={`3rem`} style={{ marginBottom: "5px" }} />
            {mobile ? "" : "Resume"}
          </a>
        </div>
      </div>
      <form ref={form} onSubmit={onSubmit} className={styles.forms}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="content">Content</label>
        <textarea name="message" id="content" required />

        <button type="submit">Send</button>
      </form>
    </section>
  );
};
export default ContactSection;
