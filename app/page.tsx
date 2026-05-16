import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export default function Home() {
  const novedades = (products as Product[]).slice(0, 6);

  return (
      <main>
        <h2 className="section-title">Novedades</h2>
        <div className="product-grid">
            {novedades.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </main>
  );
}
