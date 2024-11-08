interface CheckedProps {
  className?: string;
}

const Checked: React.FC<CheckedProps> = ({ className }) => {
  return (
    <svg className={`lucide lucide-circle-dashed ${className}`} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.55156 18.1501L4.22656 12.8251L5.27656 11.7501L9.55156 16.0251L18.7266 6.8501L19.7766 7.9251L9.55156 18.1501Z" fill="#121212" />
    </svg>
  );
}

export default Checked;