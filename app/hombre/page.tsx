import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export default function HombrePage(){
    const hombreProducts = (products as Product[]).filter(
        (product) => product.category === "hombre"
    );

    return (
        <main>
            <h2 className="section-title">Ropa Hombre</h2>
            <div className="product-grid">
                {hombreProducts.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </main>
    );
}