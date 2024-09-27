const Label = ({ name, children }) => {
  return (
    <label htmlFor={name} className="text-sm text-slate-800">
      {children}
    </label>
  );
};

export default Label;
