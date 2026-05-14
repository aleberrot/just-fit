"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps{
    product: Product
}

const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
    }).format(price);

export default function ProductCard({product}: ProductCardProps){
    const addToCart = useCartStore((state) => state.addToCart);

    return (
            <div className="product-card">
                <Image
                    src={product.image}
                    alt={product.alt}
                    className="product-img"
                    width={500}
                    height={300}
                />
                <h3 className="product-name">{product.name}</h3>
                <p className="price">{formatPrice(product.price)}</p>
                <button className="btn-add" onClick={() => addToCart(product)}>
                    Añadir al carrito
                </button>
            </div>

    );
}
