export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  type: string; // "1 PK", "SPLIT", etc
  price: number;
  packagePrice: number; // with installation
  image: string;
  description?: string;
  specifications?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface ContactInfo {
  whatsapp: string;
  instagram: string;
  address: string;
  email: string;
  phone: string;
}