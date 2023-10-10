import React from 'react'
import {  PiTruck } from 'react-icons/pi';

const SaleType = () => {
  return (
    <>
    <section className='SaleType'>
        <div className="SaleType__container">

            <div className='SaleType__item'>
                <PiTruck className='SaleType__icons'/>
                <span className='SaleType__text'> <strong className='SaleType__color-ofert'>Envío gratis</strong> en compras superiores a $499.990</span>
            </div>

        </div>
    </section>

    </>
  )
}


export default SaleType