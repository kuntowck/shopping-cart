import Footer from "./Footer"
import Header from "./Header"

const CardItem = ({ product, children }) => {
  return (
    <>
      <Header product={product} />
      {children}
      <Footer product={product} />
    </>
  )
}

export default CardItem
