import { IInput } from "../../Interface/IInput";

const Input = (props: IInput) => {
  const {
    type = "text",
    placeholder = "",
    value,
    onChange,
    name,
    modifierClass = "",
    required = false,
    checked = false,
    id = "",
  } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className={`input ${modifierClass}`}
      required={required}
      checked={checked}
      id={id}
    />
  );
};

export default Input;
