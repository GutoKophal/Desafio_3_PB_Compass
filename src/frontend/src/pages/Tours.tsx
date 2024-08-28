import Filter from '../components/filter/Filter'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Search from '../components/search/Search'
import TopBar from '../components/topBar/TopBar'

const Tours = () => {
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
            <Filter />
            <Footer />
        </div>
    )
}

export default Tours
