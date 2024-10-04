import ButtonAuth from "../Elements/ButtonAuth";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="" className="flex flex-col gap-2">
      <InputForm text="Name" type="text" name="name" placeholder="John Doe" />
      <InputForm
        text="Username"
        type="username"
        name="username"
        placeholder="johndoe"
      />
      <InputForm text="Email" type="email" name="email" placeholder="johndoe" />
      <InputForm
        text="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <InputForm
        text="Confirm Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <ButtonAuth name="register" text="Sign up" />
    </form>
  );
};

export default FormRegister;
