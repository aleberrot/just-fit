import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export default function MujerPage(){
    const mujerProducts = (products as Product[]).filter(
        (product) => product.category === "mujer"
    );

    return (
        <main>
            <h2 className="section-title">Ropa Mujer</h2>
            <div className="product-grid">
                {mujerProducts.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </main>
    );
}
