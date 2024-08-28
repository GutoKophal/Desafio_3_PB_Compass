import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";

interface SearchProps {
  titleAbove?: string;
  title?: string;
  description?: string;
  backgroundImageUrl?: string;
}

const Search: React.FC<SearchProps> = ({
  titleAbove = "Save 15% off in World Wide",
  title = "Travel & Adventures",
  description = "Find awesome hotel, tour, car and activities in London",
  backgroundImageUrl = "https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fnight.jpg?alt=media&token=521f435d-8865-409d-a5fc-6951ee6d3177",
}) => {
  return (
    <div 
      className="background-image" 
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="text-overlay">
        <div className="title-container">
          <h3 className="text-above">{titleAbove}</h3>
          <h1 className="title-search">{title}</h1>
          <p className="text-search">{description}</p>
        </div>

        <div className="search-form-container">
          <form className="d-flex align-items-center justify-content-between">
            <div className="form-group me-3">
              <label htmlFor="destination" className="form-label">
                Destination
              </label>
              <input
                type="text"
                className="form-control"
                id="destination"
                placeholder="Where to go?"
              />
            </div>
            <div className="form-group me-3">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <input
                type="text"
                className="form-control"
                id="type"
                placeholder="Activity"
              />
            </div>
            <div className="form-group me-3">
              <label htmlFor="when" className="form-label">
                When
              </label>
              <input
                type="text"
                className="form-control"
                id="when"
                placeholder="Date"
              />
            </div>
            <div className="form-group me-3">
              <label htmlFor="guests" className="form-label">
                Guests
              </label>
              <input
                type="text"
                className="form-control"
                id="guests"
                placeholder="0"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
