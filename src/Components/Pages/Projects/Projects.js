import {Link} from 'react-router-dom';
import ProjectCard from '../../Builders/ProjectCard/ProjectCard';
import MainProject from '../../Builders/MainProject/MainProject';

const Projects = () => {
   
    const mainProject = {
        siteLink: 'https://jamsphere-ad4807320222.herokuapp.com/',
        imgAlt: "Pic of the Jamsphere home screen",
        sitImgSrc:'jamsphere.png',
        siteTitle: "JamSphere",
        githubLink: "https://github.com/QDatcher/JamSphere",
        description: "This was a Full-Stack project meant to be used as a site for music lovers to share music they find with their friends"
    }
    let l = '../../../pics/Ecommerce.png'
    const projectInfo = [
        {
            siteLink: 'https://qdatcher.github.io/Music-For-My-Soul-gwBootcampProject1/',
            imgAlt: "Pic of the Music For My Soul site home screen",
            sitImgSrc:'musicForSOul.png',
            siteTitle: "Music For My Soul",
            githubLink: "https://github.com/QDatcher/Music-For-My-Soul-gwBootcampProject1",
            description: "This is a Front-End Project that generates a list of colors and tracks that correspond with each color. The site also allows the user to save them to their local storage"
        },{
            siteLink: 'https://find-my-musician.herokuapp.com/',
            imgAlt: "Photo of my Find My Musician Project Site",
            sitImgSrc:'FindMyMusician.png',
            siteTitle: "Find My Musician",
            githubLink: "https://github.com/QDatcher/Music-For-My-Soul-gwBootcampProject1",
            description: "This was the first Full-Stack website I built allowing users to interact and find like minded musicians to persue similar outcomes"
        },{
            siteLink: 'https://qdatcher.github.io/Weather-Report/',
            imgAlt: "Picture of Weather Report site",
            sitImgSrc:'weather.png',
            siteTitle: "Weather Report",
            githubLink: "https://github.com/QDatcher/Weather-Report",
            description: "This was a Front-End project meant to pull realtime weather data for cities from the Open Weather Map API"
        },
        {
            siteLink: 'https://github.com/QDatcher/E-Commerce-Site',
            imgAlt: "Pic of the Insomnia Ecommerce Site",
            sitImgSrc:'Ecommerce.png',
            siteTitle: "E-Commerce API",
            githubLink: "https://github.com/QDatcher/E-Commerce-Site",
            description: "This is the backend of an online store selling clothes, sports equitment and more. This site allows users to add new categories, tags, and products to the site. You can also manipulate the data and delete it using the different end points and fetch requests"
        },{
            siteLink: 'https://github.com/QDatcher/ReadMe-Generator',
            imgAlt: "Pic of the Read Me Generator",
            sitImgSrc:'ReadMeGen.png',
            siteTitle: "Read Me Generator",
            githubLink: "https://github.com/QDatcher/ReadMe-Generator",
            description: "This was a Back-End project meant to be used to make a read me mockup through a generator inside of the terminal using inquier"
        },
        {
            siteLink: 'https://github.com/QDatcher/SVG-Generator',
            imgAlt: "Pic of the SVG Generator",
            sitImgSrc:'svg.png',
            siteTitle: "SVG Generator",
            githubLink: "https://github.com/QDatcher/SVG-Generator",
            description: "This was a Back-End project meant to be used to make a basic SVG through a generator inside of the terminal using inquier"
        },

    ];
    
    return (
        <section className='experience-container'>
            <h2>Projects</h2>
            <div>
                <MainProject 
                    siteLink={mainProject.siteLink} 
                    imgAlt={mainProject.imgAlt} 
                    siteImgSrc={mainProject.sitImgSrc} 
                    siteTitle={mainProject.siteTitle}
                    githubLink={mainProject.githubLink}
                    description={mainProject.description}
                />
            </div>
            <div className='experience-figures-small'>
                {
                    projectInfo.map((project)=> {
                        const {sitImgSrc,imgAlt,} = project;
                        return (
                            <ProjectCard 
                                sitImgSrc={project.sitImgSrc} 
                                imgAlt={project.imgAlt} 
                                siteLink={project.siteLink} 
                                siteTitle={project.siteTitle}
                                githubLink={project.githubLink}
                                description={project.description}
                            />
                        )
                    })
                }

            </div>
        </section>
    )
}
export default Projects;