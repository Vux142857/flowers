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
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast";
import { Schemas, StatusOrder } from "@/lib/admin/constants"
import { useForm } from "react-hook-form"
import orderService, { IOrder } from "@/services/admin/order.service"
import Delete from "../common/Delete"
import Loader from "../common/Loader"
import { Input } from "@/components/ui/input"

interface OrderFormProps {
  initialData: IOrder | null;
}

const orderSchema = z.object({
  customer: z.object({
    id: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email(),
    address: z.string().optional(),
    subscribedId: z.string().optional(),
    status: z.string(),
    roles: z.array(z.string()),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
  statusOrder: z.string().min(1).max(255),
  total: z.coerce.number().min(1),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

const OrderForm: React.FC<OrderFormProps> = ({ initialData }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: initialData ? {
      ...initialData,
      customer: {
        ...initialData.customer,
        email: initialData.customer?.email || '',
        status: initialData.customer?.status || '',
        roles: Array.isArray(initialData.customer?.roles) ? initialData.customer.roles : [],
      },
      statusOrder: initialData.statusOrder || '',
      total: initialData.total || 0,
    } : {
      customer: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        subscribedId: '',
        status: '',
        roles: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      statusOrder: '',
      total: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  })

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  const onSubmit = async (values: z.infer<typeof orderSchema>) => {
    try {
      setLoading(true);
      const res = (initialData)
        ? await orderService.editOrder(initialData?.id || '', values)
        : await orderService.postOrder(values);

      if (res?.data) {
        setLoading(false);
        toast.success(`Service category ${initialData?.id ? "updated" : "created"}`);
        setTimeout(() => {
          router.push(`/${Schemas.CATEGORY}`);
        }, 1200);
      }
    } catch (err) {
      setLoading(false);
      console.log("[service-category_POST]", err);
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    loading ? <Loader /> : (
      <div className="p-10">
        {/* {initialData ? (
          <div className="flex items-center justify-between">
            <p className="text-heading2-bold">Edit Order</p>
            <Delete id={initialData?.id || ''} item={Schemas.CATEGORY} />
          </div>
        ) : (
          <h2 className="text-4xl text-blue-prime font-bold pb-4 border-b-2 border-black">Create Order</h2>
        )} */}
        {
          initialData && (
            <div className="flex items-center justify-between">
              <p className="text-heading2-bold">Edit Order</p>
              <Delete id={initialData?.id || ''} item={Schemas.ORDER} />
            </div>
          )
        }
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-10">
            <FormField
              control={form.control}
              name="customer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer email: {field.value?.email}</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="statusOrder"
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
                        StatusOrder && Object.values(StatusOrder).map((status, index) => (
                          <option key={index} value={status}>{status}</option>
                        ))
                      }
                    </select>
                  </FormControl>
                  <FormMessage className="text-red-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="total"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Total"
                      {...field}
                      onKeyDown={handleKeyPress}
                    />
                  </FormControl>
                  <FormMessage className="text-red-1" />
                </FormItem>
              )}
            />
            <div className="flex gap-10">
              <Button type="submit" className="bg-black text-white">
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

export default OrderForm;