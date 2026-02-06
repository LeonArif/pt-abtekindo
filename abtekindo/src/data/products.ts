import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Panasonic CS-PU5VKP',
    brand: 'Panasonic',
    category: 'wall-mounted-split',
    type: '1 PK',
    price: 1000000,
    packagePrice: 1500000,
    image: '/assets/images/panasonic-1.jpg',
    description: 'AC Split 1 PK dengan teknologi Inverter',
    specifications: [
      'Kapasitas: 1 PK',
      'Daya: 900W',
      'Inverter Technology',
      'Low Watt',
    ],
  },
  // Tambahkan produk lain di sini
];