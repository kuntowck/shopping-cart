import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { CardFooter } from "@/components/ui/card";

const Footer = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <CardFooter>
      <Button variant="outline" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </CardFooter>
  );
};

export default Footer;
