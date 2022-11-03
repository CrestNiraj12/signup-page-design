import { ChangeEventHandler } from "react";

export type InputProps = {
  className?: string;
  type: "text" | "email" | "password";
  name: string;
  id?: string;
  value: any;
  onChange: ChangeEventHandler;
  placeholder?: string;
};

export default function InputField({
  className = "",
  type = "text",
  name,
  id = "",
  value,
  onChange,
  placeholder = "",
}: InputProps) {
  return (
    <input
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      type={type}
      className={`${className} bg-[#F7F7F8] placeholder-[#030229B3] py-3 w-full rounded px-3 text-sm mt-2`}
      placeholder={placeholder}
    />
  );
}
