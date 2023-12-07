import InformationCard from '../../Components/Card/InformationCard/InformationCard';
import ComplaintsForm from '../../Components/Forms/ComplaintsForm/ComplaintsForm';
import SectionStructure from '../../Components/SectionStructure/SectionStructure';
import { getComplaints } from '../../Services/complaintService.mjs';
import { useEffect, useState } from 'react';
import './complaintsPage.css';

const ComplaintsPage = () => {

    const [complainsList, setComplaintList] = useState([]);

    useEffect(() => {
        getComplaints()
            .then((result) => {
                setComplaintList(result)
            })
    }, [])


    return (
        <main className='complaints-main-page'>
            <SectionStructure className='complaints'
                sectionTitle="Ayudanos a proteger a los peluditos">
                <aside className='complaints-aside'>
                    <p>En Adoptapp nos comprometemos con la seguridad y protección de las mascotas, es por  ello que disponemos de una sección exclusiva donde podrás reportar abandonos, maltratos extravíos, etc. Sólo debes completar el formulario con el tipo de denuncia, un contacto para recibir información, imagen y descripción del suceso y nuestro equipo informará la situación a las autoridades.
                    </p>
                </aside>
                <section className='complaints-form-section'>
                    <div className='complaints-form-container'>
                        <h3 className='complaint-info'>Aunque las denuncias son anónimas te solicitamos tus datos de contacto para confirmar la situación. En el caso de tratarse de una mascota perdida se hará público tu número para que la comunidad pueda aportar información.</h3>
                        <ComplaintsForm />
                    </div>
                </section>
            </SectionStructure>
            <SectionStructure className='complaints'
                sectionTitle="Hechos recientes">
                <section className='complaints-content'>
                    {complainsList.map((complaint, index) => (
                        <InformationCard
                            key={index}
                            title={complaint.type === 'Mascota perdida' ? 'Me perdi' : complaint.type === 'Mascota encontrada' ? 'Me econtraron' : complaint.type}
                            imageUrl={complaint.img_url}
                            body={complaint.description}
                            petName={complaint.petName && complaint.petName}
                            petAge={complaint.petAge && complaint.petAge}
                            petSpecie={complaint.petSpecie && complaint.petSpecie}
                            contact={(complaint.type === 'Mascota perdida' || complaint.type === 'Mascota encontrada') ? complaint.phoneNumber : null}
                            city={complaint.city}
                        />
                    ))}
                </section>
            </SectionStructure>
        </main>
    )
}
export default ComplaintsPage;