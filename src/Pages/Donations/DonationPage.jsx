import DonationForm from '../../Components/Forms/DonationForm/DonationForm';
import DonationCard from '../../Components/Card/DonationCard/DonationCard';
import SectionStructure from '../../Components/SectionStructure/SectionStructure';
import './donationPage.css';
import Slider from '../../Components/Slider/Slider';

const DonationPage = () => {

    const colaborators = [
        { urlImg: 'https://plazavea.vteximg.com.br/arquivos/PEDIGREE_logo.jpg?v=637441643591330000' },
        { urlImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/La_anonima_logo.svg/1200px-La_anonima_logo.svg.png' },
        { urlImg: 'https://vitalcan.com/wp-content/uploads/2021/03/logocv@2d.png' },
        { urlImg: 'https://cdn.pixabay.com/photo/2017/03/21/21/50/medal-2163457_1280.png' },
        { urlImg: 'https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_1280.png' },
        { urlImg: 'https://cdn.pixabay.com/photo/2018/03/16/16/40/signs-of-the-zodiac-3231765_1280.png' },
        { urlImg: 'https://cdn.pixabay.com/photo/2016/10/21/23/03/bird-1759368_1280.png' },
        { urlImg: 'https://cdn.pixabay.com/photo/2018/04/10/17/23/dragon-3308119_1280.png' }
    ]

    return (
        <main className='donation-main-page'>
            <SectionStructure className='donation'
                sectionTitle="Sé parte de la familia Adoptapp">
                <aside className='donation-aside'>
                    <p>Somos una organización sin fines de lucro enfocada en el cuidado, crianza y acompañamiento de todas las mascotas. Recordá que en caso de consultas o sugerencias podés comunicarte con nosotros a través de los contactos brindados en el pie de página. Tu ayuda siempre será agradecida.</p>
                </aside>
                <section className='donation-form-section'>
                    <div className='donation-form-content'>
                        <DonationForm />
                        <div className='form-info'>
                            <p className='p-form-info'>Si te gustaría colaborar económicamente a continuación te compartimos nuestra información bancaria, donde podrás colaborar para que podamos comprar alimentos, medicamentos, pagar cirugias y demás gastos que impliquen los cuidados de nuestros amigos peluditos.</p>
                            <div className='p-data-info'>
                                <p id='CBU'>CBU: xxxxxxxxxxxxxxxx</p>
                                <p id='Alias'>Alias: Adoptapp</p>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionStructure>
            <SectionStructure
                className='donation'
                sectionTitle="Nuestros colaboradores">
                <Slider className='colaborators' elements={colaborators.map((colaborator, index) => (
                        <DonationCard
                            key={index}
                            urlImg={colaborator.urlImg} />
                    ))}  timeSlider={6000}/>
            </SectionStructure>
        </main >
    )
};

export default DonationPage;