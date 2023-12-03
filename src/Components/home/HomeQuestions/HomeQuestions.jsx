import ContentBlock from '../../Blocks/ContentBlock/ContentBlock';
import { useState } from "react";
import './homeQuestions.css'

const HomeQuestions = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const toggleAnswer = (index) => {
        setSelectedQuestion(index === selectedQuestion ? null : index)
    }
    const plusIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="plus-icon" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
    </svg>;

    const lessIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="less-icon" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
    return (
        <div className='questions-container'>
            <ContentBlock
                className="questions"
                title="¿Querés adoptar pero tenés dudas?"
                subtitle="Te compartimos las preguntas más frecuentes"
                url='https://www.perrospedia.com/wp-content/uploads/2013/05/cachorro-leyendo.jpg'>
                <ul className="questions-list">
                <li className='question' onClick={() => toggleAnswer(1)}
                    selected={selectedQuestion === 1}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 1 ?  plusIcon  :  lessIcon }
                        </div>
                        <p className="question-p">¿Es obligatorio registrarme para solicitar una adopcion?</p>
                    </div>
                    <p className={`${selectedQuestion === 1 ? 'show-answer' : 'answer'}`} >Sí, es necesario y obligatorio. Adoptar es asumir un compromiso de por vida. Tenemos que asegurarnos que la mascota se adapta a las condiciones de vida de la nueva familia, tanto como la familia a las características de las mascotas.
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(2)}
                    selected={selectedQuestion === 2}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 2 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">¿Como me preparo para la llegada de mi mascota?</p>
                    </div>
                    <p className={`${selectedQuestion === 2 ? 'show-answer' : 'answer'}`} >Asegurate de contar con los elementos básicos para que esté cómoda: una cuchita o colchoneta donde dormir, un platito para comer y tomar agua, una chapita o collar con tus datos y su nombre, y, si es un gatito piedritas y litera.
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(3)}
                    selected={selectedQuestion === 3}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 3 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">¿Cuales son los cuidados que debe recibir mi mascota?</p>
                    </div>
                    <p className={`${selectedQuestion === 3 ? 'show-answer' : 'answer'}`}>Es muy importante que te acerques a un veterinario que pueda recomendarte y enseñarte sobre las vacunas que necesita, cuándo aplicarlas, cómo realizar una correcta desparasitación, según peso, hábitos, edad, y qué alimento cubre las necesidades de tu mascota.
                    </p>
                </li>
                </ul>
            </ContentBlock>
        </div>
    )
}
export default HomeQuestions;