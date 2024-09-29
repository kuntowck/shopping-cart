import FormRegister from "@/components/Fragments/FormRegister";
import AuthLayout from "@/components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" text={"Enter your information to create an account."}>
      <FormRegister />
      <p>Already have an account? <Link to="/">Sign in</Link></p>
    </AuthLayout>
  );
};

export default RegisterPage;
