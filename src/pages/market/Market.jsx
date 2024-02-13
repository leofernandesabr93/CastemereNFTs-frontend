import React from "react";
import { container1, container2 } from "./market.module.css";
import Cards from "../../components/specific/cards/Cards";
import Carrousel from "../../components/specific/carrousel/Carrousel";
import { useState, useEffect } from "react";
import axios from "axios";

const Market = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const { data } = await axios.get(
          `https://castemerenfts-backend.onrender.com/products?${page}`
        );
        setAllProducts(data.info.products);
        setTotalPages(data.info.totalPages);
      } catch (error) {
        //error
      } finally {
        setloading(false)
      }
    };
    fetchData();
  }, [page]);

  return (
    <div
      className={`container d-flex flex-column align-items-center ${container1}`}
    >
      <div className={`row pt-5 ${container2}`}>
        <Carrousel allProducts={allProducts} />
      </div>
      <div className={`row  justify-content-center pt-5 ${container2}`}>
        <h2 className="text-center pt-5 pb-5 text-white">Productos</h2>
        <Cards
          totalPages={totalPages}
          setPage={setPage}
          allProducts={allProducts}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Market;
