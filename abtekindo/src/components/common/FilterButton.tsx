import React from 'react';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full border-2 font-medium transition-all duration-200 ${
        isActive
          ? 'bg-blue-900 text-white border-blue-900'
          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-900'
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};