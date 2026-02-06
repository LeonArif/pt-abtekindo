import React from 'react';
import type { Product } from '../../types';
import { useNavigate } from 'react-router-dom';

interface RelatedProductsProps {
  products: Product[];
  currentProductId: string;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  currentProductId,
}) => {
  const navigate = useNavigate();
  
  const relatedProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 5);
  
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">Produk Serupa</h3>
      
      <div className="flex gap-4 overflow-x-auto pb-4">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex-shrink-0 w-48 bg-white rounded-lg border-2 border-gray-200 p-4 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            
            <h4 className="font-semibold text-sm text-gray-800 mb-2 line-clamp-2">
              {product.name}
            </h4>
            
            <p className="text-sm font-bold text-blue-900">
              IDR {product.price.toLocaleString('id-ID')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};