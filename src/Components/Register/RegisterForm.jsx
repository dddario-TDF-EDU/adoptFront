/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Modal } from '../Modales/Modal'
import { ContentForm } from './ContentForm/ContentForm'
import { registerServices } from '../../auth/services/authServices.mjs';
import { getValidateForm, getValidateEmail, getValidatePhone } from '../../Services/getValidForm.mjs';
import './registerForm.css'
import { useForm } from '../../hooks/useForm';


const validMessage = <>
  <p> Por favor, revisá tu bandeja de entrada y sigue las instrucciones para confirmar tu dirección de correo electrónico.</p>
  <p className='adopt-greetin'>Equipo de Adopciones.</p>
  <p className='signature'>Adoptapp </p>
</>;

const errorMessage = <>
  <h2>Ocurrió un error inesperado, intente nuevamente por favor.</h2>
</>;
const emptyForm = <>
  <h2>Por favor rellene todos los campos para continuar.</h2>
</>
export const RegisterForm = ({ closeModal1 }) => {

  const [wasSent, setWasSend] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [registerMessage, setRegisterMessage] = useState('');
  const [formData, handleRegisterChange] = useForm({
    name: '',
    surname: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    zipCode: '',
    hasPet: '',
    livingPlace: '',
    availableAge: '',
    termsAndCondition : '',
  });

  const isValidForm = () => {
    console.log(formData)
    if (getValidateForm(formData)) {
      if (!getValidateEmail(formData.email)) {
        setRegisterMessage('Formato de email incorrecto, por favor ingrese un email válido.');
        setIsOpenModal2(true);
      }
      else if (!getValidatePhone(formData.phoneNumber)) {
        setRegisterMessage('Formato de teléfono incorrecto, por favor ingrese un número válido.');
        setIsOpenModal2(true);
      }
      else {
        sendForm();
      }
    } else {
      setRegisterMessage(emptyForm);
      setIsOpenModal2(true);
    }
  };

  const sendForm = async () => {
    try {
      await registerServices(formData);
      setRegisterMessage(validMessage);
      setIsOpenModal2(true);
      setWasSend(true);
      console.log(formData)
    } catch (error) {
      setRegisterMessage(errorMessage);
      setIsOpenModal2(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isValidForm();
  };

  return (
    <>
      <form className='register-form' onSubmit={handleSubmit}>
        <ContentForm formData={formData} handleRegisterChange={handleRegisterChange} />
        <div className="btn-form-div">
          <button className='btn-register-form'>Registrarse</button>
        </div>
      </form>
      <Modal modalNumber="2"
        isOpen={isOpenModal2}
        closeModal={() => { setIsOpenModal2(false), wasSent ? closeModal1() : setIsOpenModal2(false) }} >
        <div className='register-message'>{registerMessage}</div>
      </Modal>
    </>
  );
}

