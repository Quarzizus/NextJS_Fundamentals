import { TProduct } from "../../database/types";
import { Avocado } from "../Avocado";

interface props {
  products: TProduct[];
}

const ListOfAvocados = ({ products }: props): JSX.Element => {
  return (
    <ul>
      {!products.length && <h1>Loading...</h1>}
      {products.length > 0 &&
        products.map((avocado) => {
          return <Avocado key={avocado.id} {...avocado} />;
        })}
    </ul>
  );
};

export { ListOfAvocados };
