import CardItem from "../Elements/Card";
import { Card, CardContent } from "../ui/card";

const CardProduct = ({ product }) => {
  return (
    <Card className="">
      <CardItem product={product}>
        <CardContent className="text-xl font-bold">
          <p>Rp{product.price}</p>
        </CardContent>
      </CardItem>
    </Card>
  );
};

export default CardProduct;
