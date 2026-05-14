"use client";

import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);

export default function Home() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <main className="cart-page">
      <h2 className="section-title">Carrito</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito esta vacio.</p>
      ) : (
        <>
          <section className="cart-list">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="cart-item-img"
                  width={120}
                  height={120}
                />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{formatPrice(item.price)}</p>
                </div>

                <div className="cart-quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <p className="cart-subtotal">
                  {formatPrice(item.price * item.quantity)}
                </p>

                <button
                  className="cart-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </article>
            ))}
          </section>

          <section className="cart-summary">
            <p>Productos: {totalItems}</p>
            <h3>Total: {formatPrice(totalPrice)}</h3>
            <button className="btn-add" onClick={clearCart}>
              Vaciar carrito
            </button>
          </section>
        </>
      )}
    </main>
  );
}
