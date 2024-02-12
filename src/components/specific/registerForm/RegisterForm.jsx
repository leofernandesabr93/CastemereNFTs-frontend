import React from "react";
import { useForm } from "react-hook-form";
import { input,buttonCustom } from "../loginModal/loginForm/loginForm.module.css";
import { registerForm, link } from "../loginModal/loginModal.module.css";
import axios from "axios";
import { useState } from "react";

const RegisterForm = ({ handleLoginClick }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://castemerenfts-backend.onrender.com/users/register",
        data
      );
      console.log(response);
      document.getElementById("linkLogin").click();
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  });

  return (
    <form noValidate onSubmit={onSubmit} className={`${registerForm}`}>
      <div>
        <h2 className="text-center pb-4 fw-bold">Registrarse</h2>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className={`w-100 ${input} p-2 mb-3`}
          placeholder="Usuario"
          {...register("userName", {
            required: {
              value: true,
              message: "Ingrese un nombre de usuario",
            },
            minLength: {
              value: 2,
              message:
                "El nombre de usuario debe contener al menos 2 caracteres",
            },
            maxLength: {
              value: 40,
              message:
                "El nombre de usuario debe contener no mas de 40 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z ]+$/,
              message:
                "Ingrese solo letras, sin numeros ni caracteres especiales",
            },
          })}
        />
        {errors.userName && (
          <p className="text-danger">{errors.userName.message}</p>
        )}
      </div>

      <div className="mb-3">
        <input
          type="email"
          className={`w-100 ${input} p-2 mb-3`}
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "Ingrese un correo",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
              message: "ingrese un correo valido",
            },
          })}
        />

        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>

      <div className="mb-3">
        <input
          type="password"
          className={`w-100 ${input} p-2 mb-3`}
          placeholder="Contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "Ingrese una contraseña",
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
              message:
                "La contraseña debe contener al menos 6 caracteres, una mayuscula y un numero",
            },
            maxLength: {
              value: 40,
              message: "La contraseña no debe contener mas de 40 caracteres",
            },
          })}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>

      <div className="mb-3">
        <input
          type="password"
          className={`w-100 ${input} p-2 mb-3`}
          placeholder="Repetir contraseña"
          {...register("repeatPassword", {
            required: {
              value: true,
              message: "Repita su contraseña",
            },
            validate: (value) => {
              if (value === watch("password")) {
                return true;
              } else {
                return "Las contraseñas no coinciden";
              }
            },
          })}
        />
        {errors.repeatPassword && (
          <p className="text-danger">{errors.repeatPassword.message}</p>
        )}
      </div>

      <p className="text-danger">{error}</p>

      <div className="d-flex  justify-content-end pt-3">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button type="submit" className={`mb-3 ${buttonCustom}`}>
            Enviar
          </button>
        )}
      </div>

      <div className="text-center pt-2">
        <a className={link} id="linkLogin" onClick={handleLoginClick}>
          Ya tienes cuenta? Inicia sesion!
        </a>
      </div>
    </form>
  );
};

export default RegisterForm;
