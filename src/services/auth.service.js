import axios from "axios"
import { jwtDecode } from "jwt-decode"

export const login = (data, auth) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => auth(true, res.data.token))
    .catch((err) => auth(false, err))
}

export const getUsername = (token) => {
  const decoded = jwtDecode(token)
  console.log(decoded)
  return decoded.user
}
