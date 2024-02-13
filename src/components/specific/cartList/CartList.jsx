import { useState, useEffect } from "react";
import axios from "axios";
import { img } from "../list/list.module.css";
import { NavLink } from "react-router-dom";


const CartList = ({ user, setUser, setCartItemCount, cartItemCount }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const userid = user?.loguedUser.userFounded._id;
  const cart = user?.loguedUser.userFounded.cart;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://castemerenfts-backend.onrender.com/products");
        setAllProducts(data.info.products);
      } catch (error) {
        //error
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const cartLogued = allProducts?.filter((product) =>
    cart.includes(product._id)
  );

  const deleteCart = async (ids) => {
    const userId = userid;
    const productId = ids;

    try {
      await axios.delete(
        `https://castemerenfts-backend.onrender.com/users/deleteCart/${userId}/${productId}`
      );
      // Filtrar los favoritos del usuario para eliminar el producto con el ID proporcionado
      const updatedCart = user?.loguedUser.userFounded.cart.filter(
        (id) => id.toString() !== ids
      );
      // Actualizar el objeto de usuario en el estado y en el almacenamiento local
      const updatedUser = {
        ...user,
        loguedUser: {
          ...user.loguedUser,
          userFounded: {
            ...user.loguedUser.userFounded,
            cart: updatedCart,
          },
        },
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setCartItemCount((cartItemCount -= 1));
    } catch (error) {
      //error
    }
  };

  useEffect(() => {
    // Calcula el total sumando los precios de los productos en el carrito
    const cartTotal = cartLogued.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );
    setTotal(cartTotal);
  }, [cartLogued]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <h1 className="text-center pb-4 text-white fw-bold">Carrito</h1>
        {loading ? (
          <div className="d-flex justify-content-center pb-5 pt-5">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {cartLogued.map((product) => (
              <div className="p-2 border border-1 d-flex" key={product._id}>
                <NavLink
                  className="text-decoration-none"
                  to={`/${product._id}`}
                >
                  <div className={`d-flex`}>
                    <img
                      src={`https://castemerenfts-backend.onrender.com/${product.image}`}
                      className={img}
                    />
                    <div className="card-body px-3">
                      <h5 className={`card-title text-white`}>
                        {product.name}
                      </h5>
                      <h5
                        className={`card-title text-success `}
                      >{`$${product.price}`}</h5>
                    </div>
                  </div>
                </NavLink>
                <button
                  onClick={() => deleteCart(product._id)}
                  className="btn btn-danger ms-auto"
                >
                  Eliminar
                </button>
              </div>
            ))}
          {user?.loguedUser.userFounded.cart.length > 0 ? (
            <h2 className="pt-3 text-success">Total: ${total}</h2>
          ) : (
            <h2 className="text-center text-white pt-5 pb-5">No hay productos agregados</h2>
          )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartList;
