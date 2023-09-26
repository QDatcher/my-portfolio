import {Link} from 'react-router-dom';
import './WorkExperience.css';
import Skill from '../../Builders/Skill/Skill';

const WorkExperience = () => {
   
    const skills = [
        {
            imgSrc: 'html.png',
            iconName: 'HTML',
            skillLevel: 4,

        },
        {
            imgSrc: 'css.png',
            iconName: 'CSS',
            skillLevel: 4,

        },
        {
            imgSrc: 'js.jpg',
            iconName: 'JavaScript',
            skillLevel: 4,

        },
        {
            imgSrc: 'typescript.png',
            iconName: 'Typescript',
            skillLevel: 2,

        },
        {
            imgSrc: 'react.png',
            iconName: 'React.js',
            skillLevel: 3,

        },
        {
            imgSrc: 'next.png',
            iconName: 'Next.js',
            skillLevel: 2,

        },
        {
            imgSrc: 'mongo.png',
            iconName: 'MongoDB',
            skillLevel: 2,

        },
        {
            imgSrc: 'apollo.jpg',
            iconName: 'Apollo GraphQL',
            skillLevel: 2,

        },
        {
            imgSrc: 'node.png',
            iconName: 'Node.js',
            skillLevel: 2,

        },
        {
            imgSrc: 'express.png',
            iconName: 'Express.js',
            skillLevel: 3,

        },
        {
            imgSrc: 'tailwind.png',
            iconName: 'Tailwind.css',
            skillLevel: 3,

        },
    ]
    
    return (
        <div className='page-container'>
            <h2>WorkExperience</h2>
            <section className='work-experience-container'>                
                <section className='work-history'>
                    <h3>Past Employment</h3>
                    <div className='previous-work-container'>
                        <section className='AKQA-section'>  
                            <h4><span className='work-number' >1: </span><div className='akqa-logo'><img src={require('../../../pics/akqa.png')} /></div>  <span className='date'>June 2023 - August 2023</span></h4>
                            <div className='info-container'>
                                <p>AKQA is a gloal Advertising company that I had the pleasure of working at through their <span className='important-word'>Future Academy Internship</span>. Throughout the course of the internship I was able to sharpen my coding skills and collaborate with others to effectivly problem solve solutions to potenial consumer pains throughout the 3 major phases of the internship below:</p>
                                <div className='work-types'> 
                                    <ol>
                                        <li><span className='important-word'>Client Work</span>: This phase integrated me into a well functioning agile dev enviornment, allowing me to flesh out my skills as a developer with a real client site. Throughout this phase I brushed up my skills in React, as well as learned how to understand Next.Js, Typescript, and Tailwind. Using Jira, I recieved tickets to fix various technical and accessibility bugs and later began recieveing tickets to create my new components ranging from atoms to organisms (we used the Atomic method)</li>
                                        <li><span className='important-word'>Ignition Sprint</span>: This was a 2 week phase that had me and my fellow DC cohortees to work with one of the teams to garner more attention to some of the lesser known brands associated with one of AKQA's clients. Unfortunatly I can't speak much about this as it is confidential but none the less it was a great learning experience for how to collaborate with others to satisfy the needs of a high profile client within a set deadline</li>
                                        <li><span className='important-word'>Final Project</span>: During this phase my group and I were tasked with ideating a product that satisfies the prompt: <br/> <span className='quote'>"Create a product that allows us to use the energy of Young Americans to make a positive change in America"</span>
                                            <br/> 
                                            With this task, we created a prototype called <span className='important-word'><a target='blank' href='https://github.com/QDatcher/GleapCode'>Gleap</a></span>. The idea is that this would be a browser extension that allows the user to see the eco rating for different items on merchant sites such as Amazon. This ideally would allow the user to support more eco-friendly companies with their buying power, which would hopefully force corporations to adapt more sustainable practices aking the world a greener place. The project was later presented to a live audience where I did a live demonstration of how to use Gleap using the video below (no sound). To see a pdf of our presentation click <a target='blank' href='https://drive.google.com/file/d/1m9DR4CvpO4bF-N8kIBPtBq8DPBf4Lbtx/view?usp=drive_link'>here</a>
                                            <br/>
                                                    <div className='gleap-video-container'>
                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QkBMWpV7eBU?si=H3ydNojC5dfikg8z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                    </div>
                                                
                                        </li>
                                    </ol>
                                </div>
                                <div className='table-container'> 
                                    <table className='table'>
                                        <tr>
                                            <th className='work-type-table'>Work Type</th>
                                            <th className='highlights-tale'>Highlights</th>
                                            <th>Technical Highlights</th>
                                        </tr>
                                        <tr>
                                            <td>Client Work</td>
                                            <td>
                                                <ul>
                                                    <li>Worked in a professional <span className='important-word'>Agile</span> dev enviornment</li>
                                                    <li>Participated in daily Stand Ups giving full reports on my progress and expected goals for the day</li>
                                                    <li>Provided thoughtful solutions to minor problems / bugs during the standups</li>
                                                    <li>Learned a bit of <span className='important-word'>Typescript</span>, <span className='important-word'>Next.js</span>, <span className='important-word'>Tailwind</span> to prep for client work</li>
                                                    <li>Participated in tech meetings about the client</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>                                                
                                                    <li>Assigned tickets for several tasks through <span className='important-word'>Jira</span></li>
                                                    <li>Used an Atomic classification system to build components in <span className='important-word'>Next.Js</span> (started from making an atom to making an organism)</li>
                                                    <li>Used products like <span className='important-word'>Figma</span> to see what the Design team wanted and <span className='important-word'>Storybook</span> to help style individual components</li>
                                                    <li>Worked on tickets to minor level bugs</li>
                                                    <li>Used industry standard practices to make make components <span className='important-word'>accesible</span></li>
                                                    <li>Pushed code and responded to changes needed to the actual client work Repo which was later merged</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ignition Sprint</td>
                                            <td>
                                                <ul>
                                                    <li>Collaborated with group to brainstorm solution to problem</li>
                                                    <li>Researched the client, its  and it's competitors for solutions</li>
                                                    <li>Helped brainstorm ideas for slogans and placement on products</li>
                                                    <li>Helped create some of the visual aids used during the presentaion</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>N/A</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Final Project</td>
                                            <td>
                                                <ul>
                                                    <li>Brainstormed different types of project ideas to satisfies the prompt</li>
                                                    <li>Helped research consumer data to provide a solution to the project</li>
                                                    <li>Theorized mediums we could use to incorporate our solution to consumers and their feasibility</li>
                                                    <li>Made the decisive decision to make the project a browser extension</li>
                                                    <li>Presented the idea and did a walkthrough of how the browser extension would function to an audience of over 100 people in the North American AKQA sphere</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>Used TaperMonkey and Stylus browser extension to overlay js / cs code on Amazon website for prototype</li>
                                                    <li>Worked with visual design cohortee to implement logo and correct stylings to the prototype</li>
                                                    <li>Attempted to make the prototype dynamic through traversing the DOM, however couldn't account for all the microchanges between each amazon endpoint</li>
                                                    <li>Worked with the project management cohortee to write down the tech feasibility of the prototype</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div>
                            </div>
                        </section>

                    </div>
                </section>
                <section className='skills'>
                    <h3>Language Skills</h3>
                    <div className='skills-container'>
                        {
                            skills.map((skill) =>{
                                return (
                                    <Skill imgSrc={skill.imgSrc} iconName={skill.iconName} skillLevel={skill.skillLevel} />
                                )
                            })
                        }
                    </div>
                </section>
            </section>
        </div>
    )
}
export default WorkExperience;