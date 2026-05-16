"use client";

import { Product } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";

interface AddToCartButtonProps {
    product: Product;
    className?: string;
}

export default function AddToCartButton({
    product,
    className = "btn-add",
}: AddToCartButtonProps) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <button className={className} onClick={() => addToCart(product)}>
            Añadir al carrito
        </button>
    );
}
