import { IDropdown } from "../../Interface/IDropdown";

const Dropdown = (props: IDropdown) => {
  const { values, selectedValue, onChange } = props;
  return (
    <select className="select" value={selectedValue} onChange={onChange}>
      {values.map((item: string, index: number) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
