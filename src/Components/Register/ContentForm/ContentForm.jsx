/* eslint-disable react/prop-types */
import { useState } from "react"
import TextInput from "../../Inputs/TextInput/TextInput"
import InputRadioGroup from "../../Inputs/InputRadioGroup/InputRadioGroup"
import showPass from '../../../assets/eye-password/show-password.svg'
import hidePass from '../../../assets/eye-password/hide-password.svg'
import CheckboxInput from "../../Inputs/CheckboxInput/CheckboxInput"

const locationOptions = [
    { labelContent: 'Ushuaia', value: '9410' },
    { labelContent: 'Tolhuin', value: '9412' },
    { labelContent: 'Rio Grande', value: '9420' },
];

const livingPlaceOptions = [
    { labelContent: 'Casa', value: 'casa' },
    { labelContent: 'Departamento', value: 'departamento' },
];

const hasPetOptions = [
    { labelContent: 'Si', value: '1' },
    { labelContent: 'No', value: '0' },
];


export const ContentForm = ({ formData, handleRegisterChange }) => {

    const [isShowPass, setIsShowPass] = useState(false);

    const handleTooglePass = () => {
        setIsShowPass(!isShowPass)
    }

    return (
        <>
            <div className='register-form-inputs'>
                <TextInput
                    className='register'
                    label="Nombre"
                    placeholder="Nombre Completo"
                    id="nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleRegisterChange}
                />
                <TextInput
                    className='register'
                    label="Apellido"
                    placeholder="Apellido"
                    id="apellido"
                    name="surname"
                    value={formData.surname}
                    onChange={handleRegisterChange}
                />
                <TextInput
                    className='register'
                    label="Domicilio"
                    placeholder="Ingrese su domicilio"
                    id="domicilio"
                    name="address"
                    value={formData.address}
                    onChange={handleRegisterChange}
                />
                <TextInput
                    className={`register`}
                    label="Email"
                    placeholder="email@correo.com"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    isUseRef={formData.email}
                    onChange={handleRegisterChange}
                />
                <TextInput
                    className={`register`}
                    label="Contraseña"
                    placeholder="Contraseña"
                    type={isShowPass ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    isUseRef={formData.password}
                    onChange={handleRegisterChange}
                >
                    <button type='button' className='button-pass' onClick={handleTooglePass}>
                        <img src={isShowPass ? showPass : hidePass} alt="" />
                    </button>
                    <ul className="password-info-list">
                        <li>La contraseña debe contener :</li>
                        <li className="password-info-item">8 - 15 caracteres</li>
                        <li className="password-info-item">Al menos una mayuscula</li>
                        <li className="password-info-item">Al menos una minuscula</li>
                        <li className="password-info-item">Al menos un caracter especial</li>
                        <li className="password-info-item">Al menos un numero</li>
                    </ul>
                </TextInput>
                <TextInput
                    className={`register`}
                    label="Numero de telefono"
                    placeholder="2901xxxxxx"
                    type="number"
                    id="telefono"
                    name="phoneNumber"
                    min="8"
                    value={formData.phoneNumber}
                    isUseRef={formData.phoneNumber}
                    onChange={handleRegisterChange}
                />
            </div >
            <div className='radio-input-form'>
                <InputRadioGroup
                    title="Localidad"
                    options={locationOptions}
                    name="zipCode"
                    onChange={handleRegisterChange}
                />
                <InputRadioGroup
                    title="¿Dónde vive?"
                    options={livingPlaceOptions}
                    name="livingPlace"
                    onChange={handleRegisterChange}
                />
                <InputRadioGroup
                    title="¿Tiene mascota?"
                    options={hasPetOptions}
                    name="hasPet"
                    onChange={handleRegisterChange}
                />
            </div>
            <div className='checkbox-input-form'>
                <CheckboxInput
                    labelContent='Soy mayor de 21 años'
                    type="checkbox"
                    name="available-age"
                    value={formData.availableAge}
                    onChange={handleRegisterChange}
                />
                <CheckboxInput
                    labelContent='Acepto los terminos y condiciones'
                    type="checkbox"
                    name="terms-condition"
                    value={formData.termsAndCondition}
                    onChange={handleRegisterChange}
                />
            </div>
        </>
    )
}