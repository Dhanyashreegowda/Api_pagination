import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  // Calculate the range of visible pages
  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        &larr; Prev
      </button>

      {visiblePages.map((page) => (
        <button 
          key={page} 
          onClick={() => handlePageChange(page)} 
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}

      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next &rarr;
      </button>
    </div>
  );
};

export default Pagination;
