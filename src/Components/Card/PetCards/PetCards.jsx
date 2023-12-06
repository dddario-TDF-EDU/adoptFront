import Card from '../Card';
import { useContext, useState } from 'react';

import { AuthContext } from '../../../auth/AuthContext';

import { ConfirmRequest } from '../../Blocks/ConfirmAdoption/ConfirmRequest';

const PetCards = ({ petList }) => {

    const [petName, setPetName] = useState(null);
    const [petId, setPetId] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const { user: { logged }, userData: { role, id } } = useContext(AuthContext);

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
                    onClick={() => { setPetName(pet.name), setPetId(pet.id), setIsOpenModal(true) }}
                    interested={pet.interested > 0 ? `${pet.interested} interesados`
                        : '0 interesados'}
                    role={role}
                    logged={logged}
                >
                </Card>
            ))}
            <ConfirmRequest
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                petName={petName}
                petId={petId}
                userId={id}
            />
        </>
    )
};

export default PetCards;