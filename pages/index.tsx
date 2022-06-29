import { useEffect, useState } from "react";
import Image from "next/image";
import AvocadoIcon from "../public/icons/avocado.png";
import styles from "./styles.module.css";
import { TProduct } from "../database/types";
import { ListOfAvocados } from "../components/ListOfAvocados";

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    const response = await fetch("/api/avo");
    const { data } = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.Home}>
      <h2>
        Avo
        <Image
          src={AvocadoIcon}
          width="25px"
          height="25px"
          className={styles.img}
          placeholder="blur"
        />
        Store
      </h2>
      <ListOfAvocados products={products} />
    </div>
  );
};

export default Home;
