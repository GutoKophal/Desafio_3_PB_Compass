import React, { useState, useEffect } from 'react';
import './filter.css';

interface FilterProps {
  onFilterChange: (filters: { 
    searchTerm: string;
    categories: string[], 
    countries: { [continent: string]: string[] }, 
    priceRange: [number, number], 
    reviews: number[] 
  }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<{ [continent: string]: string[] }>({
    Africa: [],
    Americas: [],
    Asia: [],
    Europe: [],
    Oceania: []
  });
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [selectedReviews, setSelectedReviews] = useState<number[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onFilterChange({ 
      searchTerm: newSearchTerm, 
      categories: selectedCategories, 
      countries: selectedCountries, 
      priceRange, 
      reviews: selectedReviews 
    });
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(updatedCategories);
    onFilterChange({ 
      searchTerm, 
      categories: updatedCategories, 
      countries: selectedCountries, 
      priceRange, 
      reviews: selectedReviews 
    });
  };

  const handleCountryChange = (continent: string, country: string) => {
    const updatedCountries = {
      ...selectedCountries,
      [continent]: selectedCountries[continent].includes(country)
        ? selectedCountries[continent].filter(c => c !== country)
        : [...selectedCountries[continent], country]
    };

    setSelectedCountries(updatedCountries);
    onFilterChange({ 
      searchTerm, 
      categories: selectedCategories, 
      countries: updatedCountries, 
      priceRange, 
      reviews: selectedReviews 
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceRange = [0, +e.target.value] as [number, number];
    setPriceRange(newPriceRange);
    onFilterChange({ 
      searchTerm, 
      categories: selectedCategories, 
      countries: selectedCountries, 
      priceRange: newPriceRange, 
      reviews: selectedReviews 
    });
  };

  const handleReviewChange = (review: number) => {
    const updatedReviews = selectedReviews.includes(review)
      ? selectedReviews.filter(r => r !== review)
      : [...selectedReviews, review];
    
    setSelectedReviews(updatedReviews);
    onFilterChange({ 
      searchTerm, 
      categories: selectedCategories, 
      countries: selectedCountries, 
      priceRange, 
      reviews: updatedReviews 
    });
  };

  useEffect(() => {
    const rangeInput = document.querySelector('.price-range input[type="range"]') as HTMLInputElement;

    if (rangeInput) {
      rangeInput.addEventListener('input', (e: Event) => {
        const target = e.currentTarget as HTMLInputElement;
        const value = ((parseFloat(target.value) - parseFloat(target.min)) / (parseFloat(target.max) - parseFloat(target.min))) * 100;
        target.style.setProperty('--range-progress', `${value}%`);
      });
    }
  }, []);

  return (
    <div className="filter-card">
      <div className="filter-section">
        <h4>Search</h4>
        <input 
          type="text" 
          placeholder="Type anything..." 
          value={searchTerm} 
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-range">
          <input 
            type="range" 
            min="0" 
            max="3000" 
            value={priceRange[1]} 
            onChange={handlePriceChange} 
          />
          <div className="price-range-values">
            <span className="min-price">${priceRange[0].toFixed(2)}</span>
            <span className="max-price">${priceRange[1].toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Categories</h4>
        <ul>
          <li><input type="checkbox" onChange={() => handleCategoryChange('1')} /> Beach</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('2')} /> Mountain</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('3')} /> Countryside</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('4')} /> Desert</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('5')} /> City</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('6')} /> Forest</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('7')} /> Cultural</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('8')} /> Adventure</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('9')} /> Historical</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('10')} /> Cruise</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('11')} /> Wildlife</li>
          <li><input type="checkbox" onChange={() => handleCategoryChange('12')} /> Island</li>
        </ul>
      </div>

      <div className="filter-section">
        <h4>Destinations</h4>
        <h5>Africa</h5>
        <ul>
          <li><input type="checkbox" onChange={() => handleCountryChange('Africa', 'Morocco')} /> Morocco</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Africa', 'Kenya')} /> Kenya</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Africa', 'South Africa')} /> South Africa</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Africa', 'Egypt')} /> Egypt</li>
        </ul>
        <h5>Americas</h5>
        <ul>
          <li><input type="checkbox" onChange={() => handleCountryChange('Americas', 'Brazil')} /> Brazil</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Americas', 'USA')} /> USA</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Americas', 'Canada')} /> Canada</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Americas', 'Peru')} /> Peru</li>
        </ul>
        <h5>Asia</h5>
        <ul>
          <li><input type="checkbox" onChange={() => handleCountryChange('Asia', 'Japan')} /> Japan</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Asia', 'Thailand')} /> Thailand</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Asia', 'China')} /> China</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Asia', 'India')} /> India</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Asia', 'Nepal')} /> Nepal</li>
        </ul>
        <h5>Europe</h5>
        <ul>
          <li><input type="checkbox" onChange={() => handleCountryChange('Europe', 'France')} /> France</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Europe', 'Italy')} /> Italy</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Europe', 'Greece')} /> Greece</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Europe', 'Spain')} /> Spain</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Europe', 'UK')} /> UK</li>
          <li><input type="checkbox" onChange={() => handleCountryChange('Europe', 'Switzerland')} /> Switzerland</li>
        </ul>
        <h5>Oceania</h5>
        <ul>
          <li><input type="checkbox" onChange={() => handleCountryChange('Oceania', 'Australia')} /> Australia</li>
        </ul>
      </div>
      <div className="filter-section">
        <h4>Reviews</h4>
        <ul>
          <li><input type="checkbox" onChange={() => handleReviewChange(5)} /> 5 Stars</li>
          <li><input type="checkbox" onChange={() => handleReviewChange(4)} /> 4 Stars & Up</li>
          <li><input type="checkbox" onChange={() => handleReviewChange(3)} /> 3 Stars & Up</li>
          <li><input type="checkbox" onChange={() => handleReviewChange(2)} /> 2 Stars & Up</li>
          <li><input type="checkbox" onChange={() => handleReviewChange(1)} /> 1 Star & Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
