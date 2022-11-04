import { ChangeEventHandler } from "react";

export default function Checkbox({
  className = "",
  checked,
  onChange,
  name,
  id,
}: {
  className?: string;
  checked: boolean;
  onChange: ChangeEventHandler;
  name: string;
  id?: string;
}) {
  return (
    <input
      id={id}
      name={name}
      className={className}
      checked={checked}
      onChange={onChange}
      type="checkbox"
    />
  );
}
