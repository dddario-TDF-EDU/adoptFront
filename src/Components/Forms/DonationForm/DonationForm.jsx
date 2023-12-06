import TextInput from '../../Inputs/TextInput/TextInput';
import SelectedOptions from '../SelectedOptions/SelectedOptions';

import { getValidateForm, getValidatePhone } from '../../../Services/validateForms.mjs';
import { useState } from 'react';

import { useForm } from '../../../hooks/useForm';

import './donationForm.css';
import Modal from '../../Modales/Modal';

const options = ['Alimento', 'Hogar transitorio', 'Medicamento', 'Otro'];

export const DonationForm = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData, handleInputChange, , reset] = useForm({
    donationOption: '',
    phoneNumber: ''
  });

  const handleOptionSelected = (option) => {
    setFormData({
      ...formData,
      donationOption: option
    });
  };

  const isValidForm = (formData) => {
    if (getValidateForm(formData) &&
      getValidatePhone(formData.phoneNumber)) {
        setMessage('Gracias por colaborar con nuestra causa, nos comunicaremos para finalizar la operación.')
        setIsOpenModal(true);
    } else {
      setMessage('Por favor completa el formulario antes de enviarlo.')
        setIsOpenModal(true);
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
          isRequired={true}
        />
        <div className="btn-form-donation">
          <button className="donation-form-btn" type='submit'>Enviar</button>
        </div>
      </form>
      <Modal isOpen={isOpenModal}
        modalNumber={2}
        closeModal={() => { setIsOpenModal(false) }} >
        <p className='complaint-modal-message'>{message}</p>
      </Modal>
    </>
  )
}

export default DonationForm;