import Cart from "../components/Cart";
import { CartProvider } from "@/components/CartContext";
import ProductLayout from "@/components/Layouts/ProductLayout";
import CardProduct from "@/components/Fragments/CardProduct";

const products = [
  { id: 1, name: "Product 1", price: 10000 },
  { id: 2, name: "Product 2", price: 20000 },
  { id: 3, name: "Product 3", price: 30000 },
];
const ProductsPage = () => {
  return (
    <CartProvider>
      <div className="container mx-auto p-10">
        <div className="text-xl font-bold">Shopping Cart</div>
        <ProductLayout title={"Product List"}>
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </ProductLayout>
        <Cart />
      </div>
    </CartProvider>
  );
};
export default ProductsPage;
