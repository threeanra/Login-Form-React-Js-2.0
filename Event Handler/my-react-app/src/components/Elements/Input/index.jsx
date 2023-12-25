import Label from "./label";
import Input from "./input";

const InputForm = (props) => {
  const { title, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input type={type} placeholder={placeholder} name={name}></Input>
    </div>
  );
};

export default InputForm;
