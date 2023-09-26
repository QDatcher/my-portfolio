import ContactCard from '../../Builders/ContactCard/ContactCard';
import './Contact.css';

const Contact = () => {



    return (
        <section className='container'>
            <h2 className='contact-header'>Contact Me</h2>
            <div className='card-container'>
                <ContactCard title="Github" link="https://github.com/QDatcher" type="link" />
                <ContactCard title="Email" text="quentin.datcher@yahoo.com" type="email" />
                <ContactCard title="References" link="https://docs.google.com/document/d/1QltDCddzljycpSC_7XyajuaX0pp4BblgOWsSV926_Ys/edit?usp=sharing" type='namedLink' text="Quentin's References" />
                <ContactCard title="Resume" type="namedLink" text="Quentin's Resume" link="https://docs.google.com/document/d/1MV-Q5ITdBu8FPDXn6NOx3uJLoX_gTzHN/edit" />
                
            </div>
        </section>
    )
}

export default Contact;