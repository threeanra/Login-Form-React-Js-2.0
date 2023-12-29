import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        title="Full Name"
        name="fullname"
        placeholder="Insert your name here"
        type="text"
      ></InputForm>
      <InputForm
        title="Email"
        name="email"
        placeholder="Insert your email here"
        type="text"
      ></InputForm>
      <InputForm
        title="Password"
        name="password"
        placeholder="****************"
        type="password"
      ></InputForm>
      <InputForm
        title="Confirm Password"
        name="confirmpassword"
        placeholder="****************"
        type="password"
      ></InputForm>
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
