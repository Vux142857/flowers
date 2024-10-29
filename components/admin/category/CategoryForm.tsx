"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import categoryService, { ICategory } from "@/services/admin/category.service"
import toast from "react-hot-toast";
import Delete from "../common/Delete"
import Loader from "../common/Loader"
import { useForm } from "react-hook-form"
import { Schemas, StatusType } from "@/lib/admin/constants"
import ImageUpload from "../common/ImageUpload"

interface CategoryFormProps {
  initialData?: ICategory | null;
}

const categorySchema = z.object({
  name: z.string().min(1).max(255),
  status: z.string().min(1).max(255),
  imageUrl: z.array(z.string()),
  description: z.string().optional(),
  order: z.number().optional().default(0),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

const CategoryForm: React.FC<CategoryFormProps> = ({ initialData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: initialData
      ? { ...initialData, imageUrl: Array.isArray(initialData.imageUrl) ? initialData.imageUrl : [initialData.imageUrl], }
      : {
        name: "",
        status: StatusType.ACTIVE,
        description: "",
        imageUrl: [],
      },
  })

  const handleKeyPress = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const onSubmit = async (values: z.infer<typeof categorySchema>) => {
    try {
      setLoading(true);
      const res = (initialData)
        ? await categoryService.editCategory(initialData.id || "", {
          order: values.order || initialData.order,
          status: values.status,
          name: values.name,
          description: values.description,
          imageUrl: values.imageUrl[0] || initialData.imageUrl,
        })
        : await categoryService.postCategory({
          ...values,
          imageUrl: values.imageUrl[0],
        });

      if (!res?.message) {
        setLoading(false);
        toast.success(`Category ${initialData?.name ? "updated" : "created"}`);
        setTimeout(() => {
          router.push(`/${Schemas.CATEGORY}`);
        }, 1200);
      } else {
        setLoading(false);
        toast.error(res.message, {
          duration: 5000,
          position: 'top-right',
        });
      }
    } catch (err) {
      console.log("[service-category_POST]", err);
      toast.error("Something went wrong! Please try again.",
        {
          duration: 5000,
          position: 'top-right',
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    loading ? <Loader /> : (
      <div className="p-10">
        {initialData ? (
          <div className="flex items-center justify-between">
            <p className="text-heading2-bold">Edit Category</p>
            <Delete id={initialData?.id || ''} item={Schemas.CATEGORY} />
          </div>
        ) : (
          <h2 className="text-4xl text-blue-prime font-bold pb-4 border-b-2 border-black">Create Category</h2>
        )}
        <Form {...form}>
          <form className="space-y-8 p-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      onKeyDown={handleKeyPress} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              name="status"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md"
                      {...field}
                    >
                      {
                        StatusType && Object.values(StatusType).map((status, index) => (
                          <option key={index} value={status}>{status}</option>
                        ))
                      }
                    </select>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      onChange={(url) => field.onChange([url])}
                      onRemove={() => field.onChange([])}
                    />
                  </FormControl>
                  <FormMessage className="text-red-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md"
                      {...field}
                      onKeyDown={handleKeyPress}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order</FormLabel>
                  <FormControl>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md"
                      {...field}
                    >
                      {
                        Array.from({ length: 8 }, (_, i) => i + 1).map((order, index) => (
                          <option key={index} value={order}>{order}</option>
                        ))
                      }
                    </select>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <div className="flex gap-10">
              <Button disabled={loading} type="button" onClick={() => {
                onSubmit(form.getValues())
              }} className="bg-black text-white">
                Submit
              </Button>
              <Button
                type="button"
                onClick={() => router.push(`/${Schemas.CATEGORY}`)}
                className="bg-black text-white"
              >
                Discard
              </Button>
            </div>
          </form>
        </Form>
      </div>
    )
  );
}

export default CategoryForm;