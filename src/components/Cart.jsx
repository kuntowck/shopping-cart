import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TrashIcon } from "@radix-ui/react-icons/dist";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

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
                    onClick={() => dispatch(removeFromCart(item.id))}
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
          <p>Total: Rp{totalPrice}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
