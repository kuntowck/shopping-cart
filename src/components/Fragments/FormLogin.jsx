import { login } from "@/services/auth.service.js"
import ButtonAuth from "../Elements/ButtonAuth.jsx"
import InputForm from "../Elements/Input/index.jsx"
import { useState } from "react"

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("")
  const handleLogin = (event) => {
    event.preventDefault()

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    login(data, (status, res) => {
      if (status) {
        console.log(res)
        localStorage.setItem("token", res)
        window.location.href = "/products"
      } else {
        setLoginFailed(res.response.data)
      }
    })
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2">
      <InputForm
        text="Username"
        type="username"
        name="username"
        placeholder="johndoe"
      />
      <InputForm
        text="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <ButtonAuth name="login" text="Sign in" />
      {loginFailed && (
        <p className="text-rose-600 text-sm text-center">{loginFailed}</p>
      )}
    </form>
  )
}

export default FormLogin
