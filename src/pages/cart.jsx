// import CartLayout from "@/components/Layouts/CartLayout";
import { CartProvider } from "@/context/CartContext";

const CartPage = () => {
  return (
    <>
      <CartProvider>
        {/* <CartLayout /> */}
      </CartProvider>
    </>
  );
};

export default CartPage;
