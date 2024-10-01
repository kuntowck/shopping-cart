import useStore from "./CartContext";
import { useShallow } from "zustand/react/shallow";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Product 1", price: 10000 },
  { id: 2, name: "Product 2", price: 20000 },
  { id: 3, name: "Product 3", price: 30000 },
];

export default function ProductList() {
  console.log("render product list");

  const { addToCart } = useStore(
    useShallow((state) => ({
      addToCart: state.addToCart,
    }))
  );

  return (
    <div className="my-5">
      <header>
        <h2>Products</h2>
      </header>
      <div className="flex flex-row gap-4 ">
        {products.map((product) => (
          <Card key={product.id} className="max-w-48 ">
            <CardHeader className="flex justify-center">
              <CardTitle className="text-sm font-normal text-slate-600">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-md font-bold text-slate-800">
              <p>Rp{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => addToCart(product)}>
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
