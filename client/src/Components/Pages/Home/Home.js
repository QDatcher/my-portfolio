import {Link} from 'react-router-dom';

import "./Home.css"
const Home = () => {
   
    
    return (
            <section className='home-container'>
                <h2>Quentin Datcher's Story</h2>
                <div className="about-container">
                    <div className='about-section'>
                        <h3>About Me</h3>
                        <div className="about-content">
                            <div className="main-photo">
                                <img alt="2 men in suits" src={require("../../../pics/nice.jpg")} />
                            </div>
                            <p className="inline">
                                    My name is Quentin Datcher (Guy on the right) and I'm a 25 year old Junior FullStack Developer born and raised in Washington, D.C.
                                    In college, I pursued an electrical engineering degree at the University of Pitsburgh @ Johnstown, however a lack of finances would later force me to drop out in my junior year.
                                    <br/>
                                    <br/>
                                    Looking for a better source of income and a potenial career path, I joined a sales company that was looking to expand to Texas selling cell service to business owners in the Houston area. Throughout my time in sales, I picked up soft skills pertaining to leadership, communication, and work ethic, however I knew the world of sales wasn't a longterm option for me so when the pandemic hit, I moved back to DC and was lucky to get recommended to my current job at Congressional Cemetery studying code on the side until I started my bootcamp.
                                    <br />
                                    <br />
                                    Now I'm looking to market my skills to the right employer and begin my career in Tech.

                            </p>

                        </div>
                    </div>
                    <div className='hobbies-section'>
                        <h3>Hobbies</h3>
                        <div class="hobbies-container">
                            <figure class="first-hobby">
                                <div className='video-container'>                                    
                                    <iframe width="360" height="200" src="https://www.youtube.com/embed/X-Q39BG6EsU" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                           
                                </div>
                                <figcaption><span className='hobbyName'>Music</span> - I primarily play guitar/uke, however in recent years I've been learning bass and keyboard. Sometimes I record original pieces and upload them to youtube</figcaption>
                            </figure>
                            <figure class="second-hobby">
                                <div className='video-container'>
                                    <iframe width="360" height="200" src="https://www.youtube.com/embed/DoHIpq2lk7Q?si=h4OsoeeCoI7caNSK" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <figcaption><span className='hobbyName'>Kickboxing/MMA</span> - For the past 2 and a half years I've been learning how to kicbox and more recently have started jiujitsu and some catch wrestling (My skill level is still very beginner as shown in my sparring video)</figcaption>
                            </figure>
                            
                        </div>
                    </div>
                </div>
            </section>
            
    )
}
export default Home;