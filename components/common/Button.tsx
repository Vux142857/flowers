import LeftIcon from "../icons/LeftIcon";
import RightIcon from "../icons/RightIcon";

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

interface ButtonProps {
  label: string;
  onClick?: () => void;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  isDisabled?: boolean;
  type?: ButtonType;
  isFull?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  isLeftIcon = false,
  isRightIcon = false,
  isDisabled = false,
  type = ButtonType.Primary,
  isFull = false,
}) => {
  const primary = 'bg-black text-white hover:bg-dark-gray isDisabled:bg-gray disabled:bg-light-gray disabled:text-gray';
  const secondary = 'bg-white text-black border-[1px] border-black hover:bg-black hover:text-white disabled:text-dark-gray disabled:bg-light-gray';
  const tertiary = 'bg-black text-white border-[1px] border-white hover:bg-white hover:text-dark-gray';
  const theme = type === ButtonType.Primary ? primary : type === ButtonType.Secondary ? secondary : tertiary;
  return (
    <div className={
      `cursor-pointer px-6 pt-4 pb-[0.875rem] flex flex-row gap-2 items-center ${theme} justify-center text-center h-12 lg:h-14 ${isDisabled ? 'disabled' : ''} ${isFull ? 'w-full' : 'm-h-[175px]'} relative group`}>
      {isLeftIcon && <div className="transition-transform duration-300 group-hover:-translate-x-2"><LeftIcon /></div>}
      <p className="text-button">{label.toUpperCase()}</p>
      {isRightIcon && <div className="transition-transform duration-300 group-hover:translate-x-2"><RightIcon /></div>}
    </div>
  );
}

export default Button;