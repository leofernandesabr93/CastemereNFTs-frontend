import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormCart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      Swal.fire({
        title: "¡Compra exitosa!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      reset()
    } catch (error) {
      console.log(error)
    } 
  });

  return (
    <form onSubmit={onSubmit} noValidate className="col-12 col-md-8 col-lg-6 col-xl-6 bg-white p-3" >
      <div>
        <h2 className="text-center pb-4 fw-bold"></h2>
      </div>
      <div className="mb-3">
        <input
          type="number"
          className={`w-100 p-2 mb-3`}
          placeholder="Numero de la tarjeta"
          {...register("numberT", {
            required: {
              value: true,
              message: "Ingrese un numero de tarjeta valido",
            },
            minLength: {
              value: 14,
              message:
                "Ingrese un numero de tarjeta valido",
            },
            maxLength: {
              value: 16,
              message:
                "Ingrese un numero de tarjeta valido",
            },
          })}
        />
        {errors.numberT && <p className="text-danger">{errors.numberT.message}</p>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          className={`w-100 p-2 mb-3`}
          placeholder="Nombre y apellido"
          {...register("fullName", {
            required: {
              value: true,
              message: "Ingrese un nombre",
            },
            minLength: {
              value: 2,
              message:
                "Ingrese un nombre valido",
            },
            maxLength: {
              value: 40,
              message:
                "Ingrese un nombre valido",
            },
          })}
        />
        {errors.fullName && (
          <p className="text-danger">{errors.fullName.message}</p>
        )}
      </div>

      <div className="mb-3">
        <p>Fecha de vencimiento:</p>
        <input
          type="date"
          className={`w-100 p-2 mb-3`}
          placeholder="Nombre y apellido"
          {...register("date", {  
            required: {
              value: true,
              message: "Ingrese la fecha de vencimiento",
            },
          })}
        />
        {errors.date && (
          <p className="text-danger">{errors.date.message}</p>
        )}
      </div>

      <div className="mb-3">
        <input
          type="number"
          className={`w-100 p-2 mb-3`}
          placeholder="Codigo de seguridad"
          {...register("securityCode", {  
            required: {
              value: true,
              message: "Ingrese el codigo de seguridad",
            },
            minLength: {
              value: 3,
              message:
                "Ingrese el codigo de seguridad valido",
            },
            maxLength: {
              value: 4,
              message:
                "Ingrese el codigo de seguridad valido",
            },
          })}
        />
        {errors.securityCode && (
          <p className="text-danger">{errors.securityCode.message}</p>
        )}
      </div>

      <div className="mb-3">
        <input
          type="number"
          className={`w-100 p-2 mb-3`}
          placeholder="Dni titular de la tarjeta"
          {...register("dni", {  
            required: {
              value: true,
              message: "Ingrese un documento",
            },
            minLength: {
              value: 8,
              message:
                "Ingrese un documento valido",
            },
            maxLength: {
              value: 14,
              message:
                "Ingrese un documento valido",
            },
          })}
        />
        {errors.dni && (
          <p className="text-danger">{errors.dni.message}</p>
        )}
      </div>

      <div className="d-flex  justify-content-end pt-3">
        <button type="submit" className="btn btn-success">
          Comprar
        </button>
      </div>
    </form>
  );
};

export default FormCart;
