import { ComponentProps, forwardRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { labelsCustomer } from "../Modals/schemas/customerFormFields";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, error, ...props }, ref) => {
    return (
      <div className="relative">
        <label
          htmlFor={id ?? name}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {labelsCustomer[name]}
        </label>

        <input
          {...props}
          id={id ?? name}
          name={name}
          ref={ref}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        {error && (
          <div className="flex items-center gap-2 mt-2 text-red-900">
            <AiOutlineCloseCircle />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
