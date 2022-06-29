import { Footer } from "../Footer";
import { NavBar } from "../NavBar";
import styles from "./styles.module.css";

interface props {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: props): JSX.Element => {
  return (
    <div className={styles.Layout}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
