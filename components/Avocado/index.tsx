import Image from "next/image";
import styles from "./styles.module.css";
import { TProduct } from "../../database/types";

const Avocado = ({ name, id, image, price, sku }: TProduct) => {
  return (
    <li className={styles.Avocado}>
      <a href={`/product/${id}`}>
        <Image src={image} width="195px" height="195px" />
      </a>
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{sku}</p>
      </div>
    </li>
  );
};

export { Avocado };
