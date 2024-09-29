import Label from "./Label";
import Input from "./Input";

const InputForm = ({ text, type, name, placeholder }) => {
  return (
    <>
      <Label htmlFor={name}>{text}</Label>
      <Input id={name} type={type} name={name} placeholder={placeholder} />
    </>
  );
};

export default InputForm;
