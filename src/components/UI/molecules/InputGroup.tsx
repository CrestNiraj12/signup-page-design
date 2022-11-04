import InputField, { InputProps } from "../atoms/InputField";

export default function InputGroup({
  className = "",
  label,
  id = "",
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
}: InputProps & { label: string }) {
  return (
    <div
      className={`${className} w-full flex flex-col justify-start items-start my-2`}
    >
      <label htmlFor={id} className="text-[#030229] text-sm tracking-wide">
        {label}
      </label>
      <InputField
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
