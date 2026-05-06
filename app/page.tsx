import Image from "next/image";
import polera from "@/public/img/polera.jpeg";
import buzo from "@/public/img/buzo.jpeg";
import short from "@/public/img/short.jpeg";

export default function Home() {
  return (
      <main>
        <h2 className="section-title">Novedades</h2>
        <div className="product-grid">
            <div className="product-card">
                <Image src={polera} alt="Camiseta Slim Fit" className="product-img" width={500} height={200}/>
                <h3 className="product-name">Polera Slim Fit</h3>
                <p className="price">$25.00</p>
                <button className="btn-add">Añadir al carrito</button>
            </div>
            <div className="product-card">
              <Image src={short} alt="Shorts Classic" className="product-img" width={500} height={200}/>
                <h3 className="product-name">Shorts Classic</h3>
                <p className="price">$45.00</p>
                <button className="btn-add">Añadir al carrito</button>
            </div>
            <div className="product-card">
              <Image src={buzo} alt="Buzo Urbana" className="product-img" width={500} height={200}/>
                <h3 className="product-name">Buzo Urbana</h3>
                <p className="price">$70.00</p>
                <button className="btn-add">Añadir al carrito</button>
            </div>
        </div>
      </main>
  );
}
