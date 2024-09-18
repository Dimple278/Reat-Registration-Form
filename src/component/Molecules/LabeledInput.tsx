import { IInput } from "../../Interface/IInput";
import { ILabel } from "../../Interface/ILabel";
import Input from "../Atoms/Input";
import Label from "../Atoms/Label";

interface ILabeledInput extends ILabel, IInput {
  modifierClass?: string;
}
const LabeledInput = (props: ILabeledInput) => {
  const {
    text,
    htmlFor,
    type,
    name,
    placeholder,
    onChange,
    value,
    modifierClass = "",
    required,
    checked,
    id,
  } = props;
  return (
    <div className={`labeled-input ${modifierClass}`}>
      <Label htmlFor={htmlFor} text={text} />
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
        checked={checked}
        id={id}
      />
    </div>
  );
};

export default LabeledInput;
