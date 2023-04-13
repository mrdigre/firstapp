import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function AddNewProduct() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/products/", {
        title,
        img,
        subTitle,
        price,
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
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={title}
        label="Title"
        variant="outlined"
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        value={img}
        label="Image URL"
        variant="outlined"
        onChange={(event) => setImg(event.target.value)}
      />
      <TextField
        value={subTitle}
        label="Product Description"
        variant="outlined"
        onChange={(event) => setSubTitle(event.target.value)}
      />
      <TextField
        value={price}
        label="Price"
        variant="outlined"
        onChange={(event) => setPrice(event.target.value)}
      />

      <Button type="submit" variant="contained" color="primary">
        add new product
      </Button>
    </Box>
  );
}
// por ser type submit directamente trigerea el submit del form. esto es por propiedades de html. Esto es porque el BOX es "form"
