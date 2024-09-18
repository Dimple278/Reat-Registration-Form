export interface IInput {
  type?: string;
  placeholder?: string;
  value: string;
  name?: string;
  modifierClass?: string;
  required?: boolean;
  checked?: boolean;
  id?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
