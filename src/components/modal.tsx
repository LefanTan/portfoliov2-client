import React, { useEffect, useRef } from "react";
import styles from "./modal.module.css";
import { RiCloseFill } from "react-icons/ri";

interface ModalProps {
  onCloseClick?: () => void;
  ariaModalLabel: string;
  ariaModalDescription: string;
  isOpen: boolean;
}

/**
 * Simple Modal
 * @param props
 * @returns
 */
const Modal: React.FC<ModalProps> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable scrolling of background elements when modal is open
    document.body.style.overflow = props.isOpen ? "hidden" : "auto";
  }, [props.isOpen]);

  return (
    <dialog
      open={props.isOpen}
      aria-label={props.ariaModalLabel}
      aria-modal={props.isOpen}
      aria-describedby="modalDescription"
      className={`${styles.wrapper} ${props.isOpen ? "" : styles.hidden}`}
    >
      <button onClick={props.onCloseClick} className={styles.close_button}>
        <RiCloseFill size={30} />
      </button>
      <div ref={contentRef} className={styles.content}>
        <div id="modalDescription" className={styles.hidden}>
          {props.ariaModalDescription}
        </div>
        {props.children}
      </div>
    </dialog>
  );
};

export default Modal;
