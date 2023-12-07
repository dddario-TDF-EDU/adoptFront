import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import AdoptPage from './Pages/Adoption/AdoptionPage';
import ComplaintsPage from './Pages/Complaints/ComplaintsPage';
import InformationPage from './Pages/Information/InformationPage';
import DonationPage from './Pages/Donations/DonationPage';
import { ResetPasswordWindow } from './utils/ResetPassword/ResetPasswordWindow';

import { config } from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/ActionProvider';

import Chatbot from 'react-chatbot-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

import {  AuthProvider } from './auth/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState} from 'react';

import './App.css';
import './Chatbot/styles.css';
import 'react-chatbot-kit/build/main.css';

function App() {

  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      <div className='chat-contain' >
        {chatOpen && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            headerText={'Adopt-Chat'}
            placeholderText={'Escribe tu consulta aqui'}
          />
        )}
        <button
          className='btn-chat'
          onClick={() => setChatOpen((prev) => !prev)}>
          <FontAwesomeIcon icon={faHeadset} />
        </button>
      </div>

      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/adopciones/mascotas' element={<AdoptPage />} />
            <Route path='/denuncias' element={<ComplaintsPage />} />
            <Route path='/informacion' element={<InformationPage />} />
            <Route path='/donaciones' element={<DonationPage />} />
            <Route path='/user/password/edit' element={<ResetPasswordWindow />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;