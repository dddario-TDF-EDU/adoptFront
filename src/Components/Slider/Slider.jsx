/* eslint-disable react/prop-types */
import { useCallback, useRef, useEffect, useState } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Slider = ({ elements, hasNextBtn, hasPrevBtn, className, timeSlider }) => {

    const [imageContent, setImageContent] = useState([])
    const slider = useRef(null);
    const sliderInterval = useRef(null);

    useEffect(() => {
        setImageContent(elements);
    }, [elements])

    const nextImg = useCallback(() => {
        if (slider.current && slider.current.children && imageContent.length > 0) {
            const firsElement = slider.current.children[0];
            // Se define el movimiento de translacion la longitud de cada card sumado la distancia del margin
            const offset = firsElement.offsetWidth;
            // Se establece tiempo de la transicion
            slider.current.style.transition = `600ms ease-in-out all`;
            // Se aplica la translacion
            slider.current.style.transform = `translateX(-${offset}px)`;
            // Se declara un metodo para que al finalizar la translacion se "renicie" el valor del eje x y el primer elemento sea desplazado al final del array
            const resetOffset = () => {
                slider.current.style.transition = 'none';
                slider.current.style.transform = `translateX(0)`;
                slider.current.appendChild(firsElement);
                slider.current.removeEventListener('transitionend', resetOffset);
            };
            slider.current.addEventListener('transitionend', resetOffset);
        }
    }, [imageContent]);

    const previousImg = useCallback(() => {
        if (slider.current.children.length > 0) {
            // Se toma el ultimo elemento de la coleccion de elementos
            const lastElement = slider.current.children[imageContent.length - 1];
            // Se toma el ultimo elemento y se inserta al inicio
            slider.current.insertBefore(lastElement, slider.current.firstChild);
            const offset = lastElement.offsetWidth;
            //se elimina los estilos de transicion y se aplica la translacion por el eje x
            slider.current.style.transition = 'none';
            slider.current.style.transform = `translateX(-${offset}px)`;
            // se utiliza un setTimeOut para que los anteriores estilos se apliquen antes de aplicar los nuevos
            setTimeout(() => {
                slider.current.style.transition = `600ms linear all`;
                slider.current.style.transform = `translateX(0)`;
            }, 10);
        }
    }, [imageContent]);

    useEffect(() => {
        if (imageContent && slider.current) {
            const sliderElement = slider.current; // se crea una referencia a slider para evitar problemas con las renderizaciones
            sliderInterval.current = setInterval(() => {
                nextImg();
            }, timeSlider);
            // Se detiene el interval si se posiciona el mouse sobre el slider
            const handleMouseOver = () => {
                clearInterval(sliderInterval.current);
            };
            // Se reinicia el interval si se quita el mouse sobre el slider
            const handleMouseLeave = () => {
                clearInterval(sliderInterval.current);
                sliderInterval.current = setInterval(() => {
                    nextImg();
                }, timeSlider);
            };
            // Se llama las funciones mouseover y mouseleave para manejar el comportamiento sobre el slider
            sliderElement.addEventListener('mouseenter', handleMouseOver);
            sliderElement.addEventListener('mouseleave', handleMouseLeave);
            // se limpian los intervalos y se remueven los listener cuando el elemento es desmontado para evitar fugas de memoria
            return () => {
                clearInterval(sliderInterval.current);
                sliderElement.removeEventListener('mouseenter', handleMouseOver);
                sliderElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        }
    }, [imageContent, nextImg, timeSlider]);

    return (
        <>
            {hasPrevBtn ? <div className='btn-slider'>{<NavigateBeforeIcon className={`${className} previous-btn`} onClick={() => previousImg()}/>}</div> : null}
            <section className={`${className} slider-container`} >
                <section className={`${className} slider-img`} ref={slider}>
                    {imageContent}
                </section>
            </section>
            {hasNextBtn ? <div className='btn-slider'>{<NavigateNextIcon className={`${className} next-btn`} onClick={() => nextImg()}/>}</div> : null}
        </>
    )
}

export default Slider;

