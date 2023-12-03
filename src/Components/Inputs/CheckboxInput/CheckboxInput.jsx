/* eslint-disable react/prop-types */
import './checkboxInput.css';

const CheckboxInput = ({ name, className, value, id, labelContent, type, checked, onChange }) => {

    return (
        <>
            <label className={`${className} checkbox-label`} htmlFor={id}>
                <input className={`${className} checkbox`} type={type} id={`${name}${value}`} checked={checked} value={value} name={name} onChange={onChange} />
                {labelContent}
            </label>
        </>
    )
}
export default CheckboxInput;