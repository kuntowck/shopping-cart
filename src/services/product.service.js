import axios from "axios"

export const getProducts = (products) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => products(res.data))
    .catch((err) => console.log(err))
}
