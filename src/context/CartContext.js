import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartLocal = window.localStorage.getItem('cart');
    if (cartLocal) {
      setCart(JSON.parse(cartLocal));
    }
  }, []);
  // ADD ITEM
  const addToCart = useCallback(
    product => {
      const filtered = cart.filter(item => !item.id || item.id !== product.id);
      setCart([...filtered, product]);
      window.localStorage.setItem(
        'cart',
        JSON.stringify([...filtered, product])
      );
    },
    [cart]
  );
  // UPDATE ITEM
  const changeQuantity = useCallback(
    (id, quantity) => {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
      setCart(newCart);
      window.localStorage.setItem('cart', JSON.stringify(newCart));
    },
    [cart]
  );
  // REMOVE ITEM
  const removeFromCart = product => {
    const filtered = cart.filter(item => item.id !== product.id);
    setCart([...filtered]);
    window.localStorage.setItem('cart', JSON.stringify([...filtered]));
  };
  // CLEAR CART
  const clearCart = () => {
    setCart([]);
    window.localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, changeQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
