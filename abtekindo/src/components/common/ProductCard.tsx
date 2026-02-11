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
      className="bg-white rounded-xl border-2 border-gray-200 p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-[#1e3a8a]"
    >
      <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="flex gap-2 mb-3">
        <span className="px-3 py-1 bg-[#1e3a8a] text-white text-xs rounded-full font-semibold">
          {product.type}
        </span>
        <span className="px-3 py-1 bg-[#1e3a8a] text-white text-xs rounded-full font-semibold">
          SPLIT
        </span>
      </div>
      
      <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[3rem]">
        {product.name}
      </h3>
      
      <p className="text-xl font-bold text-[#1e3a8a]">
        IDR {product.price.toLocaleString('id-ID')}
      </p>
    </div>
  );
};