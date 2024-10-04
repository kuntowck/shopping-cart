const ButtonAuth = ({ name, text }) => {
  return (
    <button
      type="submit"
      name={name}
      className="w-full bg-slate-800 text-sm text-slate-100 py-2 rounded-md mt-4"
    >
      {text}
    </button>
  );
};

export default ButtonAuth;
