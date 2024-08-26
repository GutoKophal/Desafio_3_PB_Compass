import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import NumberInfo from '../components/stats/Stats';
import Search from '../components/search/Search';
import TopBar from '../components/topBar/TopBar';

const Home = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <Search />
            <NumberInfo />


            {/* <Footer /> */}
        </div>
    )
}

export default Home;
