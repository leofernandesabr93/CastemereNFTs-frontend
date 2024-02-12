import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { img } from "./search.module.css";

const Search = ({ closeModal }) => {
  const [searching, setSearching] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://castemerenfts-backend.onrender.com/products?${searching}`
        );
        setAllProducts(data.info.products);
      } catch (error) {
        setNoResult(error.response.data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searching]);

  const searcher = (e) => {
    const inputValue = e.target.value;
    setSearching(`name=${inputValue}`);
    setNoResult(false);
  };

  return (
    <div className="">
      <input
        className="form-control"
        type="text"
        placeholder="Buscar..."
        onChange={searcher}
      />
      {noResult ? (
        <h4>{noResult}</h4>
      ) : (
        <>
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              {allProducts.map((product) => (
                <div className="pt-4" key={product._id}>
                  <Link className="text-decoration-none" to={`/${product._id}`} onClick={closeModal}>
                    <div className={` d-flex `}>
                      <img
                        src={`https://castemerenfts-backend.onrender.com/${product.image}`}
                        className={img}
                      />
                      <div className="card-body">
                        <h5 className={`card-title text-dark`}>
                          {product.name}
                        </h5>
                        <h5
                          className={`card-title text-success text-end`}
                        >{`$${product.price}`}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
