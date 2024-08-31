import { Container, Row, Col } from 'react-bootstrap';
import Filter from '../components/filter/Filter';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import TopBar from '../components/topBar/TopBar';
import Card from '../components/mostPopularCard/Card';
import Pagination from '../components/pagination/Pagination';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import to access query parameters
import { getTours } from '../services/api';

interface Tour {
  id: number;
  image_url: string;
  city: string;
  country: string;
  name: string;
  averageReview: number;
  duration: number;
  price: number;
  type_id: number;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Tours: React.FC = () => {
  const query = useQuery();
  
  const [filters, setFilters] = useState<{ 
    searchTerm: string;
    categories: string[], 
    countries: { [continent: string]: string[] }, 
    priceRange: [number, number], 
    reviews: number[] 
  }>({
    searchTerm: query.get("destination") || "",
    categories: query.get("type") ? [query.get("type")!] : [],
    countries: {
      Africa: [],
      Americas: [],
      Asia: [],
      Europe: [],
      Oceania: []
    },
    priceRange: [0, 3000],
    reviews: []
  });

  const [allTours, setAllTours] = useState<Tour[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchTours = async () => {
      const tours = await getTours();
      setAllTours(tours);
    };

    fetchTours();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let tours = allTours;

      if (filters.searchTerm) {
        tours = tours.filter(tour => tour.name.toLowerCase().includes(filters.searchTerm.toLowerCase()));
      }

      if (filters.categories.length > 0) {
        tours = tours.filter(tour => filters.categories.includes(tour.type_id.toString()));
      }

      const selectedCountries = Object.values(filters.countries).flat();
      if (selectedCountries.length > 0) {
        tours = tours.filter(tour => selectedCountries.includes(tour.country));
      }

      tours = tours.filter(tour => 
        tour.price >= filters.priceRange[0] && 
        tour.price <= filters.priceRange[1]
      );

      if (filters.reviews.length > 0) {
        const minReview = Math.min(...filters.reviews);
        tours = tours.filter(tour => Math.round(tour.averageReview) >= minReview);
      }

      setFilteredTours(tours);
      setCurrentPage(1); // Reset to first page on filter change
    };

    applyFilters();
  }, [filters, allTours]);

  const handleSearch = (searchParams: { destination: string; type: string; when: string; guests: string }) => {
    setFilters({
      ...filters,
      searchTerm: searchParams.destination,
      categories: searchParams.type ? [searchParams.type] : filters.categories,
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTours = filteredTours.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <TopBar />
      <Header />
      <Search 
        titleAbove=""
        title="Tour Package"
        description="Home / Tour Package"
        backgroundImageUrl="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fcamp.jpg?alt=media&token=1279c603-93ae-41b7-bfae-0c2efbd2e58a"
        onSearch={handleSearch} // Pass the handleSearch function to the Search component
      />
      <Container className="tours-container">
        <Row>
          <Col md={3}>
            <Filter onFilterChange={setFilters} />
          </Col>
          <Col md={9}>
            <Row>
              {currentTours.map((tour) => (
                <Col key={tour.id} md={4}>
                  <Card 
                    id={tour.id} // Pass the id here
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
              currentPage={currentPage}
              paginate={paginate}
              totalPages={totalPages}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Tours;
