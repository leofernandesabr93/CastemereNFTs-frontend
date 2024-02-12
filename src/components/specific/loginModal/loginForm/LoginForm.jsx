import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { input, buttonCustom } from "./loginForm.module.css";
import { loginForm, link } from "../loginModal.module.css";
import axios from "axios";

const LoginForm = (props) => {
  const { handleRegistrationClick, setUser } = props;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://castemerenfts-backend.onrender.com/users/login",
        data
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(response.data);
      document.getElementById("closeModal").click();
      reset();
      setError(null);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  });

  return (
    <form noValidate onSubmit={onSubmit} className={`${loginForm}`}>
      <div>
        <h2 className="text-center pb-4 fw-bold">Iniciar Sesion</h2>
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
          })}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>
      <p className="text-danger">{error}</p>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="d-flex  justify-content-end pt-3">
          <button type="submit" className={`mb-3 ${buttonCustom}`}>
            Enviar
          </button>
        </div>
      )}
      <div className="text-center pt-2">
        <a className={link} onClick={handleRegistrationClick}>
          No tienes cuenta? Registrate!
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
