const AuthLayout = ({ title, text, children }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full border border-slate-200 p-10 max-w-md rounded-lg shadow-lg flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        <p className="text-sm  text-slate-400">{text}</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
