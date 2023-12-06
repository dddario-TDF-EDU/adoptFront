/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Modal } from '../Modales/Modal'
import { ContentForm } from './ContentForm/ContentForm'
import { registerServices } from '../../Services/authServices.mjs';
import { getValidateForm, getValidateEmail, getValidatePhone, getValidatePassword } from '../../Services/validateForms.mjs';

import { useForm } from '../../hooks/useForm';
import { useAsync } from '../../hooks/useAsync';

import './registerForm.css'
import { CircularProgress } from '@mui/joy';

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
  const { isLoading, success, error, execute } = useAsync(registerServices);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [registerMessage, setRegisterMessage] = useState('');
  const [formData, , handleRegisterChange, handleCheckboxChange] = useForm({
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
    termsAndCondition: '',
  });

  const isValidForm = () => {

    if (getValidateForm(formData)) {
      if (!getValidateEmail(formData.email)) {
        setRegisterMessage('Formato de email incorrecto, por favor ingrese un email válido.');
        setIsOpenModal2(true);
      }
      else if (!getValidatePhone(formData.phoneNumber)) {
        setRegisterMessage('Formato de teléfono incorrecto, por favor ingrese un número válido.');
        setIsOpenModal2(true);
      }
      else if (!getValidatePassword(formData.password)) {
        setRegisterMessage('Por favor ingrese una contraseña válida.');
        setIsOpenModal2(true);
      }
      else {
        execute(formData);
      }
    } else {
      setRegisterMessage(emptyForm);
      setIsOpenModal2(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isValidForm();
  };

  useEffect(() => {
    if(success) {
      setRegisterMessage(validMessage)
      setIsOpenModal2(true);
    }
  }, [ success])

  return (
    <>
      <form className='register-form' onSubmit={handleSubmit}>
        <ContentForm formData={formData} handleRegisterChange={handleRegisterChange} handleCheckboxChange={handleCheckboxChange} />
        <div className="btn-form-div">
          { !isLoading ?
          <button className='btn-register-form' >Registrarse</button> : 
          <CircularProgress color='success'/> }
          {
            (!isLoading && error ) ? <p className='register-error-message'>{errorMessage}</p> : null
          }
        </div>
      </form>
      <Modal modalNumber="2"
        isOpen={isOpenModal2}
        closeModal={() => { setIsOpenModal2(false), success ? closeModal1() : setIsOpenModal2(false) }} >
        <div className='register-message'>{registerMessage}</div>
      </Modal>
    </>
  );
}

