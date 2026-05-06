import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps{
    product: Product
}

export default function ProductCard({product}: ProductCardProps){
    return (
            <div className="product-card">
                <Image src={product.image} alt={product.alt} className="product-img"/>
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button className="btn-add">Añadir al carrito</button>
            </div>

    );
}