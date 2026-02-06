import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
}) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="w-10 h-10 bg-gray-200 rounded-lg font-bold text-xl hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        −
      </button>
      <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
      <button
        onClick={onIncrease}
        className="w-10 h-10 bg-gray-200 rounded-lg font-bold text-xl hover:bg-gray-300 transition-colors"
      >
        +
      </button>
    </div>
  );
};