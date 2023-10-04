import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappLink = () => {
  const phoneNumber = '51955081075'; // Agrega el número de teléfono deseado
  const message = 'Hola! Quisiera más información sobre Varela 2.'; // Agrega el mensaje deseado

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} className="float" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="my-float" />
    </a>
  );
};

export default WhatsappLink;
