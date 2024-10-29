import { useState } from "react";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../ui/alert-dialog";
import { Schemas } from "@/lib/admin/constants";
import serCategoryService from "@/services/admin/category.service";
import productService from "@/services/admin/product.service";
import userService from "@/services/admin/user.service";
import orderService from "@/services/admin/order.service";

interface DeleteProps {
  item: string;
  id: string;
}

const Delete: React.FC<DeleteProps> = ({ item, id }) => {
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let res: any;
      switch (item) {
        case Schemas.CATEGORY:
          res = await serCategoryService.deleteCategory(id)
          break;
        case Schemas.PRODUCT:
          res = await productService.deleteProduct(id)
          break;
        case Schemas.CUSTOMER:
          res = await userService.deteleUser(id)
        case Schemas.ORDER:
          res = await orderService.deleteOrder(id)
        default:
          break;
      }
      if (!res?.statusCode) {
        setLoading(false)
        toast.success(`${item} deleted`)
        setTimeout(() => {
          window.location.reload()
        }, 1200)
      }
    } catch (err) {
      toast.error("Something went wrong! Please try again.")
      console.log(err)
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="px-4 py-2.5 rounded-md bg-red-400 text-white">
          <Trash className="h-4 w-4" />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white text-black-200">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-400">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your {item}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-400 text-white" onClick={onDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;