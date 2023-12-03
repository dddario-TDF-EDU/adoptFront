/* eslint-disable react/prop-types */
import InputsBox from '../InputsBox/InputsBox';
import CheckboxInput from '../CheckboxInput/CheckboxInput';

const InputRadioGroup = ({ title, options, name, onChange }) => {
    return (
        <InputsBox title={title}>
            {options.map(option => (
                <CheckboxInput
                    key={option.value}
                    type="radio"
                    labelContent={option.labelContent}
                    value={option.value}
                    name={name}
                    onChange={onChange}
                />
            ))}
        </InputsBox>
    );
};

export default InputRadioGroup;