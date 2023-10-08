import React, { useEffect, useState } from 'react'
import ProductDetail from '../components/Detail/ProductDetail'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../config/axiosInstance'

const DetailPage = () => {
  const [product, setProduct] = useState([])
  
  const { _id } = useParams()
  console.log(_id)

  const getProducts = async () => {
    try {
      const resp = await axiosInstance.get(`/product/${_id}`)
      setProduct(resp.data)
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
                < ProductDetail product={product} key={product._id} />
        </>

    </div>
  )
}

export default DetailPage