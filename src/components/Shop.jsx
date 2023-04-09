import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utilities/dataHandler";

const Shop = () => {
  const products = useLoaderData();

  const handleAddToCart = (product) => {
    addToDB(product.id);
  };

  return (
    <div className="my-container">
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
