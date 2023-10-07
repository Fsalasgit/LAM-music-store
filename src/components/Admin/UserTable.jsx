import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
// import { users } from '../../helpers/products';
import { axiosInstance } from '../../config/axiosInstance';
import Swal from 'sweetalert2'

const UserTable = () => {
  const [allUsers, setAllUsers] = useState([])

  const getUsers = async () => {
    try {
      const resp = await axiosInstance.get("/user")
      console.log(resp.data);
      setAllUsers(resp.data.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const changeUserRole = async (row) => {
    try {
      const userType = row.rol === 'user' ? 'admin' : 'user';
      await axiosInstance.put(`/admin/rol/${row._id}`, { rol: userType });
      getUsers();
      Swal.fire({
        icon: 'success',
        title: 'Rol cambiado con éxito.',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al cambiar el rol.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const deleteUser = async (row) => {
    try {
      Swal.fire({
        title: '¿Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#F8A126',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosInstance.delete(`/user/${row}`)
          getUsers()
        }
      })
    } catch (error) {
      console.log(error)
    } finally {
      getUsers()
    }
  }

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      hide: 'md',
      center: true
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
      center: true
    },
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
      hide: 'md',
      center: true
    },
    {
      name: "Rol",
      selector: (row) => row.rol,
      center: true
    },
    {
      name: "Acciones",
      selector: row => {
        return (
          <div>
            <button className='btn btn-warning btn-md me-3' onClick={() => changeUserRole(row)}>Edit Rol</button>
            <button className='btn btn-danger btn-md' onClick={() => deleteUser(row._id)}>Delet</button>
          </div>
        )
      }
    }
  ]
  return (
    <>
      <div className="row">
        <div className="col text-end">
          <br />
          <br />
        </div>
      </div>
      <>
        <DataTable
          title="Administración de Usuarios"
          columns={columns}
          data={allUsers}
          pagination />
      </>
    </>
  )
}

export default UserTable
