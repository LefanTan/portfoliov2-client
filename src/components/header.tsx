import styles from "./header.module.css";
import { CgMenuGridO, CgArrowRight } from "react-icons/cg";
import { CSSTransition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";
import { throttle } from "./helpers/lodash";
import { HashLink } from "react-router-hash-link";
import useMediaChange from "./helpers/useMediaChange";
import title from "../assets/title.png";
import old_texture from "../assets/old_texture.jpg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [blackAndWhite, setBW] = useState(false);
  const mobile = useMediaChange("(max-width: 700px)");
  const ref = useRef<HTMLElement>(null);
  const sideRef = useRef<HTMLElement>(null);

  let prevScrollY = 0;
  let totalScrolledUp = 0;

  /**
   * Check if scrolled down/up to hide headers
   */
  const onScroll = throttle((event: Event) => {
    let clientHeight = ref.current?.clientHeight;

    if (!clientHeight || !ref.current) return;

    const delta = prevScrollY - window.scrollY;

    // If delta is > 0, its scrolling up
    if (delta > 0) {
      totalScrolledUp += delta;
    } else {
      totalScrolledUp = 0;
    }

    if (
      totalScrolledUp >= clientHeight ||
      window.scrollY < clientHeight ||
      (delta >= clientHeight && !ref.current.classList.contains(styles.show))
    ) {
      ref.current.classList.remove(styles.hide);
    } else if (delta < 0) {
      ref.current.classList.add(styles.hide);
    }

    prevScrollY = window.scrollY;
  }, 50);

  useEffect(() => {
    if (!sideRef.current) return;

    // set focus on first tabbable item in the nav bar
    const elements = Array.from(
      sideRef.current?.querySelectorAll(
        "a[href]:not([disabled]), button:not([disabled])"
      )
    );
    (elements?.[0] as HTMLElement).focus();

    const handleFocus = (e: FocusEvent) => {
      e.preventDefault();
      if (!elements.includes(e.target as HTMLElement)) {
        setMenu(false);
      }
    };
    document.addEventListener("focus", handleFocus, true);

    return () => document.removeEventListener("focus", handleFocus, true);
  }, [menu]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (blackAndWhite && !html.classList.contains(".black-and-white")) {
        html.classList.add("black-and-white");
      } else {
        html.classList.remove("black-and-white");
      }
    }
  }, [blackAndWhite]);

  return (
    <>
      {mobile && (
        <CSSTransition
          unmountOnExit
          timeout={500}
          in={menu}
          classNames={{
            enter: styles.mobileNavEnter,
            enterActive: styles.mobileNavEnterActive,
            exit: styles.mobileNavExit,
            exitActive: styles.mobileNavExitActive,
          }}
        >
          <nav ref={sideRef} className={`${styles.side_nav}`}>
            <img src={old_texture} className="old-texture" alt="old texture" />
            <ul onClick={() => setMenu(false)}>
              <button className={styles.cancel_button} aria-label="hide menu">
                <CgArrowRight size={40} />
              </button>
              <li>
                <HashLink to="/#home" replace className={styles.header_anchor}>
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#projects"
                  replace
                  className={styles.header_anchor}
                >
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink to="/#home" replace className={styles.title}>
                  <img src={title} alt="title" />
                </HashLink>
              </li>
              <li>
                <HashLink to="/#about" replace className={styles.header_anchor}>
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#contact"
                  replace
                  className={styles.header_anchor}
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </nav>
        </CSSTransition>
      )}
      <header ref={ref} className={styles.header}>
        <img
          src={old_texture}
          className="old-texture"
          alt="old pattern"
          style={{ zIndex: 8, opacity: 0.2 }}
        />
        <button
          onClick={() => setBW(!blackAndWhite)}
          aria-label="switch"
          className={`${styles.light_switch} ${
            blackAndWhite ? styles.light_switch_active : ""
          }`}
        />

        {!mobile ? (
          <nav>
            <ul>
              <li>
                <HashLink to="/#home" replace className={styles.header_anchor}>
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#projects"
                  replace
                  className={styles.header_anchor}
                >
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink to="/#home" replace className={styles.title}>
                  <img src={title} alt="title" />
                </HashLink>
              </li>
              <li>
                <HashLink to="/#about" replace className={styles.header_anchor}>
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#contact"
                  replace
                  className={styles.header_anchor}
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <HashLink to="/#home" replace className={styles.title}>
              <img src={title} alt="title" />
            </HashLink>
            <button onClick={() => setMenu(!menu)} aria-label="side menu">
              <CgMenuGridO size={30} />
            </button>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
