import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TrashIcon } from "@radix-ui/react-icons/dist";

export default function Cart() {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle className="text-md">My Cart</CardTitle>
        </CardHeader>
        {cart.length === 0 ? (
          <CardContent>
            <p>Your cart is empty</p>
          </CardContent>
        ) : (
          <div className="flex flex-row">
            {cart.map((item) => (
              <div key={item.id}>
                <CardContent>
                  <p className="text-md font-medium">{item.name}</p>
                  <p>
                    Rp{item.price} x {item.quantity}
                  </p>
                </CardContent>
                <CardContent>
                  <Button
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Remove
                  </Button>
                </CardContent>
              </div>
            ))}
          </div>
        )}
        <CardFooter className="text-md font-bold">
          <p>Total: Rp{getTotalPrice()}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
