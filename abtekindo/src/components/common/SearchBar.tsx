import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Cari AC Sesuai Dengan Keperluanmu',
}) => {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-6 py-3 pr-14 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-900 transition-colors"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};