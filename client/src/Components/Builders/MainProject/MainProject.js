import './MainProject.css';

const MainProject = ({siteLink,imgAlt,siteImgSrc,siteTitle,githubLink, description}) => {

const ol = '../../../pics/jamsphere.png'
    return (
            <figure className="experience-figure-1 figure">
                <div>
                    <a target="_blank" rel="noreferrer"  href={siteLink}><img alt={imgAlt} class="experience-photo" src={require(`../../../pics/${siteImgSrc}`)} /></a>
                </div>
                <figcaption className="experience-description">
                    <ul>
                        <li><span class="experience-titles">{siteTitle}</span>{`: ${description}`}</li>
                        <li><span className='github'>Github Repository</span>: <a target="_blank" rel="noreferrer" href={githubLink}>{githubLink}</a></li>
                    </ul>
                </figcaption>
            </figure>
    )
}

export default MainProject;