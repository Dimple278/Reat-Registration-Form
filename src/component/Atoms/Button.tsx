import { IButton } from "../../Interface/IButton";

const Button = (props: IButton) => {
  const { type, text, modifierClass = "", onClick } = props;
  return (
    <button type={type} className={`btn ${modifierClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
