"use client"
import Loader from "@/components/admin/common/Loader"
import OrderForm from "@/components/admin/order/OrderForm"
import orderService, { IOrder } from "@/services/admin/order.service"
import { useEffect, useState } from "react"

const EditOrder = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState<IOrder | null>(null)

  const getOrderById = async () => {
    try {
      const res = await orderService.getOrderById(params.id)
      if (res) {
        setOrders(res)
        setLoading(false)
      }
    } catch (err) {
      console.log("[Orders_GET]", err)
    }
  }

  useEffect(() => {
    getOrderById()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading ? <Loader /> : (
    <OrderForm initialData={orders} />
  )
}

export default EditOrder