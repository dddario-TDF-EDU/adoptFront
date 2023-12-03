/* eslint-disable react/prop-types */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import './selectedOptions.css';


const SelectedOptions = ({optionsElements, optionTitle, isSelected }) => {
    
    const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        isSelected(option);
        setIsOpen(false);
    };

    return (
        <>
            <div className='select-options-container'>
                <p className='select-options-title'>{optionTitle}</p>
                <div className={`select-header ${isOpen ? 'open' : ''}`} onClick={toggleSelect}>
                    { selectedOption ||<p className='default-value'>Selecciona una opción</p>}
                    <span className='arrow-options'>{<KeyboardArrowDownIcon />}</span>
                </div>
                {isOpen && (
                    <div className="options">
                        {optionsElements.map((option, index) => (
                            <div
                                key={index}
                                className="option"
                                onClick={() => handleOptionClick(option)}
                            >
                                <p>{option}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
export default SelectedOptions;