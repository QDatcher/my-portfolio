 import {NavLink} from 'react-router-dom';
import './Header.css';
const Header = () => {
   
    
    return (
        <header className='header'>
            <div className='logo-container'>                
                <img alt='QD Logo' className='logo' src={require("../../../../src/pics/qd-logo-q-d-design-white-qd-letter-qd-q-d-letter-logo-design-initial-letter-qd-linked-circle-uppercase-monogram-logo-qd-logo-q-d-197017157.jpg")} />
            </div>
            <nav>
                <ul>
                    <li className="navEndPoint">
                        <NavLink className="navEndPoint" to="/" >Home</NavLink>
                    </li>
                    <li className="navEndPoint">
                        <NavLink className="navEndPoint" to="/projects">Projects</NavLink>
                    </li>
                    <li className="navEndPoint">
                        <NavLink className="navEndPoint" to="work-experience" >WorkExperience</NavLink>
                    </li>
                    <li className="navEndPoint">
                        <NavLink className="navEndPoint" to="/Contact" >Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;