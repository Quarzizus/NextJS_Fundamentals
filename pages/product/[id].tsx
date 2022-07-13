import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TProduct } from "../../database/types";

const Product = (): JSX.Element => {
  const router = useRouter();
  const [product, setProduct] = useState<TProduct>({} as TProduct);
  const { id } = router.query;

  const getProduct = async () => {
    if (id) {
      const response = await fetch("/api/avo/product/" + id);
      const data = await response.json();
      setProduct(data);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      <h2>{product.id}</h2>
      <p>{product.name}</p>
    </>
  );
};

export default Product;
