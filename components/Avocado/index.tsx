import Image from "next/image";
import { TProduct } from "../../database/types";

const Avocado = ({ name, id, image, price, sku }: TProduct) => {
  return (
    <li>
      <a href={`/product/${id}`}>
        <Image src={image} width="100px" height="100px" />
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{sku}</p>
      </a>
    </li>
  );
};

export { Avocado };
