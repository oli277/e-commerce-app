import { useLocalStorage } from "./localStore";
import { createContext, useContext } from "react";

const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [Witems, setWItems] = useLocalStorage("wishList", []);

  const addToWishList = (product) => {
    setWItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);

      if (existing) return prevItems;
      return [...prevItems, { ...product, qty: 1 }];
    });
  };

  const removeFromWishList = (id) => {
    setWItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const clearWishList = () => {
    setWItems([]);
  };

  const wishListValues = {
    Witems,
    removeFromWishList,
    clearWishList,
    addToWishList,
  };

  return (
    <>
      <WishListContext.Provider value={wishListValues}>
        {children}
      </WishListContext.Provider>
    </>
  );
}

export function useWishList() {
  const wishListContext = useContext(WishListContext);
  return wishListContext;
}
