import { create } from "zustand";

const useStore = create((set) => ({
  cart: [], // initial state untuk cart
  totalPrice: 0, // initial state untuk total harga

  // Tambahkan item ke dalam cart
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalPrice: state.totalPrice + product.price,
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
          totalPrice: state.totalPrice + product.price,
        };
      }
    }),

  // Hapus item dari cart
  removeFromCart: (id) =>
    set((state) => {
      const productToRemove = state.cart.find((item) => item.id === id);
      return {
        cart: state.cart.filter((item) => item.id !== id),
        totalPrice:
          state.totalPrice - productToRemove.price * productToRemove.quantity,
      };
    }),

  // Reset cart (misalnya setelah checkout)
  clearCart: () =>
    set({
      cart: [],
      totalPrice: 0,
    }),
}));

export default useStore;
