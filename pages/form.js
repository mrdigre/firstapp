import React from "react";
import { useFormik } from "formik";

const AddProduct = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      title: "",
      img: "",
      subTitle: "",
      price: "",
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Email Address</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <input
        id="img"
        name="img"
        type="url"
        onChange={formik.handleChange}
        value={formik.values.img}
      />
      <input
        id="subTitle"
        name="subTitle"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.subTitle}
      />
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default AddProduct;
