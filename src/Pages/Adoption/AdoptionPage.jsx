import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import PetCards from '../../Components/Card/PetCards/PetCards';
import PaginationButton from '../../Components/PaginationButton/PaginationButton';
import SectionStructure from '../../Components/SectionStructure/SectionStructure';
import NotFoundImg from '../../assets/not-found.svg';
import NotResultImg from '../../assets/not-result.svg';
import { useEffect, useState } from 'react';
import { getAllPets, getTotalPets } from './Services/getPets';
import { scrollToTopJs } from './Services/scrollToTop.mjs';
import './adoptionPage.css';


const AdoptionPage = () => {

    const [petList, setPetList] = useState([]);
    const [filter, setFilters] = useState({})
    const [pageNumber, setPageNumber] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [param, setParam] = useState();
    const [loadingPage, setLoadingPage] = useState(false);

    useEffect(() => {
        if (loadingPage) {
            getTotalPets()
                .then((result) => {
                    setTotalCount(Math.ceil(result / 10));
                })
        }
    }, [petList, loadingPage])

    useEffect(() => {
        getAllPets(pageNumber, param)
            .then((result) => {
                if (result) {
                    setPetList(result);
                    setLoadingPage(true)
                }
            })
            .catch((error) => {
                console.error('Error al obtener las mascotas:', error);
            })
    }, [pageNumber, param, loadingPage]);

    useEffect(() => {
        if (filter) {
            const queryParams = {
                specie: filter.specie || "",
                sex: filter.sex || "",
                location: filter.location || ""
            };
            const query = new URLSearchParams(queryParams).toString();
            setParam(query)
        }
    }, [filter])

    const previousPage = () => {
        if (pageNumber > 1) {
            scrollToTopJs()
            setPageNumber((prevPag) => prevPag - 1);
        }
    }

    const nextPage = () => {
        if (pageNumber < totalCount) {
            scrollToTopJs()
            setPageNumber((prevPag) => prevPag + 1);
        }
    }

    const goPage = (event) => {
        scrollToTopJs()
        setPageNumber(parseInt(event.target.value));
    };

    const activePage = (page) => {
        return page === pageNumber ? 'active-page' : 'disable-page';
    }

    return (
        <main className='adoption-main-page'>
            <SectionStructure
                className='adoption'
                sectionTitle='Ellos te esperan'>
                {loadingPage && petList ? (<>
                    <aside className='adoption-filter'>
                        <SearchFilter filter={filter} setFilters={setFilters}></SearchFilter>
                    </aside>
                    {petList.length > 0 ? (
                        <section className='adoption-cards-content'>
                            <PetCards petList={petList} />
                        </section>
                    ) : (
                        <section className='not-result-div'>
                            <h3 className='not-result-title'>Disculpe, no hay resultados con sus preferencias de búsqueda.</h3>
                            <img className='not-result-img' src={NotResultImg} alt="not-result" />
                        </section>
                    )}
                    <div className='pagination-container'>
                        <div className='buttons-pagination'>
                            <PaginationButton
                                className='pagination-btn'
                                id='previous-btn'
                                value='previous-btn'
                                onClick={previousPage}
                                text='Anterior'
                            />
                            {/*Se crea un array declarando una longitud de totalCount, luego se itera en el mismo. Se utiliza '_' ya que no se requiere extraer valor, pero si el index para crear los botones */}
                            {Array.from({ length: totalCount }).map((_, index) => (
                                <PaginationButton
                                    key={index}
                                    className={"pagination-btn " + activePage(index + 1)}
                                    id={"pagination-btn" + index}
                                    value={index + 1}
                                    onClick={goPage}
                                    text={index + 1}
                                />
                            ))}
                            <PaginationButton
                                id="next-btn"
                                className="pagination-btn"
                                value="next-btn"
                                onClick={nextPage}
                                text="Siguiente"
                            />
                        </div>
                    </div>
                </>) : (
                    <div className='page-not-found'>
                        <h3 className='not-found-title'> Un momento por favor, estamos buscando a las mascotas.</h3>
                        <img className='not-found-img' src={NotFoundImg} alt='not-found'></img>
                    </div>
                )}
            </SectionStructure>
        </main>
    )
};

export default AdoptionPage;