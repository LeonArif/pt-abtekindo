import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ProductDetail } from '../components/sections/ProductDetail';
import { products } from '../data/products';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return <Navigate to="/products" replace />;
  }
  
  return (
    <div className="min-h-screen">
      <ProductDetail product={product} />
    </div>
  );
};