interface InputProps {
  name?: string;
  isDisabled?: boolean;
  placeholder?: string;
  value: string;
  setValue: any;
  isRequired?: boolean;
}
const InputText: React.FC<InputProps> = ({
  name,
  isDisabled = false,
  placeholder = '',
  value,
  setValue,
  isRequired = false,
}) => {
  return (
    <input
      className="h-14 px-4 border-[1px] border-gray"
      name={name}
      disabled={isDisabled}
      placeholder={placeholder}
      value={value}
      required={isRequired}
      onChange={setValue}
      autoFocus
    />
  );
}
export default InputText;