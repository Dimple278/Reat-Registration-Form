import { ILabel } from "../../Interface/ILabel";

const Label = (props: ILabel) => {
  const { htmlFor = "", text, modifierClass = "" } = props;
  return (
    <label htmlFor={htmlFor} className={`label ${modifierClass}`}>
      {text}
    </label>
  );
};

export default Label;
