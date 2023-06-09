export const addToDB = (id) => {
  const storedItem = getItemFromDB();

  const quantity = storedItem[id];
  if (quantity) {
    storedItem[id] = quantity + 1;
  } else {
    storedItem[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(storedItem));
};

export const getItemFromDB = () => {
  let storedItem = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedItem) {
    storedItem = storedItem;
  } else {
    storedItem = {};
  }

  return storedItem;
};

export const removeItemFromCart = (id) => {
  const storedItem = getItemFromDB();
  if (id in storedItem) {
    delete storedItem[id];
  }
  localStorage.setItem("shopping-cart", JSON.stringify(storedItem));
};

export const clearCart = () => {
  localStorage.removeItem("shopping-cart");
};
