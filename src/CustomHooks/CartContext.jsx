import { useLocalStorage } from "../CustomHooks/localStore";
import { createContext, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage("cart", []);

  const addToCart = (product) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);

      if (existing) {
        return prevItems.map((item) => {
          return item.id === product.id ? { ...item, qty: item.qty + 1 } : item;
        });
      }
      return [...prevItems, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const incrementQuantity = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      );
    });
  };

  const decrementQuantity = (id) => {
    setItems((prevItems) => {
      
      return prevItems.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      );
    });
  };

  const updateQuantity = (id, newQty) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item,
      ),
    );
  };

  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const totalCount = items.reduce((count, item) => {
    return count + item.qty;
  }, 0);

  const cartValues = {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    updateQuantity,
    totalCount,
    totalPrice,
  };

  return (
    <>
      <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
    </>
  );
}

export function useCart() {
  const cartContext = useContext(CartContext);
  return cartContext;
}
