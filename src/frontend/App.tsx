import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Tours from "./src/pages/Tours";
import 'bootstrap/dist/css/bootstrap.min.css';
import TourDetails from "./src/pages/TourDetails";
import { AuthProvider } from "./src/contexts/authContext";
import PrivateRoute from "./src/components/privateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tourDetails/:id" element={<TourDetails />} />
          <Route 
            path="/tours" 
            element={
              <PrivateRoute>
                <Tours />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
