export interface IButton {
  type: "submit" | "reset" | "button" | undefined;
  text: string;
  modifierClass?: string;
  onClick?: (event: any) => void;
}
