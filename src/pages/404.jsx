import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-slate-800">Oops!</h1>
      <p className="text-slate-500 mb-3">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-slate-500">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;