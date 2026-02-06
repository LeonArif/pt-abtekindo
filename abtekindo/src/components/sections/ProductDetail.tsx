import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import type { Product } from '../../types';
import { QuantitySelector } from '../common/QuantitySelector';
import { Button } from '../common/Button';
import { RelatedProducts } from './RelatedProducts';
import { products } from '../../data/products';
import { openWhatsApp, createProductWhatsAppMessage } from '../../utils/whatsapp';
import { contactInfo } from '../../data/contacts';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<'product' | 'package'>('product');
  
  const handleOrder = () => {
    const message = createProductWhatsAppMessage(product.name, quantity, selectedPackage);
    openWhatsApp(contactInfo.whatsapp, message);
  };
  
  return (
    <div className="container mx-auto px-6 py-8">
      <button
        onClick={() => navigate('/products')}
        className="flex items-center gap-2 text-blue-900 font-semibold mb-6 hover:text-blue-700 transition-colors"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>Kembali</span>
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-96 object-contain"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-900 mb-6">
            IDR {product.price.toLocaleString('id-ID')}
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Paket Produk + Pemasangan</h3>
            
            <div className="space-y-3">
              <button
                onClick={() => setSelectedPackage('package')}
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  selectedPackage === 'package'
                    ? 'border-blue-900 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-900'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Paket Lengkap</span>
                  <span className="text-xl font-bold text-blue-900">
                    IDR {product.packagePrice.toLocaleString('id-ID')}
                  </span>
                </div>
              </button>
              
              <button
                onClick={() => setSelectedPackage('product')}
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  selectedPackage === 'product'
                    ? 'border-blue-900 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-900'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Produk Saja</span>
                  <span className="text-xl font-bold text-blue-900">
                    IDR {product.price.toLocaleString('id-ID')}
                  </span>
                </div>
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Jumlah</h3>
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity(quantity + 1)}
              onDecrease={() => setQuantity(quantity - 1)}
            />
          </div>
          
          <Button
            onClick={handleOrder}
            variant="primary"
            size="lg"
            className="w-full"
          >
            Pesan Sekarang
          </Button>
        </div>
      </div>
      
      <RelatedProducts products={products} currentProductId={product.id} />
    </div>
  );
};