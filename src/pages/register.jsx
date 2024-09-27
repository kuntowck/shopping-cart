import FormRegister from "@/components/Fragments/FormRegister";
import AuthLayout from "@/components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" text={"Enter your information to create an account."}>
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
