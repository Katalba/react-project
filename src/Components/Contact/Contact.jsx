import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { toast } from 'react-toastify';

const Contact = () => {
  const datosFormulario = React.useRef()
  const {register, handleSubmit} = useForm()
  let navigate = useNavigate()
  const consultarFormulario = (e) => {
    e.preventDefault()
    console.log(datosFormulario.current)
    const datForm = new FormData(datosFormulario.current)
    const contacto = Object.fromEntries(datForm)
    console.log(contacto)
    e.target.reset()
    toast.success('Consulta enviada')
    navigate('/')
  }
    return (
        <div>
            <div className="home-form">
          <Link className="navbar-brand brand-form" to={'/'}>
            <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/LOGO.png?alt=media&token=0d99007e-f9e1-46fb-8c4e-dcd8a78c2e31" alt="logo" width="300px" />
          </Link>
        </div>
        <form onSubmit={handleSubmit} ref={datosFormulario}>
          <div className="mb-3">
            <label className="form-label">Nombre y Apellido</label>
            <input {...register('name-Lastname')} type="name" className="form-control" aria-describedby="name-lastName" />
          </div>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input {...register('email')} type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">¿Cómo podemos ayudarte?</label>
            <input {...register('description')} type="description" className="form-control" />
          </div>
          <button type="submit" className="btn btn-dark submit">Enviar</button>
        </form>
        </div>
    );
}

export default Contact;
