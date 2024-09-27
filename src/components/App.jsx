// import { CartProvider } from "./CartContext";
// import ProductList from "./ProductList";
// import Cart from "./Cart";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";

export default function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <LoginPage />
        <RegisterPage />
      </div>
      {/* <CartProvider>
          <div className="text-2xl">Shopping Cart</div>
            <ProductList />
            <Cart />
            </CartProvider> */}
    </>
  );
}
