import React, { useCallback, useEffect, useRef } from "react";
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
 * @param onCloseClick
 * @param ariaModalLabel
 * @param ariaModalDescription
 * @param isOpen
 * @returns
 */
const Modal: React.FC<ModalProps> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleOutsideElementClick = useCallback(
    (ev: MouseEvent) => {
      if (
        contentRef.current &&
        props.onCloseClick &&
        !contentRef.current.contains(ev.target as Node)
      ) {
        props.onCloseClick();
      }
    },
    [props]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideElementClick);

    return () =>
      document.removeEventListener("mousedown", handleOutsideElementClick);
  }, [handleOutsideElementClick]);

  /**
   * Make sure focus is trapped in modal
   */
  type TrapFocusEvent = { onClose: () => void };
  const trapFocus = useCallback((el: HTMLElement): TrapFocusEvent => {
    const tabbableElements = Array.from(
      el.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      )
    );
    const firstEle = tabbableElements[0] as HTMLElement;
    firstEle.focus();

    const handleFocus = (e: FocusEvent) => {
      e.preventDefault();

      if (!tabbableElements.includes(e.target as Element)) {
        // tabbed out
        firstEle.focus();
      } else {
        (e.target as HTMLElement).focus();
      }
    };

    document.addEventListener("focus", handleFocus, true);
    return {
      onClose: () => {
        document.removeEventListener("focus", handleFocus, true);
      },
    };
  }, []);

  useEffect(() => {
    // Disable scrolling of background elements when modal is open
    document.body.style.overflow = props.isOpen ? "hidden" : "auto";

    if (dialogRef.current) {
      let trapped: TrapFocusEvent = { onClose: () => null };
      if (props.isOpen) trapped = trapFocus(dialogRef.current);
      else trapped?.onClose();
    }
  }, [props.isOpen, trapFocus]);

  return (
    <dialog
      ref={dialogRef}
      open={props.isOpen}
      aria-label={props.ariaModalLabel}
      aria-modal={props.isOpen}
      aria-describedby="modalDescription"
      className={`${styles.wrapper} ${props.isOpen ? "" : styles.hidden}`}
    >
      <button
        tabIndex={0}
        onClick={props.onCloseClick}
        className={styles.close_button}
      >
        <RiCloseFill aria-label="close modal button" size={30} />
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
