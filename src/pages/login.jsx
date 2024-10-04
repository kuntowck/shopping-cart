import FormLogin from "@/components/Fragments/FormLogin";
import AuthLayout from "@/components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login"
      text={"Welcome, please enter your details below."}
    >
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
