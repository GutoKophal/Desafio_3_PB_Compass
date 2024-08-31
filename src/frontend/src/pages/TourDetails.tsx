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

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const numericId = parseInt(id!, 10);
        const [tours, types, fetchedReviews] = await Promise.all([
          getTours(),
          getTypes(),
          getReviewsByTourId(numericId)
        ]);
        const selectedTour = tours.find((t: any) => t.id === numericId);
        setTour(selectedTour);
        setTourTypes(types);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Failed to fetch tour details:', error);
      }
    };

    fetchTourData();
  }, [id]);

  const handleNewReview = (newReview: any) => {
    setReviews([...reviews, newReview]);
  };

  if (!tour) {
    return <div>Loading...</div>;
  }

  const tourType = tourTypes.find(type => type.id === tour.type_id)?.name || "Unknown Type";

  return (
    <div>
      <TopBar />
      <Header />
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '20px' }}>
        <div style={{ flex: 1 }}>
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
            reviews={`${tour.averageReview} stars`}
            rating={tour.averageReview}
            overview={`This tour takes you to an incredible experience in ${tour.city}. Ideal for adventurers and beach lovers.`}
          />
        </div>
        <Booking />
      </div>
      <AverageReviewsComponent reviews={reviews} />
      <div>
        {reviews.map(review => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      <ReviewForm tourId={tour.id} onReviewSubmitted={handleNewReview} />
      <CarouselTitle subtitle="" mainTitle="You may also like..." />
      <PopularTours />
      <Footer />
    </div>
  );
};

export default TourDetails;
