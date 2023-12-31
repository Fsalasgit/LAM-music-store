import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { axiosInstance } from '../../config/axiosInstance';
import Swal from 'sweetalert2'
import jwt_decode from 'jwt-decode';
import styled, { keyframes } from 'styled-components';

const UserTable = () => {
  const [allUsers, setAllUsers] = useState([])
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);

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
      const token = localStorage.getItem('token');
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.sub;
      if (row._id === userId) {
        Swal.fire({
          icon: 'error',
          title: 'No puedes cambiar tu propio rol.',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const userType = row.rol === 'user' ? 'admin' : 'user';
        await axiosInstance.put(`/admin/rol/${row._id}`, { rol: userType });
        getUsers();
        Swal.fire({
          icon: 'success',
          title: 'Rol cambiado con éxito.',
          showConfirmButton: false,
          timer: 1000,
        });
      }

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
      const token = localStorage.getItem('token');
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.sub;
      if (row === userId) {
        Swal.fire({
          icon: 'error',
          title: 'No puedes eliminarte a ti mismo.',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const result = await Swal.fire({
          title: '¿Estás seguro?',
          text: 'No podrás revertir esto.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#F8A126',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar',
        });
  
        if (result.isConfirmed) {
          await axiosInstance.delete(`/user/${row}`);
          getUsers();
          Swal.fire({
            icon: 'success',
            title: 'Usuario eliminado con éxito.',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al procesar la solicitud.',
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      getUsers();
    }
  };
  
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      center: true,
      hide: 'md'
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
      width: "25%",
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

  const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
 
   to {
    transform: rotate(360deg);
  }
 `;

 
 const Spinner = styled.div`
 margin: 16px;
 animation: ${rotate360} 1s linear infinite;
 transform: translateZ(0);
 border-top: 2px solid var(--c-mainColor); 
 border-right: 2px solid var(--c-mainColor);
 border-bottom: 2px solid var(--c-secondColor);
 border-left: 4px solid var(--c-grey); 
 background: transparent;
 width: 40px;
 height: 40px;
 border-radius: 50%;
`;
 
     const CustomLoader = () => (
         <div style={{ padding: "24px" }}>
             <Spinner />
             <div className="text-center">Cargando...</div>
         </div>
     );
 
     useEffect(() => {
         const timeout = setTimeout(() => {
             setRows(allUsers);
             setPending(false);
         }, 2000);
         return () => clearTimeout(timeout);
     }, [allUsers]);

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
          progressPending={pending}
          progressComponent={<CustomLoader />}
          pagination />
      </>
    </>
  )
}

export default UserTable
