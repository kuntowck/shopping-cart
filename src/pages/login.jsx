import FormLogin from "@/components/Fragments/FormLogin";
import AuthLayout from "@/components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login"
      text={"Welcome, please enter your details below."}
    >
      <FormLogin />
      <p>
        Don&lsquo;t have an account? <Link to="/register">Sign up</Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
