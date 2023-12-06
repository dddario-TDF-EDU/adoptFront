/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { getValidateEmail, getValidatePassword, getValidatePhone } from '../../../Services/validateForms.mjs';
import './textInput.css'

const TextInput = ({ id, className, label, type, placeholder, name, value, onChange, isUseRef, children, isRequired }) => {

    let inputClass = 'form-input';

    const refInput = useRef(null);
    if (isUseRef) {
        if (refInput.current.name === 'email') {
            if (getValidateEmail(refInput.current.value)) {
                inputClass += ' validValue';
            } else {
                inputClass += ' invalidValue';
            }
        }
        else if (refInput.current.name === 'password') {
            if (getValidatePassword(refInput.current.value)) {
                inputClass += ' validValue';
            } else {
                inputClass += ' invalidValue';
            }
        }
        else if (refInput.current.name === "phoneNumber") {
            if (getValidatePhone(refInput.current.value)) {
                inputClass += ' validValue';
            } else {
                inputClass += ' invalidValue';
            }
        }
    }


    return (
        <>
            <div className={`${className} grupoInput`}>
                <label className="label" htmlFor={id}>{label}
                    {isRequired ? <span className='obligatory-field'>*</span> : null}
                </label>
                <input className={inputClass} type={type} placeholder={placeholder} id={id} name={name} value={value} onChange={onChange} ref={refInput} />
                {children}
            </div>
        </>
    );
}

export default TextInput;