import './ProjectCard.css'


const ProjectCard = ({siteLink,imgAlt,sitImgSrc,siteTitle,githubLink, description}) => {


    return (
        <div className='figure-container'>
            <figure className='figure'>
                <div className="img-container">
                    <a target="_blank" rel="noreferrer"  href={siteLink}><img alt={imgAlt} className="experience-photo" src={require(`../../../pics/${sitImgSrc}`)} /></a>
                </div>
                <figcaption className="experience-description">
                    <ul>
                        <li><span className="experience-titles">{siteTitle}</span>{`: ${description}`}</li>
                        <li><span className='github'>Github Repository</span>: <a target="_blank" rel="noreferrer"  href={githubLink}>{githubLink}</a></li>
                    </ul>
                </figcaption>
            </figure>
        </div>
    )
}

export default ProjectCard;