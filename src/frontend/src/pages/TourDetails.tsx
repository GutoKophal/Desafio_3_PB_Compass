import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TourDetailsComponent from '../components/tourDetailsComponent/TourDetailsComponent';
import Booking from '../components/booking/Booking';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import TopBar from '../components/topBar/TopBar';
import AverageReviewsComponent from '../components/avaregeReviewsComponent/AvaregeReviewsComponent';
import ReviewCard from '../components/reviewCard/ReviewCard';
import ReviewForm from '../components/reviewForm/ReviewForm';
import PopularTours from '../components/mostPopularCarousel/PopularTours';
import { getTours, getTypes, getReviewsByTourId } from '../services/api';
import CarouselTitle from '../components/mostPopularTitle/CarouselTitle';

const TourDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<any>(null);
  const [tourTypes, setTourTypes] = useState<{ id: number; name: string }[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [overallRating, setOverallRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const numericId = parseInt(id!, 10);
        const [tours, types, fetchedReviews] = await Promise.all([
          getTours(),
          getTypes(),
          getReviewsByTourId(numericId),
        ]);
        const selectedTour = tours.find((t: any) => t.id === numericId);
        setTour(selectedTour);
        setTourTypes(types);
        setReviews(fetchedReviews);
        calculateOverallRating(fetchedReviews);
      } catch (error) {
        console.error('Failed to fetch tour details:', error);
      }
    };

    fetchTourData();
  }, [id]);

  const calculateOverallRating = (reviewsData: any[]) => {
    if (reviewsData.length === 0) {
      setOverallRating(null);
      return;
    }
    const totalRating = reviewsData.reduce((acc, review) => {
      const avgReview =
        (review.services +
          review.locations +
          review.amenities +
          review.price_review +
          review.comfort) /
        5;
      return acc + avgReview;
    }, 0);
    setOverallRating(parseFloat((totalRating / reviewsData.length).toFixed(1)));
  };

  const handleNewReview = (newReview: any) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    calculateOverallRating(updatedReviews);
  };

  if (!tour) {
    return <div>Loading...</div>;
  }

  const tourType =
    tourTypes.find((type) => type.id === tour.type_id)?.name || 'Unknown Type';

  return (
    <div>
      <TopBar />
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <div style={{ flex: 1, marginRight: '20px' }}>
          <TourDetailsComponent
            image={tour.image_url}
            location={`${tour.city}, ${tour.country}`}
            latitude={tour.latitude}
            longitude={tour.longitude}
            title={tour.name}
            price={`$${tour.price}`}
            duration={`${tour.duration} days`}
            maxPeople={tour.max_people}
            minAge={`${tour.minAge}+`}
            tourType={tourType}
            overallRating={overallRating ?? 0}
            reviewCount={reviews.length}
            overview={`Embark on an unforgettable journey through the vibrant streets of ${tour.city}, a destination where tradition meets modernity. Whether you're drawn to its rich historical landmarks, breathtaking natural scenery, or dynamic cultural scene, ${tour.city} promises an experience like no other. Delight in the local cuisine, engage with friendly locals, and explore hidden gems at every turn. From tranquil escapes to exhilarating adventures, ${tour.city} is the perfect backdrop for creating cherished memories that will last a lifetime. Whether it's your first visit or a return trip, ${tour.city} always has something new to offer, making it a must-see for travelers of all kinds.`}
          />

          <AverageReviewsComponent reviews={reviews} />
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewCard
                key={`${review.user_name}-${review.date}`}
                {...review}
                totalReviews={reviews.length}
              />
            ))
          ) : (
            <p>No reviews yet. Be the first to review this tour!</p>
          )}
          <ReviewForm tourId={tour.id} onReviewSubmitted={handleNewReview} />
        </div>
        <div style={{ width: '450px' }}>
          <Booking price={tour.price} />
        </div>
      </div>
      <CarouselTitle subtitle="" mainTitle="You may also like..." />
      <PopularTours />
      <Footer />
    </div>
  );
};

export default TourDetails;
