import React from 'react'
import { PiCertificateDuotone, PiTruck,PiCreditCardThin } from 'react-icons/pi';

const ShippingType = () => {
  return (
    <>
    <section className='ShippingType'>
        <div className="ShippingType__container">
            <div className='ShippingType__item'>
                <PiCertificateDuotone className='ShippingType_icons'/>
                <span className='ShippingType_text'>Garantia oficial</span>

            </div>
            <div className='ShippingType__item'>
                <PiTruck className='ShippingType_icons'/>
                <span className='ShippingType_text'>Envio</span>

            </div>
            <div className='ShippingType__item'>
                <PiCreditCardThin className='ShippingType_icons'/>
                <span className='ShippingType_text'>3, 6, 12 y 18 Cuotas</span>

            </div>
        </div>
    </section>

    </>
  )
}

export default ShippingType