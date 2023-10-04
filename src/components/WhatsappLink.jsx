import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappLink = () => {
  const phoneNumber = '51955081075'; 
  const message = 'Hola! Quisiera más información sobre LAM Music Store.';

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <div className='whatsApp'>
    <a href={whatsappLink} className="whatsApp__float" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="whatsApp__my-float" />
    </a>
    </div>
  );
};

export default WhatsappLink;
