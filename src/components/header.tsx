import styles from "./header.module.css";
import { CgMenuGridO, CgArrowRight } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { throttle } from "./helpers/lodash";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const ref = useRef<HTMLElement>(null);
  let prevScrollY = 0;

  const onScroll = throttle((event: Event) => {
    let clientHeight = ref.current?.clientHeight;
    if (!clientHeight || !ref.current) return;

    if (prevScrollY === 0) {
      prevScrollY = window.scrollY;
      return;
    }
    const delta = prevScrollY - window.scrollY;

    if (
      window.scrollY < clientHeight ||
      (delta > clientHeight && !ref.current.classList.contains(styles.show))
    ) {
      console.log("adding");
      ref.current.classList.add(styles.show);
    } else if (delta < 0) {
      ref.current.classList.remove(styles.show);
    }

    prevScrollY = window.scrollY;
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.mobile_title}>
        <a href="#home" className={`${styles.title}`}>
          Lefan
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
            <a href="#home" className={styles.header_anchor}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.header_anchor}>
              Projects
            </a>
          </li>
          <li>
            <a href="#home" className={styles.title}>
              Lefan
            </a>
          </li>
          <li>
            <a href="#about" className={styles.header_anchor}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={styles.header_anchor}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
