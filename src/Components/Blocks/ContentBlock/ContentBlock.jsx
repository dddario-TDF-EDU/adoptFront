/* eslint-disable react/prop-types */
import './contentBlock.css'

const ContentBlock = ({ className, title, subtitle, children, childrenImg, url, alt }) => {
    return (
        <article className={`${className} container-block`}>
            <div className={`${className} text-block`}>
                <header className={`${className} header-block`}>
                    <h3 className={`${className} title-block`}>
                        {title}
                    </h3>
                    <h3 className={`${className} subtitle-block`}>
                        {subtitle}
                    </h3>
                </header>
                <div className={`${className} children-block`}>
                {children}
                </div>
            </div>
            <div className={`${className} img-container-block`}>
                {url ?
                <img className={`${className} img-block`} src={url} alt={alt} />
                : childrenImg }
            </div>
        </article>
    )
}
export default ContentBlock;