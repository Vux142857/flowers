import { Plus } from "lucide-react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
}
const LinkButton:React.FC<LinkButtonProps> = ({href, text}) => {
  return (
    <Link className="bg-black text-white p-4 flex items-center hover:bg-opacity-65" href={href}>
      <Plus className="h-4 w-4 mr-2" />
      <p>{text}</p>
    </Link>
  );
}

export default LinkButton;