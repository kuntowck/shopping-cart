import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Products = () => {
  return (
    <>
        <div className="container mx-auto p-10">
          <div className="text-xl font-bold">Shopping Cart</div>
          <ProductList />
          <Cart />
        </div>
    </>
  );
};

export default Products;
