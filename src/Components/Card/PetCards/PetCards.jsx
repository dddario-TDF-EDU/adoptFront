import Modal from '../../../Components/Modales/Modal'
import Card from '../Card';
import { useState } from 'react';

const PetCards = ({ petList }) => {

    const [selectPetId, setSelectPetId] = useState(null);
    const [selectPetName, setSelectPetName] = useState(null);
    

    return (
        <>
            {petList.map(pet => (
                <Card
                    id={pet.id}
                    key={pet.id}
                    petImg={pet.urlImg}
                    description={pet.description}
                    name={pet.name}
                    sex={pet.sex}
                    age={pet.age}
                    attribute={pet.attributes.map((attribut, index) => (
                        <li key={index}>{attribut}</li>
                    ))}
                    location={pet.institution}
                    onClick={() => { setSelectPetId(pet.id); setSelectPetName(pet.name)}}
                    interested={pet.interested > 0 ? `${pet.interested} interesados`
                        : '0 interesados'}
                >
                </Card>
            ))}
        </>
    )
};

export default PetCards;