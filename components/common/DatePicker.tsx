interface DatePickerProps {
  name?: string;
  isDisabled?: boolean;
  placeholder?: string;
  value: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  name,
  isDisabled = false,
  placeholder = '',
  value,
  setValue,
  isRequired = false,
}) => {
  return (
    <input
      type="date"
      className="h-14 px-4 border-[1px] border-gray"
      name={name}
      disabled={isDisabled}
      placeholder={placeholder}
      value={value}
      required={isRequired}
      onChange={setValue}
    />
  );
};

export default DatePicker;
