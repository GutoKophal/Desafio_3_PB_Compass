import { Container, Row, Col} from 'react-bootstrap'
import Filter from '../components/filter/Filter'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Search from '../components/search/Search'
import TopBar from '../components/topBar/TopBar'
import Card from '../components/mostPopularCard/Card'
import { getTours } from '../services/api'
import Pagination from '../components/pagination/Pagination'
import usePagination from '../hooks/usePagination'

const Tours: React.FC = () => {
    const { currentItems: currentTours, currentPage, totalItems, paginate } = usePagination(9, getTours);

    return (
        <div>
            <TopBar />
            <Header />
            <Search 
                titleAbove=""
                title="Tour Package"
                description="Home / Tour Package"
                backgroundImageUrl="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fcamp.jpg?alt=media&token=1279c603-93ae-41b7-bfae-0c2efbd2e58a"
            />
            <Container className="tours-container">
                <Row>
                    <Col md={3}>
                        <Filter />
                    </Col>
                    <Col md={9}>
                        <Row>
                            {currentTours.map((tour) => (
                                <Col key={tour.id} md={4}>
                                    <Card 
                                        image_url={tour.image_url}
                                        city={tour.city}
                                        country={tour.country}
                                        title={tour.name}
                                        averageReview={tour.averageReview}
                                        duration={tour.duration}
                                        price={tour.price}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <Pagination
                            totalItems={totalItems}
                            itemsPerPage={9}
                            currentPage={currentPage}
                            paginate={paginate}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Tours;