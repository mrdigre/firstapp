import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { ReactDOM } from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  title: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Title is required"),
  img: yup.string().url("Enter valid URL").required("URL is required"),
  subTitle: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Description required"),
  price: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Description required"),
});

const AddNewProduct = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      title: "",
      img: "",
      subTitle: "",
      price: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:8000/products/", {
          title: values.title,
          img: values.img,
          subTitle: values.subTitle,
          price: values.price,
        })
        .then((response) => {
          console.log(response.data);
          toast.success("Product added successfully", {
            onClose: () => router.push("/products"),
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="title"
        name="title"
        value={formik.values.title}
        label="Title"
        variant="outlined"
        onChange={formik.handleChange}
      />
      <TextField
        id="img"
        name="img"
        value={formik.values.img}
        label="Image URL"
        variant="outlined"
        onChange={formik.handleChange}
      />
      <TextField
        id="subTitle"
        name="subTitle"
        value={formik.values.subTitle}
        label="Product Description"
        variant="outlined"
        onChange={formik.handleChange}
      />
      <TextField
        id="price"
        name="price"
        value={formik.values.price}
        label="Price"
        variant="outlined"
        onChange={formik.handleChange}
      />

      <Button type="submit" variant="contained" color="primary">
        add new product
      </Button>
    </Box>
  );
};

export default AddNewProduct;

// const [title, setTitle] = useState("");
// const [img, setImg] = useState("");
// const [subTitle, setSubTitle] = useState("");
// const [price, setPrice] = useState("");

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField
//         value={title}
//         label="Title"
//         variant="outlined"
//         onChange={(event) => setTitle(event.target.value)}
//       />
//       <TextField
//         value={img}
//         label="Image URL"
//         variant="outlined"
//         onChange={(event) => setImg(event.target.value)}
//       />
//       <TextField
//         value={subTitle}
//         label="Product Description"
//         variant="outlined"
//         onChange={(event) => setSubTitle(event.target.value)}
//       />
//       <TextField
//         value={price}
//         label="Price"
//         variant="outlined"
//         onChange={(event) => setPrice(event.target.value)}
//       />

//       <Button type="submit" variant="contained" color="primary">
//         add new product
//       </Button>
//     </Box>
//   );
//
// por ser type submit directamente trigerea el submit del form. esto es por propiedades de html. Esto es porque el BOX es "form"
