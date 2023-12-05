import SelectedOptions from '../SelectedOptions/SelectedOptions';
import TextInput from '../../Inputs/TextInput/TextInput';
import CheckboxInput from '../../Inputs/CheckboxInput/CheckboxInput';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { getValidateForm, getValidateEmail, getValidatePhone } from '../../../Services/getValidForm.mjs';
import { postComplaint } from './Services/postComplaint.mjs';
import { useForm } from '../../../hooks/useForm';
import './complaintsForm.css';
import { useState } from 'react';


const options = ['Mascota perdida', 'Mascota encontrada', 'Maltrato', 'Otro'];
const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

const ComplaintsForm = () => {

    const [succces, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData, handleInputChange, handleCheckboxChange, reset] = useForm({
        typeOfComplaint: '',
        zipCode: '',
        email: '',
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
            const { petSpecie, petName, petAge, ...newFormData } = formData;
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
  
    const isValidForm = () =>
        getValidateForm(formData) &&
        getValidateEmail(formData.email) &&
        getValidatePhone(formData.phoneNumber);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValidForm()) {
            setIsLoading(true);
            try {
                await postComplaint(formData);
                setIsLoading(false);
                setSuccess(true);
                reset()
            } catch (error) {
                setIsLoading(false);
                setError(true)
                console.error(error);
            }
        }
        else {
            alert('Faltan campos por completar.')
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
                    />
                    <TextInput className='complaints'
                        label="Telefono de contacto"
                        placeholder="02901-xxxxxx "
                        type="number"
                        id="phone-complaint-input"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        isUseRef={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                    <TextInput className='complaints'
                        label="Email"
                        placeholder="mail@ejemplo.com"
                        type="email"
                        id="email-complaint-input"
                        name="email"
                        value={formData.email}
                        isUseRef={formData.email}
                        onChange={handleInputChange}
                    />
                    <input className='file-input' id='file-input' type="file" accept='image/*' capture='camera' onChange={handleFileChange} />
                    <label className='file-input-label' htmlFor='file-input' >
                        <span>{<AddPhotoAlternateIcon />}</span>
                        {formData.file ? formData.file.name : 'Adjuntar imagen'}
                    </label>
                </div>
                <div className='adjunts-group'>
                    <label className='textarea-label' htmlFor="textarea-complaint">
                        Por favor ingrese una descripción detallada del hecho.</label>
                    <textarea className='textarea-complaint'
                        name='complaintDescription' value={formData.complaintDescription} id='textarea-complaint' cols="30" rows="10" onChange={handleInputChange}></textarea>
                    <div className='terms-group'>
                        <CheckboxInput
                            className='complaints'
                            type='checkbox'
                            name='termsInput'
                            value={formData.termsInput}
                            labelContent={<> Acepto los <a className='terms-link' href=''>Terminos y condiciones</a> </>}
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
                        : <p> Cargando denuncia... </p>
                    }
                </div>
            </form>
            <div className='form-sent-message'>
                {(!isLoading && succces) ? (<p className='success-post'> Su denuncia se cargo correctamente. </p>) : null}
                {(!isLoading && error) ? (<p className='error-post'>Ocurrio un error, intente nuevamente por favor.</p>) : null}
            </div>
        </>
    )
}
export default ComplaintsForm;