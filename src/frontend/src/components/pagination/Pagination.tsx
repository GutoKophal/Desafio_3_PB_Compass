import React from 'react';
import './pagination.css';

interface PaginationProps {
  currentPage: number;
  paginate: (pageNumber: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, paginate, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(currentPage - 1)}>
            &lt;
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(currentPage + 1)}>
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
