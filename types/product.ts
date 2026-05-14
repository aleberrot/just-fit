export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
  category: 'hombre' | 'mujer';
  description?: string;
}