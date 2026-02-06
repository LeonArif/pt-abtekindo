import React, { useState, useMemo } from 'react';
import { ProductCard } from '../common/ProductCard';
import { SearchBar } from '../common/SearchBar';
import { FilterButton } from '../common/FilterButton';
import { products } from '../../data/products';
import { categories, brands } from '../../data/categories';

export const ProductList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
      
      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchQuery, selectedCategory, selectedBrand]);
  
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Tipe AC</h3>
          <div className="flex flex-wrap gap-3">
            <FilterButton
              label="Semua"
              isActive={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
            />
            {categories.map((cat) => (
              <FilterButton
                key={cat.id}
                label={cat.name}
                isActive={selectedCategory === cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Merk</h3>
          <div className="flex flex-wrap gap-3">
            <FilterButton
              label="Semua"
              isActive={selectedBrand === 'all'}
              onClick={() => setSelectedBrand('all')}
            />
            {brands.map((brand) => (
              <FilterButton
                key={brand}
                label={brand}
                isActive={selectedBrand === brand}
                onClick={() => setSelectedBrand(brand)}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Hasil ({filteredProducts.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">Produk tidak ditemukan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};