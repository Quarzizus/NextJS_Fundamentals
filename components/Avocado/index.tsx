import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { TProduct } from "../../database/types";
import Link from "next/link";

const Avocado = ({ name, id, image, price, sku }: TProduct) => {
  return (
    <Link href={`/product/${id}`}>
      <li className={styles.Avocado}>
        <Image src={image} width="200px" height="210px" />
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{sku}</p>
        </div>
      </li>
    </Link>
  );
};

export { Avocado };
