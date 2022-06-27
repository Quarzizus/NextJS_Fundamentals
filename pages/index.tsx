import { useEffect, useState } from "react";
import { NavBar } from "../components/Navbar";
import { TProduct } from "../database/types";

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    const response = await fetch("/api/avo");
    const { data, length } = await response.json();
    setProducts(data);
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <NavBar />
      {!products.length && <h1>Loading...</h1>}
      {products.length > 0 &&
        products.map(({ id, name }) => {
          return (
            <div key={id}>
              <a href={`/product/${id}`}>
                <h2>{name}</h2>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
