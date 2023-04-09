import React, { useContext } from "react";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utilities/dataHandler";
import { toast } from "react-hot-toast";
import { CartContext, ProductsContext } from "../App";

const Shop = () => {
  const products = useContext(ProductsContext || []);
  const [cart, setCart] = useContext(CartContext || []);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cart.find(
      (existingProduct) => existingProduct.id === product.id
    );
    if (exist) {
      exist.quantity = exist.quantity + 1;
      const rest = cart.filter(
        (existingProduct) => existingProduct.id !== product.id
      );
      newCart = [...rest, exist];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDB(product.id);
    toast.success("Product Added! 🛒");
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
