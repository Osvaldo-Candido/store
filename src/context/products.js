import { createContext, useContext } from 'react';

export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  return <ProductContext>{children}</ProductContext>;
}
