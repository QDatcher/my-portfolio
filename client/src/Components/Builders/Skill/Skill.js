import './Skill.css';

const Skill = ({imgSrc, iconName, skillLevel, description }) => {

    const skillLevelSelector = (skillLevel) => {
        switch(skillLevel){
            case 1:
                return 'Beginner';
            case 2:
                return 'Beginner to Intermediate';            
            case 3:
                return 'Intermediate';
            case 4:
                return 'Intermediate to Advanced';
            case 5:
                return 'Advanced';

            default:
                return 'Beginner';
        }
    }

    const l = '../../../pics/next.png'

    return (
        
            <figure className="skill-container">
                <div className="skill-container-icon">
                    <img className="icon-img" src={require(`../../../pics/${imgSrc}`)} alt={`${iconName} icon`} />
                </div>
                <figcaption className='skill-title'><span className='icon-name'>{iconName}</span> {description}</figcaption>
                <p><span className='skill-level'>Skill Level</span>: {skillLevelSelector(skillLevel)}</p>
            </figure>
       

    )
}

export default Skill;