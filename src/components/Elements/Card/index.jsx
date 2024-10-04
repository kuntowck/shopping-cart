import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const CardItem = ({ product }) => {
  return (
    <>
      <Header product={product} />
      <Content>
        <p>Rp{product.price}</p>
      </Content>
      <Footer product={product} />
    </>
  );
};

export default CardItem;
