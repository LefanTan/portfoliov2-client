import styles from "./header.module.css";
import { CgMenuGridO, CgArrowRight } from "react-icons/cg";
import { useLayoutEffect, useRef, useState } from "react";
import { throttle } from "./helpers/lodash";
import title from "../assets/title.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [blackAndWhite, setBW] = useState(false);
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
    <header ref={ref} className={styles.header}>
      <button
        onClick={() => setBW(!blackAndWhite)}
        aria-label="switch"
        className={`${styles.light_switch} ${
          blackAndWhite ? styles.light_switch_active : ""
        }`}
      ></button>
      <div className={styles.mobile_title}>
        <a href="#home" className={styles.title}>
          <img src={title} alt="title" />
        </a>

        <button onClick={() => setMenu(true)} aria-label="side menu">
          <CgMenuGridO size={30} />
        </button>
      </div>
      <nav className={`${menu ? styles.menu_active : ""}`}>
        <ul>
          <button
            className={styles.cancel_button}
            aria-label="hide menu"
            onClick={() => setMenu(false)}
          >
            <CgArrowRight size={40} />
          </button>
          <li>
            <a href="/#home" className={styles.header_anchor}>
              Home
            </a>
          </li>
          <li>
            <a href="/#projects" className={styles.header_anchor}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#home" className={styles.title}>
              <img src={title} alt="title" />
            </a>
          </li>
          <li>
            <a href="/#about" className={styles.header_anchor}>
              About
            </a>
          </li>
          <li>
            <a href="/#contact" className={styles.header_anchor}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
