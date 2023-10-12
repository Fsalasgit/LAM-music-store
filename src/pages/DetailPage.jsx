import React, { useEffect, useState } from 'react'
import ProductDetail from '../components/Detail/ProductDetail'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../config/axiosInstance'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DetailPage = () => {
  const [product, setProduct] = useState([])
  
  const { _id } = useParams()
  console.log(_id)

  const getProducts = async () => {
    try {
      const resp = await axiosInstance.get(`/product/${_id}`)
      setProduct(resp.data.product)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [_id])
  

  return (
    <div className='mb-3'>

        <>
          <Navigation />
                < ProductDetail product={product} />
          <Footer />
        </>

    </div>
  )
}

export default DetailPage