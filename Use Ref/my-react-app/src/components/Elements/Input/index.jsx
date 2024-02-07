import Label from "./label";
import Input from "./input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { title, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;
