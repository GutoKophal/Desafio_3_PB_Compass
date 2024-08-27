import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";

const Search: React.FC = () => {
  return (
    <div className="background-image">
      <div className="text-overlay">
        <div className="title-container">
          <h3 className="text-above">Save 15% off in World Wide</h3>
          <h1 className="title-search">Travel & Adventures</h1>
          <p className="text-search">
            Find awesome hotel, tour, car and activities in London
          </p>
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
