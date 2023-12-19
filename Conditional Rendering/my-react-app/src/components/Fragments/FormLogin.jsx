import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        title="Email"
        name="email"
        placeholder="Input your email"
        type="text"
      ></InputForm>
      <InputForm
        title="Password"
        name="password"
        placeholder="****************"
        type="password"
      ></InputForm>
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
