import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function App() {
  return (
    <>
      <CartProvider>
        <div className="container mx-auto mt-5">
          <div className="text-2xl">Shopping Cart</div>
            <ProductList />
            <Cart />
        </div>
      </CartProvider>
    </>
  );
}
