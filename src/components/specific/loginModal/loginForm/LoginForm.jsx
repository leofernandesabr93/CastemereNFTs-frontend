import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import {input, buttonCustom} from './LoginForm.module.css'
import {loginForm, link} from '../loginModal.module.css'
import axios from 'axios'

const LoginForm = ({handleRegistrationClick}) => {
  
  const navigate = useNavigate();
  const {register, handleSubmit, formState:{ errors }, watch} = useForm(); 

  const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/users/login", data);
      console.log(response)
     
    } catch (error) {
      console.log(error)
    }
  });

  return (
    <form noValidate onSubmit={onSubmit} className={`${loginForm}`}>
      <div>
        <h2 className='text-center pb-4 fw-bold'>Iniciar Sesion</h2>
      </div>
        <div className="mb-3">
          <input type="email" className={`w-100 ${input} p-2 mb-3`} placeholder='Email'
          {...register("email", {
            required: {
              value: true,
              message: "Ingrese un correo"
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
              message: "ingrese un correo valido"
            }
          })}
          />
          {
            errors.email && <p className='text-danger'>{errors.email.message}</p>
          }
        </div>

        <div className="mb-3">
          <input type="password" className={`w-100 ${input} p-2 mb-3`} placeholder='Contraseña'
            {...register("password", {
            required: {
              value: true,
              message: "Ingrese una contraseña"
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
              message: "La contraseña debe contener al menos 6 caracteres, una mayuscula y un numero"
            },
            maxLength:{
              value: 40,
              message: "La contraseña no debe contener mas de 40 caracteres"
            },
          })}
          />
          {
            errors.password && <p className='text-danger'>{errors.password.message}</p>
          }
        </div>

     
        <div className='d-flex  justify-content-end pt-3'>
          <button type="submit" className={`mb-3 ${buttonCustom}`}>Enviar</button>
        </div>

        <div className='text-center pt-2'>
          <a className={link} onClick={handleRegistrationClick}>No tienes cuenta? Registrate!</a>
        </div>

  
  </form> 
  )
}

export default LoginForm