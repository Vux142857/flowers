interface InputProps {
  isDisabled?: boolean;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}
const InputText: React.FC<InputProps> = ({
  isDisabled = false,
  placeholder = '',
  value,
  setValue,
}) => {
  return (
    <input
      className="h-14 px-4 border-[1px] border-gray"
      disabled={isDisabled}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
export default InputText;