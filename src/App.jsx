import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import AdoptPage from './Pages/Adoption/AdoptionPage';
import ComplaintsPage from './Pages/Complaints/ComplaintsPage';
import InformationPage from './Pages/Information/InformationPage';
import DonationPage from './Pages/Donations/DonationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './auth/AuthContext';


function App() {

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adopciones/mascotas' element={<AdoptPage />} />
          <Route path='/denuncias' element={<ComplaintsPage />} />
          <Route path='/informacion' element={<InformationPage />} />
          <Route path='/donaciones' element={<DonationPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;