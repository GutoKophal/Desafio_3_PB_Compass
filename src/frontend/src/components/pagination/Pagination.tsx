import React from 'react';
import './pagination.css'

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
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
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(currentPage + 1)}>
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
