interface InputProps {
  name?: string;
  isDisabled?: boolean;
  placeholder?: string;
  value: string;
  setValue: any;
  isRequired?: boolean;
  isFullWidth?: boolean;
  isPassword?: boolean;
}
const InputText: React.FC<InputProps> = ({
  name,
  isDisabled = false,
  placeholder = '',
  value,
  setValue,
  isRequired = false,
  isFullWidth = false,
  isPassword = false,
}) => {
  return (
    <input
      className={`h-14 px-4 border-[1px] border-gray ${isFullWidth ? 'w-full' : 'w-1/2'}`}
      name={name}
      type={isPassword ? 'password' : 'text'}
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