import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import AddToCartButton from "@/components/AddToCartButton";
import { Product } from "@/types/product";

const allProducts = products as Product[];

const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
    }).format(price);

export function generateStaticParams() {
    return allProducts.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = allProducts.find((item) => item.id === id);

    if (!product) {
        notFound();
    }

    return (
        <main className="product-detail">
            <Link href="/productos" className="product-back-link">
                Volver al catalogo
            </Link>

            <section className="product-detail-content">
                <div className="product-detail-image-wrap">
                    <Image
                        src={product.image}
                        alt={product.alt}
                        className="product-detail-image"
                        width={700}
                        height={700}
                        priority
                    />
                </div>

                <div className="product-detail-info">
                    <p className="product-detail-category">
                        {product.category === "mujer" ? "Mujer" : "Hombre"}
                    </p>
                    <h1>{product.name}</h1>
                    <p className="product-detail-price">
                        {formatPrice(product.price)}
                    </p>
                    {product.description && (
                        <p className="product-detail-description">
                            {product.description}
                        </p>
                    )}
                    <AddToCartButton product={product} className="btn-add product-detail-button" />
                </div>
            </section>
        </main>
    );
}
