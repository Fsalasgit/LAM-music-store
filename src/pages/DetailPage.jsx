import React, { useEffect, useState } from 'react'
import ProductDetail from '../components/Detail/ProductDetail'
import { products } from '../helpers/products'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const [user, setUser] = useState([{
    "nombre": "bruno",
    "username":"bruno@gmail.com",
    "password":"Bruno1234",
    "image":"",
    "id":1,
    "role":"admin"
  }])
  const [product, setProduct] = useState({
    data: products || [],
    loading: true
  })
  
  const { id } = useParams()
  console.log(id)
  const getProduct = () => {
    const product = products.filter(product => product.id === parseInt(id));
    setProduct({
      data: product,
      loading: false
    })
  }

  useEffect(() => {
    getProduct()
  }, [])
  

  return (
    <div className='mb-3'>
      {
        user.length > 0 ? 
        <>
                < ProductDetail product={product} />
        </>
        :
        <div className="alert alert-danger w-100 text-center" role='alert'> 
          Para ver el detalle del producto debe iniciar sesion
        </div>
      }
    </div>
  )
}

export default DetailPage