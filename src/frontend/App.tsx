import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Tours from "./src/pages/Tours";
import 'bootstrap/dist/css/bootstrap.min.css';
import TourDetails from "./src/pages/TourDetails";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tourDetails/:id" element={<TourDetails />} />
        </Routes>
      </Router>
  );
}

export default App;
