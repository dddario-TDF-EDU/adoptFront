/* eslint-disable react/prop-types */
import './titleBlock.css';

const TitleBlock = ({title}) => {
    return (
        <header className="title-section-container">
            <h3 className="title-section-block">
                {title}
            </h3>
        </header>
    )
}
export default TitleBlock;