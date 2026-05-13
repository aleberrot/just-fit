import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export default function HombrePage(){
    const Products = (products as Product[])

    return (
        <main>
            <h2 className="section-title">Todos</h2>
            <div className="product-grid">
                {Products.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </main>
    );
}