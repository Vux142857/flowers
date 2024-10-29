import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";
import { IProduct } from "@/services/client/product.service";

export interface CartItem {
  product: IProduct;
  quantity: number;
  subTotal?: number;
}

interface CartStore {
  cartItems: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (idToRemove: string) => void;
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  clearCart: () => void;
  calculateTotal: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      total: 0,

      calculateTotal: () => {
        const total = get().cartItems.reduce(
          (acc, item) => acc + (item.subTotal || 0),
          0
        );
        set({ total });
      },

      addItem: (data: CartItem) => {
        const { product, quantity } = data;
        const currentItems = get().cartItems;
        const isExisting = currentItems.find(
          (cartItem) => cartItem.product.id === product.id
        );

        if (isExisting) {
          return toast("Item already in cart");
        }
        console.log("product", product);

        const subTotal = product.price * quantity;

        set({ cartItems: [...currentItems, { product, quantity, subTotal }] });
        toast.success("Item added to cart", { icon: "🛒" });

        get().calculateTotal();
      },

      removeItem: (idToRemove: string) => {
        const newCartItems = get().cartItems.filter(
          (cartItem) => cartItem.product.id !== idToRemove
        );
        set({ cartItems: newCartItems });
        toast.success("Item removed from cart");

        get().calculateTotal();
      },

      increaseQuantity: (idToIncrease: string) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.product.id === idToIncrease
            ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              subTotal: cartItem.product.price * (cartItem.quantity + 1),
            }
            : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success("Item quantity increased");

        get().calculateTotal();
      },

      decreaseQuantity: (idToDecrease: string) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.product.id === idToDecrease && cartItem.quantity > 0
            ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              subTotal: cartItem.product.price * (cartItem.quantity - 1),
            }
            : cartItem
        );
        set({ cartItems: newCartItems });
        const currentItem = newCartItems.find((cartItem) => cartItem.product.id === idToDecrease)
        if (currentItem?.quantity === 0) {
          get().removeItem(idToDecrease);
        } else {
          toast.success("Item quantity decreased");
        }
        get().calculateTotal();
      },

      clearCart: () => {
        set({ cartItems: [] });
        toast.success("Cart cleared");

        get().calculateTotal();
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
