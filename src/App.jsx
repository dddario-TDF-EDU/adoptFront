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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/ActionProvider';

function App() {

  const [chatOpen, setChatOpen] = useState(false);

  return (
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <div className='chat-contain' >
        {chatOpen && (
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText='Adopt-chat'
        placeholderText='Escribe tu mensaje'
      />
      )}
        <button 
        className='btn-chat'
        onClick={()=> setChatOpen((prev) => !prev)}>
        <FontAwesomeIcon icon={faHeadset} />
        </button>
        </div>
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