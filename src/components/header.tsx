import styles from "./header.module.css";
import { CgMenuGridO, CgArrowRight } from "react-icons/cg";
import { CSSTransition } from "react-transition-group";
import { useLayoutEffect, useRef, useState } from "react";
import { throttle } from "./helpers/lodash";
import title from "../assets/title.png";
import { HashLink } from "react-router-hash-link";
import useMediaChange from "./helpers/useMediaChange";
import old_texture from "../assets/old_texture.jpg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [blackAndWhite, setBW] = useState(false);
  const mobile = useMediaChange("(max-width: 700px)");
  const ref = useRef<HTMLElement>(null);

  let prevScrollY = 0;
  let totalScrolledUp = 0;

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

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useLayoutEffect(() => {
    // Apparently changing document.body.style messes all the css up

    const main = document.querySelector("main");
    const val = `grayscale(${blackAndWhite ? 2 : 0}) contrast(${
      blackAndWhite ? 1.1 : 1
    })`;
    if (main && ref.current) {
      main.style.filter = val;
      ref.current!.style.filter = val;
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
          <nav className={`${styles.side_nav}`}>
            <img src={old_texture} className="old-texture" alt="old texture" />
            <ul>
              <button
                className={styles.cancel_button}
                aria-label="hide menu"
                onClick={() => setMenu(false)}
              >
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
        <img src={old_texture} className="old-texture" alt="old pattern" />
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
            <button onClick={() => setMenu(true)} aria-label="side menu">
              <CgMenuGridO size={30} />
            </button>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
