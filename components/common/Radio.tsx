import React from 'react';

interface CustomRadioButtonProps {
  id: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  id,
  label,
  value,
  checked,
  onChange,
}) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center cursor-pointer gap-3"
    >
      <span className={`relative w-5 h-5 flex items-center justify-center ${checked ? 'border-black' : 'border-gray-400'} border-2 rounded-full`}>
        <input
          type="radio"
          id={id}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        {checked && (
          <span className="w-3 h-3 bg-black rounded-full"></span>
        )}
      </span>
      <span className="lg:text-body text-mobile-botext-body">{label}</span>
    </label>
  );
};

export default CustomRadioButton;
