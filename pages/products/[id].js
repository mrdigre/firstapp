import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
// import { products } from "./index"; // borrar
import ProductPage from "../../components/ProductPage";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  //const productData = products.find((product) => product.id === Number(id));
  // borrar y traer el product que yo quiera con un fetch useEstate, useEffect.

  const [productData, setProductData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/products/" + id)
      .then(function (response) {
        // handle success
        setProductData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      {productData ? (
        <ProductPage productData={productData} /> //passing prop
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Post;
