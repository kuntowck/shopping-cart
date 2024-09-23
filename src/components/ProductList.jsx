import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Product 1", price: 10000 },
  { id: 2, name: "Product 2", price: 20000 },
  { id: 3, name: "Product 3", price: 30000 },
];

export default function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="my-5">
      <header>
        <h2>Products</h2>
      </header>
      <div className="flex flex-row gap-4 ">
        {products.map((product) => (
          <Card key={product.id} className="flex-auto justify-items-center">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-md font-medium">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl font-bold">
              <p>Rp{product.price}</p>
            </CardContent>
            <CardContent>
              <Button variant="outline" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
