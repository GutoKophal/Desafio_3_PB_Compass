import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import NumberInfo from '../components/stats/Stats';
import Search from '../components/search/Search';
import TopBar from '../components/topBar/TopBar';
import PopularTours from '../components/mostPopularCarousel/PopularTours';
import CarouselTitle from '../components/mostPopularTitle/CarouselTitle';
import TourTypeCarousel from '../components/tourTypeCarousel/TourTypeCarousel';
import TourTypeTitle from '../components/tourTypeTitle/TourTypeTitle';
import TestimonialSection from '../components/testimonial/TestimonialSection';
import LatestTravelGuide from '../components/latestTravelGuide/LatestTravelGuide';
import IconSection from '../components/iconSection/IconSection';
import QualityStandards from '../components/qualityStandarts/QualityStandards';
import TopAttractions from '../components/topAttractions/TopAttractions';

const Home = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <Search 
                titleAbove="Save 15% off in World Wide"
                title="Travel & Adventures"
                description="Find awesome hotel, tour, car and activities in London"
                backgroundImageUrl="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Faurora.jpg?alt=media&token=fc7232f8-e743-4279-a2b0-b1a4ca552d03"
            />
            <CarouselTitle subtitle="Tours" mainTitle="Most Popular Tours" />
            <PopularTours />
            <NumberInfo />
            <TopAttractions />
            <QualityStandards />
            <TourTypeTitle />
            <TourTypeCarousel />
            <TestimonialSection />
            <LatestTravelGuide />
            <IconSection />
            <Footer />
        </div>
    );
};

export default Home;
