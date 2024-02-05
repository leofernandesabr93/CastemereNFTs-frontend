import React, { useState } from 'react'
import LoginForm from './loginForm/LoginForm'
import { active, forms, modalRegister } from './loginModal.module.css'
import RegisterForm from '../registerForm/RegisterForm'

const LoginModal = ({setUser}) => {
  const [activate, setActivate] = useState(false)
  const [modalH, setmodalH] = useState(false)

  const handleRegistrationClick = () => {
    setActivate(true)
    setmodalH(true)
  }
  const handleLoginClick = () => {
    setActivate(false)
    setmodalH(false)
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog" >
        <div className={`modal-content ${modalH ? modalRegister : ''}`}>
          <div className="modal-header">
            <button type="button" id='closeModal' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className={`modal-body ${forms} ${activate ? active : ''}`}>
            <LoginForm handleRegistrationClick={handleRegistrationClick} setUser={setUser}/>
            <RegisterForm handleLoginClick={handleLoginClick}/>
          </div>
 
        </div>
      </div>
    </div>
  )
}

export default LoginModal