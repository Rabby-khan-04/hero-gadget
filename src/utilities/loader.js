import { getItemFromDB } from "./dataHandler";

export const productLoader = async () => {
  const res = await fetch("products.json");
  const products = await res.json();

  const storedItem = getItemFromDB();
  const initialCart = [];
  for (const id in storedItem) {
    const addedProduct = products.find((product) => product.id === id);
    addedProduct.quantity = storedItem[id];
    initialCart.push(addedProduct);
  }
  return [products, initialCart];
};
