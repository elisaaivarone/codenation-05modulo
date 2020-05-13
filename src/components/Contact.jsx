import React from 'react';

const Contact = ({ data }) => {

  const admissionDateFormated = new Date(data.admissionDate).toLocaleDateString('pt-br');
 
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar" data-testid="contact-avatar"> <img src={data.avatar} alt={data.name} /></span>
        <span className="contact__data" data-testid="contact-name">{data.name}</span>
        <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
        <span className="contact__data" data-testid="contact-country">{data.country}</span>
        <span className="contact__data" data-testid="contact-date">{admissionDateFormated}</span>
        <span className="contact__data" data-testid="contact-company">{data.company}</span>
        <span className="contact__data" data-testid="contact-department">{data.department}</span>
      </article>
    );
  
}

export default Contact;