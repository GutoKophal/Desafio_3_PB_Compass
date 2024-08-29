import AverageReviewsComponent from '../components/avaregeReviewsComponent/AvaregeReviewsComponent'
import Booking from '../components/booking/Booking'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import ReviewCard from '../components/reviewCard/ReviewCard'
import ReviewForm from '../components/reviewForm/ReviewForm'
import TopBar from '../components/topBar/TopBar'
import TourDetailsComponent from '../components/tourDetailsComponent/TourDetailsComponent'

const TourDetails = () => {
    return (
        <div >
            <TopBar />
            <Header />
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '20px' }}>
                <div style={{ flex: 1 }} >
                    <TourDetailsComponent/>
                </div>
                <Booking />
            </div>
            <AverageReviewsComponent />
            <ReviewCard />
            <ReviewForm />
            <Footer />
        </div>
    )
}

export default TourDetails