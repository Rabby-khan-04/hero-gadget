import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const [products, initialCart] = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <ProductsContext.Provider value={products}>
        <Header />
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet />
        </div>
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </ProductsContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
