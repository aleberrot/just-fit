"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import AddToCartButton from "@/components/AddToCartButton";

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
    return (
            <div className="product-card">
                <Link href={`/productos/${product.id}`} className="product-link">
                    <Image
                        src={product.image}
                        alt={product.alt}
                        className="product-img"
                        width={500}
                        height={300}
                    />
                    <h3 className="product-name">{product.name}</h3>
                </Link>
                <p className="price">{formatPrice(product.price)}</p>
                <AddToCartButton product={product} />
            </div>

    );
}
