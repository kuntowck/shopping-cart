import { CartProvider } from "@/context/CartContext"
import ProductLayout from "@/components/Layouts/ProductLayout"
import CardProduct from "@/components/Fragments/CardProduct"
import { useEffect } from "react"
import { getProducts } from "@/services/product.service"
import { useState } from "react"
import CartLayout from "@/components/Layouts/CartLayout"
import { getUsername } from "@/services/auth.service"

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [username, setUsername] = useState("")

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setUsername(getUsername(token))
    } else {
      window.location.href = "/"
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  return (
    <CartProvider>
      <header className="bg-transparent w-full absolute top-0 left-0 flex items-center z-10">
        <div className="container mx-auto px-10 py-4">
          <div className="flex flex-row justify-between relative">
            <div>
              <div className="text-xl font-bold">Shopping Cart</div>
            </div>

            <nav>
              <ul className="flex ">
                <li className="group">
                  <a href="/products" className="group-hover:text-slate-200">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/cart" className="mx-8 group-hover:text-slate-200">
                    Cart
                  </a>
                </li>
                <li>
                  <button
                    className="group-hover:text-slate-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-10">
        {username}
        <ProductLayout title={"Product List"}>
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </ProductLayout>

        <CartLayout />
      </div>
    </CartProvider>
  )
}
export default ProductsPage
