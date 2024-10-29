"use client"

import { Settings } from "lucide-react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

interface EditProps {
  item: string;
  id: string;
}

const Edit: React.FC<EditProps> = ({ item, id }) => {
  const router = useRouter();
  const onEdit = () => {
    router.push(`/admin/${item}/${id}`);
  }
  return (
    <Button className="bg-blue-700 text-white" onClick={onEdit}>
      <Settings className="h-4 w-4" />
    </Button>
  );
};

export default Edit;