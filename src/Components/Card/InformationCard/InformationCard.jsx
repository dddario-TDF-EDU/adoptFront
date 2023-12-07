import Modal from "../../../Components/Modales/Modal";
import { useState } from "react";
import './informationCard.css';

const InformationCard = ({ title, imageUrl, body, petName, petAge, petSpecie, contact, city }) => {

    const [isOpenModal3, setIsOpenModal3] = useState(false);

    return (
        <article className="cardInfo-container">
            <div className="image-container">
                <img className='img-card-information' src={imageUrl} alt="" />
            </div>
            <div className="cardInfo-content">
                <div className="cardInfo-title">
                    <h3 className="cardInfo-h3">{title}</h3>
                </div>
                {petName &&
                    <div className="extra-info-div">
                        <p className='cardInfo-name'> Me llamo: </p>
                        <p>{petName} </p>
                    </div>
                }
                {petAge &&
                    <div className="extra-info-div">
                        <p className='cardInfo-age'> Tengo: </p>
                        <p>{petAge} años</p>
                    </div>
                }
                {petSpecie &&
                    <div className="extra-info-div">
                        <p className='cardInfo-specie'>Soy un:</p>
                        <p>{petSpecie}</p>
                    </div>
                }
                {contact &&
                    <div className="extra-info-div">
                        <p className='cardInfo-contact'>Podes contactarte al:</p>
                        <p>{contact}</p>
                    </div>
                }
                <p className='cardInfo-city'>{city}</p>

                <div className="cardInfo-body">
                    {body && <p className="cardInfo-p">{body}</p>}
                </div>
            </div>
            <div className="information-btn">
                <button onClick={() => setIsOpenModal3(true)}>
                    Ver más
                </button>
            </div>
            <Modal modalNumber='3' isOpen={isOpenModal3} closeModal={() => { setIsOpenModal3(false) }}>
                <div className='modal-content'>
                    <h2 className='information-modal-title'>{title}</h2>
                    <div className='content-modal-img'>
                        <img className='' src={imageUrl} alt="" />
                    </div>
                    <div className='information-modal-text'>{body}</div>
                </div>
            </Modal>
        </article>
    )
}

export default InformationCard;