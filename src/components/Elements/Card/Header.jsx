import { CardHeader, CardContent } from "@/components/ui/card"

const Header = ({ product }) => {
  return (
    <CardHeader className="flex items-center justify-center pb-2">
      <CardContent>
        <a href="#">
          <img src={product.image} alt={product.image} className="w-32" />
        </a>
      </CardContent>
      
    </CardHeader>
  )
}

export default Header
