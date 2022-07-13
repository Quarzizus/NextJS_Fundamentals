import React from "react";
import Image from "next/image";
import AvocadoIcon from "../public/icons/avocado.png";
import styles from "./styles.module.css";
import { TAPIAvoResponse, TProduct } from "../database/types";
import { ListOfAvocados } from "../components/ListOfAvocados";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://next-fundamentals-khaki.vercel.app/api/avo"
  );
  const { data }: TAPIAvoResponse = await response.json();
  return {
    props: {
      products: data,
    },
  };
};

const Home = ({ products }: { products: TProduct[] }): JSX.Element => {
  return (
    <div className={styles.Home}>
      <h2>
        Avo
        <Image
          src={AvocadoIcon}
          width="25px"
          height="25px"
          className={styles.img}
        />
        Store
      </h2>
      <ListOfAvocados products={products} />
    </div>
  );
};

export default Home;
