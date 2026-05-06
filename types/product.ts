export interface Product {
  name: string;
  price: number;
  image: string;
  alt: string;
  category: 'hombre' | 'mujer';
  description?: string;
}