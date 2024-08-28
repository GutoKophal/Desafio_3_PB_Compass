import React, { useEffect } from 'react';
import './filter.css';

const Filter: React.FC = () => {

  // Hook personalizado para atualizar o progresso do range
  useEffect(() => {
    const rangeInput = document.querySelector('.price-range input[type="range"]') as HTMLInputElement | null;

    const updateRange = () => {
      if (rangeInput) {
        const value = ((+rangeInput.value - +rangeInput.min) / (+rangeInput.max - +rangeInput.min)) * 100;
        rangeInput.style.setProperty('--range-progress', `${value}%`);
      }
    };

    if (rangeInput) {
      rangeInput.addEventListener('input', updateRange);
      updateRange(); // Initialize with the correct value
    }

    return () => {
      if (rangeInput) {
        rangeInput.removeEventListener('input', updateRange);
      }
    };
  }, []);

  return (
    <div className="filter-card">
      <div className="filter-section">
        <h4>Search</h4>
        <input type="text" placeholder="Type anything..." className="search-input" />
      </div>

      <div className="filter-section">
        <h4>Filter By</h4>
        <div className="price-range">
          <input type="range" min="0" max="150" />
          <div className="price-range-values">
            <span className="min-price">$0.00</span>
            <span className="max-price">$150.00</span>
          </div>
        </div>
        <button className="submit-button">Submit</button>
      </div>

      <div className="filter-section">
        <h4>Categories</h4>
        <ul>
          <li><input type="checkbox" /> Adventure</li>
          <li><input type="checkbox" /> Beaches</li>
          <li><input type="checkbox" /> Boat Tours</li>
          <li><input type="checkbox" /> City Tours</li>
          <li><input type="checkbox" /> Food</li>
          <li><input type="checkbox" /> Hiking</li>
          <li><input type="checkbox" /> Honeymoon</li>
          <li><input type="checkbox" /> Museum Tours</li>
        </ul>
      </div>

      <div className="filter-section">
        <h4>Destinations</h4>
        <h5>Africa</h5>
        <ul>
          <li><input type="checkbox" /> Morocco</li>
          <li><input type="checkbox" /> Tanzania</li>
        </ul>
        <h5>Americas</h5>
        <ul>
          <li><input type="checkbox" /> Argentina</li>
          <li><input type="checkbox" /> Canada</li>
          <li><input type="checkbox" /> Colombia</li>
          <li><input type="checkbox" /> Costa Rica</li>
        </ul>
        <h5>Asia</h5>
        <ul>
          <li><input type="checkbox" /> Cambodia</li>
          <li><input type="checkbox" /> Japan</li>
          <li><input type="checkbox" /> Nepal</li>
          <li><input type="checkbox" /> Thailand</li>
          <li><input type="checkbox" /> Viet Nam</li>
        </ul>
        <h5>Europe</h5>
        <ul>
          <li><input type="checkbox" /> France</li>
          <li><input type="checkbox" /> Greece</li>
        </ul>
      </div>

      <div className="filter-section">
        <h4>Reviews</h4>
        <ul>
          <li><input type="checkbox" /> 5 Stars</li>
          <li><input type="checkbox" /> 4 Stars & Up</li>
          <li><input type="checkbox" /> 3 Stars & Up</li>
          <li><input type="checkbox" /> 2 Stars & Up</li>
          <li><input type="checkbox" /> 1 Stars & Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
