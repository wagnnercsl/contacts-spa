import React from 'react';
import '../Contact.scss';
import '../utils/formatDate';
import { formatDate } from '../utils/formatDate';

class Contact extends React.Component {
  
  render() {
    
    const { name, avatar, phone, country, admissionDate, company, department } = this.props.data;

    return (
        <article className="contact" data-testid="contact">
          <span className="contact__avatar">
            <img src={avatar} alt={name}/>
          </span>
          <span data-testid="contact-name" className="contact__data">{name}</span>
          <span data-testid="contact-phone" className="contact__data">{phone}</span>
          <span data-testid="contact-country" className="contact__data">{country}</span>
          <span data-testid="contact-date" className="contact__data">{formatDate(admissionDate)}</span>
          <span data-testid="contact-company" className="contact__data">{company}</span>
          <span data-testid="contact-department" className="contact__data">{department}</span>
        </article>
    );
  }
}

export default Contact;
