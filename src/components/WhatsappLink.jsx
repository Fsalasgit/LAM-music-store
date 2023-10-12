import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappLink = () => {

  const whatsappLink = '/error404';

  return (
    <div className='whatsApp'>
    <a href={whatsappLink} className="whatsApp__float" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="whatsApp__my-float" />
    </a>
    </div>
  );
};

export default WhatsappLink;
