import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
