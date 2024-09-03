import React, { useEffect, useState } from "react";
import "./avaregeReviewsComponent.css";

interface ReviewData {
  services: number;
  locations: number;
  amenities: number;
  price_review: number;
  comfort: number;
}

interface AverageReviewsComponentProps {
  reviews: ReviewData[];
}

const AverageReviewsComponent: React.FC<AverageReviewsComponentProps> = ({
  reviews,
}) => {
  const [averageRatings, setAverageRatings] = useState<ReviewData>({
    services: 0,
    locations: 0,
    amenities: 0,
    price_review: 0,
    comfort: 0,
  });

  useEffect(() => {
    if (reviews.length === 0) return;

    const totalReviews = reviews.length;

    const totals = reviews.reduce(
      (acc, review) => ({
        services: acc.services + review.services,
        locations: acc.locations + review.locations,
        amenities: acc.amenities + review.amenities,
        price_review: acc.price_review + review.price_review,
        comfort: acc.comfort + review.comfort,
      }),
      { services: 0, locations: 0, amenities: 0, price_review: 0, comfort: 0 }
    );

    setAverageRatings({
      services: totals.services / totalReviews,
      locations: totals.locations / totalReviews,
      amenities: totals.amenities / totalReviews,
      price_review: totals.price_review / totalReviews,
      comfort: totals.comfort / totalReviews,
    });
  }, [reviews]);

  return (
    <div className="average-reviews">
      <div className="average-box">
        <span className="average-number">
          {(
            Object.values(averageRatings).reduce((acc, val) => acc + val, 0) / 5
          ).toFixed(1)}
        </span>
        <span className="average-text">Overall Rating</span>
      </div>
      <div className="review-bars">
        <div className="review-bar">
          <span className="label">Services</span>
          <div className="bar-container">
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${(averageRatings.services / 5) * 100}%` }}
              ></div>
            </div>
            <span className="value">{averageRatings.services.toFixed(1)}</span>
          </div>
        </div>
        <div className="review-bar">
          <span className="label">Locations</span>
          <div className="bar-container">
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${(averageRatings.locations / 5) * 100}%` }}
              ></div>
            </div>
            <span className="value">{averageRatings.locations.toFixed(1)}</span>
          </div>
        </div>
        <div className="review-bar">
          <span className="label">Amenities</span>
          <div className="bar-container">
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${(averageRatings.amenities / 5) * 100}%` }}
              ></div>
            </div>
            <span className="value">{averageRatings.amenities.toFixed(1)}</span>
          </div>
        </div>
        <div className="review-bar">
          <span className="label">Prices</span>
          <div className="bar-container">
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${(averageRatings.price_review / 5) * 100}%` }}
              ></div>
            </div>
            <span className="value">
              {averageRatings.price_review.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="review-bar">
          <span className="label">Comfort</span>
          <div className="bar-container">
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${(averageRatings.comfort / 5) * 100}%` }}
              ></div>
            </div>
            <span className="value">{averageRatings.comfort.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageReviewsComponent;
