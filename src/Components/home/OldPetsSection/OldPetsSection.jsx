import SectionStructure from '../../SectionStructure/SectionStructure';
import PetCards from '../../Card/PetCards/PetCards';
import NotFoundImg from '../../../assets/not-found.svg';
import ScrollToTop from 'react-scroll-to-top';
import Slider from '../../Slider/Slider';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOldPets } from './Services/getOldPets.mjs';
import './oldPetsSection.css';

const OldPetsSection = () => {

    const [petList, setPetList] = useState([]);

    useEffect(() => {
        getOldPets().then((result) => {
            setPetList(result);
        });
    }, []);


    return (
        <SectionStructure
            className='old-pets'
            sectionTitle='Aún buscan un hogar'>
            <section className='home-cards-container'>
                {petList && petList.length > 0 ? (
                    <>
                        <Slider className='oldPets' elements={petList.map((pet, index) => (
                            <PetCards key={index} petList={[pet]} />))}
                            hasPrevBtn={true} hasNextBtn={true} timeSlider={7000}/>
                        <section className='btn-see-more-container'>
                            <button className='btn-see-more' id='btn-see-more'>
                                <Link to='/adopciones/mascotas'  onClick={<ScrollToTop smooth />}>Ver más</Link>
                            </button>
                        </section>
                    </>
                ) : (
                    <>  <img className='not-found-img' src={NotFoundImg} alt='not-found'></img>
                        <h3 className='not-found-title'> Un momento por favor, estamos buscando a las mascotas.</h3>
                    </>
                )}
            </section>
        </SectionStructure>
    )
}
export default OldPetsSection; 
