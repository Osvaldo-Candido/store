import { createContext, useContext, useState } from 'react';

export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addProductInCart = (product) => {
    const updateProducts = cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            amount: item.amount + 1,
            total: item.price * (item.amount + 1),
          }
        : item,
    );

    if (!updateProducts.some((item) => item.id === product.id)) {
      updateProducts.push({ ...product, amount: 1, total: product.price });
    }

    setCart(updateProducts);
    changeTotal(updateProducts);
  };

  const removeProductInCart = (product) => {
    const updateProducts = cart
      .map((item) =>
        item.id === product.id
          ? { ...item, amount: item.amount - 1, total: item.total - item.price }
          : item,
      )
      .filter((item) => item.amount > 0);

    setCart(updateProducts);
    changeTotal(updateProducts);
  };

  function changeTotal(items) {
    const result = items.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);
    setTotal(result);
  }
  return (
    <ProductContext.Provider
      value={{ addProductInCart, removeProductInCart, cart, total }}
    >
      {children}
    </ProductContext.Provider>
  );
}
