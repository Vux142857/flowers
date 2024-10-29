/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import productService, { IProduct } from "@/services/admin/product.service";
import Loader from "../common/Loader";
import { Schemas, StatusType } from "@/lib/admin/constants";
import Delete from "../common/Delete";
import categoryService, { ICategory } from "@/services/admin/category.service";
import MultiText from "../common/multi-text";
import { Separator } from "../../ui/separator";
import ImageUpload from "../common/ImageUpload";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  status: z.string().min(1),
  description: z.string().optional(),
  categoryId: z.string().min(1),
  imageUrl: z.array(z.string()),
  slug: z.string(),
  tags: z.array(z.string()),
  price: z.coerce.number().min(1),
  remaining: z.coerce.number().min(0),
});

interface ProductFormProps {
  initialData?: IProduct | null;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategory();
  }, []);


  // Fetch Categories
  const getCategory = async () => {
    try {
      const res = await categoryService.getCategories();
      if (res?.data?.length >= 0) {
        setCategories(res?.data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log("[Category_GET]", err);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
        ...initialData,
        categoryId: initialData.category?.id,
        imageUrl: Array.isArray(initialData.imageUrl) ? initialData.imageUrl : [initialData.imageUrl],
      }
      : {
        name: "",
        status: "active",
        description: "",
        categoryId: categories[0]?.id || "",
        imageUrl: [],
        slug: "",
        tags: [],
        price: 0,
        remaining: 0,
      },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = initialData
        ? await productService.editProduct(
          initialData.id || "",
          {
            name: values.name,
            price: values.price,
            remaining: values.remaining,
            status: values.status,
            imageUrl: values.imageUrl[0] || initialData.imageUrl,
            slug: values.slug,
            description: values.description,
            categoryId: values.categoryId,
          }
        )
        : await productService.postProduct({
          ...values,
          imageUrl: values.imageUrl[0],
        });

      if (!res?.message) {
        setLoading(false);
        toast.success(
          `Product ${initialData?.name ? "updated" : "created"}`
        );
        setTimeout(() => {
          window.location.href = `/${Schemas.PRODUCT}`;
          router.push(`/${Schemas.PRODUCT}`);
        }, 1200);
      } else {
        setLoading(false);
        toast.error(res.message?.message);
      }
    } catch (err) {
      console.log("[product_POST]", err);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const nameValue = form.watch("name");

  useEffect(() => {
    const createSlug = (name: string) => {
      return name
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-"); // Replace spaces and non-word characters with "-"
    };

    if (nameValue) {
      const generatedSlug = createSlug(nameValue);
      form.setValue("slug", generatedSlug);
    }
  }, [nameValue, form]);

  return loading ? (
    <Loader />
  ) : (
    <div className="p-10">
      {initialData ? (
        <>
          <div className="flex items-center justify-between">
            <p className="text-heading2-bold">Edit Product</p>
            <Delete id={initialData.id || ""} item={Schemas.PRODUCT} />
          </div>
          <Separator className="bg-black my-4" />
        </>
      ) : (
        <p className="text-4xl text-blue-prime font-bold pb-4 border-b-2 border-black">
          Create Product
        </p>
      )}
      <Form {...form}>
        <form className="space-y-8 pt-4">
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
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField control={form.control} name="status" render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {
                    StatusType && Object.values(StatusType).map((status, index) => (
                      <option key={index} value={status}>{status}</option>
                    ))
                  }
                </select>
              </FormControl>
              <FormMessage className="text-red-1" />
            </FormItem>
          )} />
          <FormField control={form.control} name="categoryId" render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {
                    categories.map((item: ICategory, index: number) => (
                      <option key={index} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )} />
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
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <MultiText
                    placeholder="Tags"
                    value={field.value}
                    onChange={(tag) => field.onChange([...field.value, tag])}
                    onRemove={(tagToRemove) =>
                      field.onChange(
                        field.value.filter((tag) => tag !== tagToRemove)
                      )
                    }
                  />
                </FormControl>
                <FormMessage className="text-red-1" />
              </FormItem>
            )}
          />
          <div>
            <FormField
              name="slug"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Slug"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-1" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Description"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-1" />
              </FormItem>
            )}
          />
          <FormField control={form.control} name="price" render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Price"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-1" />
            </FormItem>
          )} />
          <FormField control={form.control} name="remaining" render={({ field }) => (
            <FormItem>
              <FormLabel>Remaining</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Remaining"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-1" />
            </FormItem>
          )} />

          <div className="flex gap-10">
            <Button type="button" onClick={() => {
              onSubmit(form.getValues())
            }} className="bg-black text-white">
              Submit
            </Button>
            <Button
              type="button"
              onClick={() => router.push(`/${Schemas.PRODUCT}`)}
              className="bg-black text-white"
            >
              Discard
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
