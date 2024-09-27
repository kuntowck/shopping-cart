const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      className="border border-slate-200 px-3 py-2 rounded-md w-full placeholder:text-sm"
    />
  );
};

export default Input;
