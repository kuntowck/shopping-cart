import ButtonAuth from "../Elements/Button/ButtonAuth.jsx";
import InputForm from "../Elements/Input/index.jsx";

const FormLogin = () => {
  return (
    <form action="" className="flex flex-col gap-2">
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
    </form>
  );
};

export default FormLogin;
