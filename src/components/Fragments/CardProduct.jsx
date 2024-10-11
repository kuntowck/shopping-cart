import CardItem from "../Elements/Card"
import { Card, CardContent } from "../ui/card"

const CardProduct = ({ product }) => {
  return (
    <Card className="w-56">
      <CardItem product={product}>
        <CardContent className="text-md font-medium">
          <p>{product.title.substring(0, 30)} ...</p>
        </CardContent>
        <CardContent className="text-xl font-bold -my-4">
          <p>${product.price}</p>
        </CardContent>
      </CardItem>
    </Card>
  )
}

export default CardProduct
