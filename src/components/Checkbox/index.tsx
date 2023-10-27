import { labelsCustomer } from "../Modals/schemas/customerFormFields";

interface CheckboxProps {
  name: string;
  value?: any;
  onChange?: (...event: any[]) => void;
}

export const Checkbox = ({ name, value, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id={name} value={value} onChange={onChange} />
      <label
        htmlFor={name}
        className="flex border border-blue-theme h-[20px] w-[20px] appearance-none items-center justify-center rounded-[8px] outline-none cursor-pointer"
      >
        {labelsCustomer[name]}
      </label>
    </div>
  );
};
