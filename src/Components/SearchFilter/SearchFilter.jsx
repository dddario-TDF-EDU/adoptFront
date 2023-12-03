/* eslint-disable react/prop-types */
import InputsBox from '../Inputs/InputsBox/InputsBox';
import CheckboxInput from '../Inputs/CheckboxInput/CheckboxInput';
import { useState } from "react";
import './searchFilter.css'

const SearchFilter = ({ setFilters }) => {

    const specieOptions = [
        { labelContent: "Perro", value: "Perro", name: "specie" },
        { labelContent: "Gato", value: "Gato", name: "specie" },
        { labelContent: "Otros", value: "Otros", name: "specie" }
    ];
    const sexOptions = [
        { labelContent: "Macho", value: "Macho", name: "sex" },
        { labelContent: "Hembra", value: "Hembra", name: "sex" }
    ];
    const locationOptions = [
        { labelContent: "Ushuaia", value: "1", name: "location" },
        { labelContent: "Tolhuin", value: "2", name: "location" },
        { labelContent: "Rio Grande", value: "3", name: "location" }
    ];

    const [selectedOptions, setSelectedOptions] = useState({
        specie: undefined,
        sex: undefined,
        location: undefined
    });

    const handleStateChange = (event) => {
        //Se desestructura los valores del checkbox al ocurrir el evento. Extrayendo los valores 'name' y checked
        const { name, checked, value } = event.target;

        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [name]: checked ? value : undefined
        }));

        setFilters((prevFilter) => ({
            ...prevFilter, // se crea una copia del objeto prevFilter para mantener todos los filtros seleccionados
            [name]: checked ? value : undefined // se verifica si el check es true se retorna el name del mismo sino se devuelve undefined
        }));
    }
    return (
        <>
            <InputsBox
                title="Especie">
                {specieOptions.map((option, index) => (
                    <CheckboxInput
                        className='filter'
                        key={index}
                        type="checkbox"
                        labelContent={option.labelContent}
                        value={option.value}
                        name={option.name}
                        onChange={handleStateChange}
                        checked={selectedOptions.specie === option.value}
                    />
                ))}
            </InputsBox>
            <InputsBox
                title="Sexo">
                {sexOptions.map((option, index) => (
                    <CheckboxInput
                        className='filter'
                        key={index}
                        type="checkbox"
                        labelContent={option.labelContent}
                        value={option.value}
                        name={option.name}
                        onChange={handleStateChange}
                        checked={selectedOptions.sex === option.value}
                    />
                ))}
            </InputsBox>
            <InputsBox
                title="Ubicacion">
                {locationOptions.map((option, index) => (
                    <CheckboxInput
                        className='filter'
                        key={index}
                        type="checkbox"
                        labelContent={option.labelContent}
                        value={option.value}
                        name={option.name}
                        onChange={handleStateChange}
                        checked={selectedOptions.location === option.value}
                    />
                ))}
            </InputsBox>
        </>
    )
}
export default SearchFilter;