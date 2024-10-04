import CardItem from "../Elements/Card";
import { Card } from "../ui/card";

const CardProduct = ({ product }) => {
  return (
    <Card className="" >
      <CardItem product={product} />
    </Card>
  );
};

export default CardProduct;
