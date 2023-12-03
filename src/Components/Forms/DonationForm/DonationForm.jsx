import TextInput from '../../Inputs/TextInput/TextInput';
import SelectedOptions from '../SelectedOptions/SelectedOptions';
import { getValidateEmail, getValidateForm, getValidatePhone } from '../../../Services/getValidForm.mjs';
import { useState } from 'react';
import './donationForm.css';

const options = ['Alimento', 'Hogar transitorio', 'Medicamento', 'Otro'];

export const DonationForm = () => {

  const [formData, setFormData] = useState({
    donationOption: '',
    email: '',
    phoneNumber: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleOptionSelected = (option) => {
    setFormData({
      ...formData,
      donationOption: option
    });
  };

  const isValidForm = (formData) => {
    if (getValidateForm(formData) &&
      getValidateEmail(formData.email) &&
      getValidatePhone(formData.phoneNumber)) {
      console.log('Formulario enviado')
    } else {
      console.log('No se envio')
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isValidForm(formData);
  };

  return (
    <>
      <form className='donation-form' onSubmit={handleSubmit}>
        <SelectedOptions optionTitle={'Quiero colaborar con'} optionsElements={options} isSelected={(option) => handleOptionSelected(option)} />
        <TextInput
          className='donation'
          label="Telefono de contacto"
          placeholder="02901-xxxxxx "
          type="number"
          id="phone-donation-input"
          name="phoneNumber"
          value={formData.phoneNumber}
          isUseRef={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <TextInput
          className='donation'
          label="Email"
          placeholder="mail@ejemplo.com"
          type="email"
          id="email-donation-input"
          name="email"
          value={formData.email}
          isUseRef={formData.email}
          onChange={handleInputChange}
        />
        <div className="btn-form-donation">
          <button className="donation-form-btn" type='submit'>Enviar</button>
        </div>
      </form>
    </>
  )
}

export default DonationForm;