import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value?: string | any;
  type?: string;
}

export const Input = ({ placeholder, value, type, ...props }: InputProps) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      className="h-[44px] w-full border-[1px] border-gray2 rounded px-3 placeholder-gray2
      text-gray3 outline-none focus-within:border-black focus-within:text-black "
    />
  );
};
