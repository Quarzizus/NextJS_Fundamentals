import { Footer } from "../Footer";
import { NavBar } from "../Navbar";

interface props {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: props): JSX.Element => {
  return (
    <div className="Layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
