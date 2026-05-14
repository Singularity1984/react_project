import React from 'react';

const Pagination = ({ currentPage, totalPages, onGoToPage, onPrevPage, onNextPage }) => {
  if (totalPages <= 1) return null;
  
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <div className="container-1440 pagination-wrapper">
      <div className="pagination">
        <button onClick={onPrevPage} className="pagination-arrow" disabled={currentPage === 1}>
          ‹
        </button>
        
        {pageNumbers.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="pagination-dots">…</span>
            ) : (
              <button
                onClick={() => onGoToPage(page)}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
        
        <button onClick={onNextPage} className="pagination-arrow" disabled={currentPage === totalPages}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Pagination;