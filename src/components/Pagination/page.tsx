import React from 'react';
import { PaginationProps } from '../types/page';

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, totalEntries }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-2 py-1 mx-1 w-8 h-8 text-center rounded-full font-bold transition-colors ${
            i === currentPage
              ? 'bg-primary text-white' 
              : 'text-primary hover:bg-primary hover:text-white' 
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 w-8 h-8 text-center rounded-full font-bold text-primary hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
      >
        &lt;
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 w-8 h-8 text-center rounded-full font-bold text-primary hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
