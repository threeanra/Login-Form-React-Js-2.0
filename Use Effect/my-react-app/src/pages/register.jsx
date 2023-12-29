import AuthLayout from "../components/Layout/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    // Reminder to set type for conditonal rendering
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
