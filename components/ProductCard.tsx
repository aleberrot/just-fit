import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps{
    product: Product
}

export default function ProductCard({product}: ProductCardProps){
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
                <p className="price">${product.price}</p>
                <button className="btn-add">Añadir al carrito</button>
            </div>

    );
}
