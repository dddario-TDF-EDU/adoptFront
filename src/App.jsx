import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import AdoptPage from './Pages/Adoption/AdoptionPage';
import ComplaintsPage from './Pages/Complaints/ComplaintsPage';
import InformationPage from './Pages/Information/InformationPage';
import DonationPage from './Pages/Donations/DonationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './auth/AuthContext';


function App() {

  return (
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/adopciones/mascotas' element={<AdoptPage />}></Route>
          <Route path='/denuncias' element={<ComplaintsPage />}></Route>
          <Route path='/informacion' element={<InformationPage />}></Route>
          <Route path='/donaciones' element={<DonationPage />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;