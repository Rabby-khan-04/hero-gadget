import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getItemFromDB } from "../utilities/dataHandler";
import CartItem from "./Cards/CartItem";

const Cart = () => {
  const pData = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedItem = getItemFromDB();
    const cartItem = [];
    for (const id in storedItem) {
      const addedProduct = pData.find((product) => product.id === id);
      addedProduct.quantity = storedItem[id];
      cartItem.push(addedProduct);
    }
    setCart(cartItem);
  }, []);

  let total = 0;
  cart.map((product) => {
    total = total + product.price * product.quantity;
  });

  const handleRemoveCart = (id) => {}

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
        <h2 className="text-xl font-semibold">
          {cart.length ? "Review Cart Items" : "Cart is EMPTY!"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount: <span className="font-semibold">{total}$</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <>
              <button type="button" className="btn-outlined">
                Clear <span className="sr-only sm:not-sr-only">Cart</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/shop">
                <button type="button" className="btn-outlined">
                  Back <span className="sr-only sm:not-sr-only">To Shop</span>
                </button>
              </Link>
            </>
          )}

          <button
            onClick={() => alert("hello")}
            type="button"
            className="btn-primary"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
