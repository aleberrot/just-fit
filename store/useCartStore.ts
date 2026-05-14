import { create } from "zustand";
import { Product } from "@/types/product";
import { persist } from "zustand/middleware";

export interface CartItem extends Product{
    quantity: number;
}

interface CartState{
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) =>
                set((state) => {
                    const existingProduct = state.cart.find(
                        (item) => item.id === product.id
                    );

                    if (existingProduct) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }

                    return {
                        cart: [...state.cart, { ...product, quantity: 1 }],
                    };
                }),
            removeFromCart: (productId) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== productId),
                })),
            increaseQuantity: (productId) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })),
            decreaseQuantity: (productId) =>
                set((state) => ({
                    cart: state.cart
                        .map((item) =>
                            item.id === productId
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        )
                        .filter((item) => item.quantity > 0),
                })),
            clearCart: () => set({ cart: [] }),
            getTotalItems: () =>
                get().cart.reduce((total, item) => total + item.quantity, 0),
            getTotalPrice: () =>
                get().cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                ),
        }),
        {
            name: "justfit-cart",
        }
    )
);
