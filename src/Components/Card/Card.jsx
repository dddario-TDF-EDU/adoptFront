import MaleImg from '../../assets/masculino.svg';
import FemaleImg from '../../assets/femenino.svg';
import { useEffect, useRef, useState } from "react";
import './card.css';

const Card = ({ petImg, description, name, sex, age, attribute, location, id, onClick, interested, logged, role }) => {

    const [showDescription, setShowDescription] = useState(false);
    const isShowDescription = useRef(null);

    const handleClick = () => {
        setShowDescription(!showDescription);
    }
    //Se aplica el evento mouseleave para ocultar automaticamente la descripcion si se saca el click de la card
    useEffect(() => {
        if (showDescription) {
            isShowDescription.current.addEventListener('mouseleave', () => {
                setShowDescription(!showDescription);
            })
        }
    })

    return (
        <article className='pet-card' ref={isShowDescription}>
            <div className='img-description-container'>
                <img className='card-img' src={petImg} alt='Mascota'></img>
                <div className='div-description'>
                    <p className={`pet-description ${!showDescription ? 'ocult' : 'show'}`}> {description} </p>
                    <button className='description-btn' onClick={handleClick}> {!showDescription ? 'Más información' : 'Ocultar'} </button>
                </div>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h4 className='pet-name'> {name}</h4>
                    <div className='img-sex-div'>
                        <img className='img-sex' src={sex === 'Macho' ? MaleImg : FemaleImg} alt="Imagen sexo" />
                    </div>
                </div>
                <p className='pet-age'>{age} años</p>
                <ul className="attributes-list">
                    {attribute}
                </ul>
                <p className='pet-location'>{location}</p>
                {role === 'ADMIN' ?
                    <div className='pet-option-btn'>
                        <button className='btn-edit-pet'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                        </button>
                        <button className='btn-delete-pet'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                        </button>
                    </div> :
                    <button className='adopt-btn' type='button' value={id} onClick={onClick}>
                        {logged ? 'Quiero adoptar' : 'Iniciar sesion '}
                    </button>
                }
                <p className="pet-interested"> {interested}</p>
            </div>
        </article>
    )
}
export default Card;