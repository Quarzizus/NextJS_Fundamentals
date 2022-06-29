import styles from "./styles.module.css";
import AvocadoIcon from "../../public/icons/avocado.png";
import CestaIcon from "../../public/icons/cesta.png";
import Image from "next/image";

const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.NavBar}>
      <menu className={styles.menu}>
        <a href="/">
          <Image src={AvocadoIcon} width="50px" height="50px" />
          Avo Store
        </a>
        <a href="/about">
          <Image src={CestaIcon} width="50px" height="50px" />
          Canasta
        </a>
      </menu>
    </nav>
  );
};

export { NavBar };
