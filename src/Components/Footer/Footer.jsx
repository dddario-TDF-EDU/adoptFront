import ScrollToTop from 'react-scroll-to-top';
import TextInput from '../Inputs/TextInput/TextInput';
import { useState } from 'react';
import './footer.css'

const Footer = () => {
    const [formData, setFormData] = useState({ email: '' })

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = () => {
        console.log('Formulario enviado')
    }
    return (
        <footer className='footer' >
            <ScrollToTop smooth top={500} width='30px' height='30px'/>
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className='contact-title'>Contacto</h3>
                    <ul className='contact-list'>
                        <li className='contact-value'>adoptapp_tdf@outlook.com</li>
                        <li className='contact-item'>Atención Telefónica:</li>
                        <li className='contact-value'>2901-512505</li>
                    </ul>
                </div>
                <div className="footer-section" id='footer'>
                    <h3>Nuestras redes sociales</h3>
                    <ul className="icon-list">
                        <li><i className="fa-brands fa-whatsapp"></i></li>
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <form className="form-newsletter" onSubmit={handleSubmit}>
                        < TextInput
                            id='newsletter'
                            label='Newsletter'
                            type='email'
                            placeholder='Ingrese su email'
                            name='email'
                            value={formData.email}
                            isUseRef={formData.email}
                            onChange={handleInputChange}
                            className='newsletter'  />
                        <button type='submit' className='newsletter-btn'>Enviar</button>
                    </form>
                </div>
            </div>
            <div className="copyright">
                <p>2023 AdoptApp - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
