import SelectedOptions from '../SelectedOptions/SelectedOptions';
import TextInput from '../../Inputs/TextInput/TextInput';
import CheckboxInput from '../../Inputs/CheckboxInput/CheckboxInput';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { getValidateComplaintForm, getValidatePhone } from '../../../Services/validateForms.mjs';
import { postComplaint } from '../../../Services/complaintService.mjs';

import { useState } from 'react';

import { Modal } from '../../Modales/Modal';
import { useAsync } from '../../../hooks/useAsync';
import { useForm } from '../../../hooks/useForm';

import './complaintsForm.css';
import { CircularProgress } from '@mui/joy';

const options = ['Mascota perdida', 'Mascota encontrada', 'Maltrato', 'Otro'];
const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

const ComplaintsForm = () => {

    const { isLoading, success, error, execute } = useAsync(postComplaint)
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [formData, setFormData, handleInputChange, handleCheckboxChange, reset] = useForm({
        typeOfComplaint: '',
        zipCode: '',
        phoneNumber: '',
        file: '',
        complaintDescription: '',
        termsInput: false,
    });

    const handleOptionSelected = (option) => {
        if (option === 'Mascota perdida' || option === 'Mascota encontrada') {
            setFormData({
                ...formData,
                typeOfComplaint: option,
                petSpecie: '',
                petName: '',
                petAge: '',
                showComplaint: false,
            });
        } else {
            // eslint-disable-next-line no-unused-vars
            const { showComplaint, petSpecie, petName, petAge, ...newFormData } = formData;
            setFormData({
                ...newFormData,
                typeOfComplaint: option,
            });
        }
    };

    const handleFileChange = (event) => {

        const imgFile = event.target.files[0];
        if (allowedExtensions.includes(imgFile.name.split('.').pop().toLowerCase())) {
            setFormData({
                ...formData,
                file: imgFile
            })
        } else {
            alert('Ingrese archivo .png .jpg .jpeg .gif')
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!getValidatePhone(formData.phoneNumber)) {
            setIsValid('Por favor ingrese un teléfono valido para continuar.');
            setIsOpenModal(true);
        }

        if (getValidateComplaintForm(formData)) {
            execute(formData);
        }
        else {
            setIsValid('Por favor complete los campos obligatorios para continuar.')
            setIsOpenModal(true);
        }
    };
   
    return (
        <>
            <form id='complaint-form' className='complaints-form' onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className='information-inputs'>
                    <SelectedOptions optionTitle={'Quiero denunciar'} optionsElements={options} isSelected={(option) => handleOptionSelected(option)} />
                    <div className={`loss-pet-container ${formData.typeOfComplaint == 'Mascota perdida' || formData.typeOfComplaint == 'Mascota encontrada' ? 'show-container' : ''}`}>
                        {(formData.typeOfComplaint == 'Mascota perdida' || formData.typeOfComplaint == 'Mascota encontrada') ? <>
                            <TextInput className='complaints'
                                label='Nombre de la mascota'
                                placeholder='Nombre'
                                type='text'
                                id='petName-complaint-input'
                                name='petName'
                                value={formData.petName}
                                onChange={handleInputChange}
                            />
                            <TextInput className='complaints'
                                label="Edad de la mascota"
                                placeholder="Años"
                                type="number"
                                id="petAge-complaint-input"
                                name="petAge"
                                value={formData.petAge}
                                onChange={handleInputChange}
                            />
                            <TextInput className='complaints'
                                label="Especie"
                                placeholder="Perro / Gato / Otro"
                                type="text"
                                id="petSpecie-complaint-input"
                                name="petSpecie"
                                value={formData.petSpecie}
                                onChange={handleInputChange}
                                isRequired={true}
                            />
                        </>
                            : null}
                    </div>
                    <TextInput className='complaints'
                        label='Codigo postal'
                        placeholder='CP'
                        type='number'
                        id='zip-complaint-input'
                        name='zipCode'
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        isRequired={true}
                    />
                    <TextInput className='complaints'
                        label="Telefono al cual podamos contactarte de ser necesario"
                        placeholder="02901-xxxxxx "
                        type="number"
                        id="phone-complaint-input"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        isUseRef={formData.phoneNumber}
                        onChange={handleInputChange}
                        isRequired={true}
                    />
                    <input className='file-input' id='file-input' type="file" accept='image/*' capture='camera' onChange={handleFileChange} />
                    <label className='file-input-label' htmlFor='file-input' >
                        <span>{<AddPhotoAlternateIcon />} </span>
                        <span className='obligatory-field'>*</span>
                        {formData.file ? formData.file.name : 'Adjuntar imagen'}
                    </label>
                </div>
                <div className='adjunts-group'>
                    <label className='textarea-label' htmlFor="textarea-complaint">
                        Por favor ingrese una descripción detallada del hecho.
                        <span className='obligatory-field'>*
                        </span>
                    </label>
                    <textarea className='textarea-complaint'
                        name='complaintDescription' value={formData.complaintDescription} id='textarea-complaint' cols="30" rows="10" onChange={handleInputChange}>
                    </textarea>
                    <div className='terms-group'>
                        <CheckboxInput
                            className='complaints'
                            type='checkbox'
                            name='termsInput'
                            value={formData.termsInput}
                            labelContent={
                                <> Acepto los <a className='terms-link' href=''>Terminos y condiciones</a> </>
                            }
                            onChange={handleCheckboxChange}
                        />
                        {(formData.typeOfComplaint == 'Mascota perdida' || formData.typeOfComplaint == 'Mascota encontrada') ?
                            <CheckboxInput
                                className='complaints'
                                type='checkbox'
                                name={'showComplaint'}
                                value={formData.showComplaint}
                                labelContent='Deseo que mi publicación sea compartida automáticamente en el sitio junto con mis datos de contacto.'
                                onChange={handleCheckboxChange}
                            /> : false}
                    </div>
                </div>
                <div className='complaint-btn-content'>
                    {!isLoading ?
                        <button className='complaint-form-btn' type='submit'>Enviar</button>
                        : <CircularProgress color='success'/>
                    }
                </div>
            </form>
            <div className='form-sent-message'>
                {
                    (!isLoading && error) ?
                        (<p className='error-post'>Ocurrio un error, intente nuevamente por favor.</p>) :
                        (!isLoading && success) ?
                            (<p className='success-post'> Su denuncia se cargo correctamente. </p>) : null
                }
            </div>
            <Modal isOpen={isOpenModal}
                modalNumber={2}
                closeModal={() => { setIsOpenModal(false) }} >
                <p className='complaint-modal-message'>{isValid}</p>
            </Modal>
        </>
    )
}
export default ComplaintsForm;