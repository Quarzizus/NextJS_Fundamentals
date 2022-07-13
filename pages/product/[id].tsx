import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { TAPIAvoResponse, TProduct } from "../../database/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://next-fundamentals-khaki.vercel.app/api/avo"
  );
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map((avo) => ({
    params: { id: avo.id },
  }));

  return {
    paths,
    // 404 for everything else
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    "https://next-fundamentals-khaki.vercel.app/api/avo/product/" + params?.id
  );
  const data: TProduct = await response.json();
  return {
    props: {
      product: data,
    },
  };
};

const Product = ({ product }: { product: TProduct }): JSX.Element => {
  return (
    <>
      <h2>{product.id}</h2>
      <p>{product.name}</p>
    </>
  );
};

export default Product;
