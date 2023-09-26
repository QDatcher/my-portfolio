import './ContactCard.css';



const ContactCard = ({title, text, type,link} ) => {
    const isItEmail = (text, type) => {

        if(type === 'email'){
            return (
                <p className="text"><a target="_blank" rel="noreferrer" href={`mailto:${text}`} >{text}</a></p>
            )
        } else if(type === 'link'){
            return (
                <p className="text"><a target="_blank" rel="noreferrer" href={link}>{link}</a></p>
            )
        } else if (type === 'namedLink'){
            return (
                <p className='text'><a target="_blank" rel="noreferrer" href={link}>{text}</a></p>
            )
        } else {
            return (
                <p className="text">{text}</p>
            )
        }
    }

    const insideHTML = isItEmail(text, type);
    console.log(insideHTML)

    return (
        <div className="card">
            <h3 className="title">{title}</h3>
            {insideHTML}
        </div>
    )
}

export default ContactCard;