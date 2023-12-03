import ContentBlock from '../../Blocks/ContentBlock/ContentBlock';
import SectionStructure from '../../SectionStructure/SectionStructure';
import Slider from '../../Slider/Slider';
import './matchSection.css';

const MatchSection = () => {

    const didMatchImg =[
        { url: "https://img.freepik.com/foto-gratis/hombre-abrazando-su-amigable-pitbull_23-2149131399.jpg" },
        { url: "https://ichef.bbci.co.uk/news/640/cpsprodpb/8724/production/_92169543_thinkstockphotos-492735396.jpg" },
        { url: "https://www.qmayor.com/wp-content/uploads/2021/02/mascota-adopcion-768x512.jpg" }
    ]

    return (
        <SectionStructure
            className='match'
            sectionTitle='Ya hicieron match'>
            <ContentBlock
                className="match"
                title="Ellos ya encontraron un hogar donde le brinden amor."
                childrenImg={<>
                    <Slider className='match' elements={didMatchImg.map((image, index) => (
                        <article key={index} className='match-img-content'>
                            <img className='match-img' src={image.url} alt='match-slider-image' />
                        </article>
                    ))} timeSlider={7000} />
                </>
                }
            >
                <p className='match-text'>¡Sumate vos también a ésta familia y dales una oportunidad!</p>
            </ContentBlock>
        </SectionStructure>
    )
}
export default MatchSection;