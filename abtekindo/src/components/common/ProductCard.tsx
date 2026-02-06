import React from 'react';
import type { Product } from '../../types';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-lg border-2 border-gray-200 p-4 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="flex gap-2 mb-2">
        <span className="px-3 py-1 bg-blue-900 text-white text-xs rounded-full font-semibold">
          {product.type}
        </span>
        <span className="px-3 py-1 bg-blue-900 text-white text-xs rounded-full font-semibold">
          SPLIT
        </span>
      </div>
      
      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
        {product.name}
      </h3>
      
      <p className="text-lg font-bold text-blue-900">
        IDR {product.price.toLocaleString('id-ID')}
      </p>
    </div>
  );
};