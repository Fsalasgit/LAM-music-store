import React from 'react'
import { categories } from '../../helpers/products'
import { axiosInstance } from '../../config/axiosInstance'

const FormCreacion = () => {
    const handleSubmit = async () => {
        axiosInstance.post("/register", body)
    }


// const FormCreacion = () => {
//     const [categories, setCategories] = useState([])
//     const [imgFile, setImgFile] = useState([])
//     const [formDatos, setFormDatos] = useState({
//         title: "",
//         detalle: "",
//         video: "",
//         mentor: "",
//         categoria: ""
//     })

//     const getCategories = async () => {
//         try {
//             const resp = await axiosInstance.get("/categorias")
//         setCategories(resp.data.categories)
//         } catch (error) {
//             console.log(error)
//         }
        
//     }

  return (
    <div>
        <form>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Titulo</label>
                <input type="text" className="form-control" id="title" name="title" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Detalle del producto</label>
                <input type="text" className="form-control" id="detalle" name='description' />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Precio</label>
                <input type="number" className="form-control" id="precio" name="price" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Categoria</label>
                <select name="categoria" className="form-control">
                    {categories.map((category, index) => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Imagen del producto</label>
                <input type="file" className="form-control" id="image" name="image" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Stock</label>
                <input type="number" className="form-control" id="categoria" name="category" />
            </div>

            <div className='form-group'>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormCreacion