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
      className={`px-6 py-2.5 rounded-full border-2 font-medium transition-all duration-200 ${
        isActive
          ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]'
          : 'bg-white text-gray-700 border-gray-300 hover:border-[#1e3a8a]'
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};